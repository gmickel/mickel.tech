'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

type Cell = 'X' | 'O' | null;
type Board = Cell[];
type GameResult = 'human' | 'wopr' | 'draw' | 'quit';

const WINNING_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
] as const;

const RESULT_STATUS: Record<GameResult, string> = {
  human: 'HUMAN VICTORY CONFIRMED.',
  wopr: 'WOPR DOMINATES THIS TIMELINE.',
  draw: 'MUTUALLY ASSURED DRAW. NO WINNERS DETECTED.',
  quit: 'SESSION TERMINATED BY USER.',
};

const HUMAN_MARK: Exclude<Cell, null> = 'X';
const AI_MARK: Exclude<Cell, null> = 'O';
const INPUT_REGEX = /^[1-9]$/;

const createInitialBoard = (): Board => Array.from({ length: 9 }, () => null);

const getWinner = (board: Board): Cell => {
  for (const [a, b, c] of WINNING_LINES) {
    if (board[a] && board[a] === board[b] && board[b] === board[c]) {
      return board[a];
    }
  }
  return null;
};

const isBoardFull = (board: Board) => board.every(Boolean);

const evaluateBoardScore = (board: Board, depth: number): number => {
  const winner = getWinner(board);
  if (winner === AI_MARK) {
    return 10 - depth;
  }
  if (winner === HUMAN_MARK) {
    return depth - 10;
  }
  return 0;
};

const minimax = (
  board: Board,
  isAITurn: boolean,
  depth: number
): { score: number; move: number | null } => {
  const winner = getWinner(board);
  if (winner || isBoardFull(board)) {
    return { score: evaluateBoardScore(board, depth), move: null };
  }

  let bestScore = isAITurn
    ? Number.NEGATIVE_INFINITY
    : Number.POSITIVE_INFINITY;
  let bestMove: number | null = null;

  for (let i = 0; i < board.length; i += 1) {
    if (board[i]) {
      continue;
    }

    board[i] = isAITurn ? AI_MARK : HUMAN_MARK;
    const { score } = minimax(board, !isAITurn, depth + 1);
    board[i] = null;

    if (isAITurn) {
      if (score > bestScore) {
        bestScore = score;
        bestMove = i;
      }
    } else if (score < bestScore) {
      bestScore = score;
      bestMove = i;
    }
  }

  return { score: bestScore, move: bestMove };
};

const findBestAIMove = (board: Board): number | null => {
  const boardClone = [...board];
  const { move } = minimax(boardClone, true, 0);
  return move;
};

interface TicTacToeProps {
  onQuit: () => void;
}

export function useTicTacToe(onQuit: TicTacToeProps['onQuit']) {
  const [gameActive, setGameActive] = useState(false);
  const [board, setBoard] = useState<Board>(createInitialBoard());
  const [playerTurn, setPlayerTurn] = useState<'human' | 'wopr'>('human');
  const [gameResult, setGameResult] = useState<GameResult | null>(null);
  const [gameLog, setGameLog] = useState<string[]>([]);
  const aiTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearAiTimeout = useCallback(() => {
    if (aiTimeoutRef.current) {
      clearTimeout(aiTimeoutRef.current);
      aiTimeoutRef.current = null;
    }
  }, []);

  const appendGameLog = useCallback((lines: string | string[]) => {
    setGameLog((prev) => [
      ...prev,
      ...(Array.isArray(lines) ? lines : [lines]),
    ]);
  }, []);

  const endGame = useCallback(
    (result: GameResult) => {
      clearAiTimeout();
      setGameActive(false);
      setPlayerTurn('human');
      setGameResult(result);

      const lines: string[] = [];
      switch (result) {
        case 'human':
          lines.push('', 'WINNER: HUMAN. INTERESTING.');
          break;
        case 'wopr':
          lines.push('', 'WINNER: WOPR. GAME OVER.');
          break;
        case 'draw':
          lines.push(
            '',
            'A STRANGE GAME.',
            'THE ONLY WINNING MOVE IS NOT TO PLAY.',
            '',
            'HOW ABOUT A NICE GAME OF CHESS?'
          );
          break;
        case 'quit':
          lines.push('', 'SESSION TERMINATED. RETURNING TO OPS CONSOLE.');
          onQuit();
          break;
        default:
          break;
      }

      appendGameLog(lines);
    },
    [appendGameLog, clearAiTimeout, onQuit]
  );

  const evaluateBoard = useCallback(
    (currentBoard: Board) => {
      const winner = getWinner(currentBoard);
      if (winner === HUMAN_MARK) {
        endGame('human');
        return true;
      }
      if (winner === AI_MARK) {
        endGame('wopr');
        return true;
      }
      if (isBoardFull(currentBoard)) {
        endGame('draw');
        return true;
      }
      return false;
    },
    [endGame]
  );

  const makeAIMove = useCallback(
    (currentBoard: Board) => {
      const available = currentBoard.reduce<number[]>((acc, cell, idx) => {
        if (!cell) {
          acc.push(idx);
        }
        return acc;
      }, []);

      if (!available.length) {
        evaluateBoard(currentBoard);
        return;
      }

      const choice = findBestAIMove(currentBoard) ?? available[0];

      const nextBoard = [...currentBoard];
      nextBoard[choice] = AI_MARK;

      setBoard(nextBoard);
      appendGameLog(`WOPR deploys to sector ${choice + 1}.`);

      const finished = evaluateBoard(nextBoard);
      if (!finished) {
        setPlayerTurn('human');
        appendGameLog('Awaiting your move...');
      }
    },
    [appendGameLog, evaluateBoard]
  );

  const scheduleAIMove = useCallback(
    (boardState: Board) => {
      clearAiTimeout();
      aiTimeoutRef.current = setTimeout(() => makeAIMove(boardState), 800);
    },
    [clearAiTimeout, makeAIMove]
  );

  const handlePlayerMove = useCallback(
    (index: number) => {
      if (!gameActive || playerTurn !== 'human' || board[index]) {
        return;
      }

      const nextBoard = [...board];
      nextBoard[index] = HUMAN_MARK;

      setBoard(nextBoard);
      appendGameLog(`HUMAN selects sector ${index + 1}.`);

      const finished = evaluateBoard(nextBoard);
      if (!finished) {
        setPlayerTurn('wopr');
        appendGameLog('WOPR is calculating...');
        scheduleAIMove(nextBoard);
      }
    },
    [
      appendGameLog,
      board,
      evaluateBoard,
      gameActive,
      playerTurn,
      scheduleAIMove,
    ]
  );

  const handleQuit = useCallback(() => {
    if (!gameActive) {
      return;
    }
    endGame('quit');
  }, [endGame, gameActive]);

  const startGame = useCallback(() => {
    clearAiTimeout();
    const freshBoard = createInitialBoard();
    setBoard(freshBoard);
    setGameActive(true);
    setPlayerTurn('human');
    setGameResult(null);
    setGameLog(['HUMAN has first move.']);
  }, [clearAiTimeout]);

  const resetGame = useCallback(() => {
    clearAiTimeout();
    setBoard(createInitialBoard());
    setGameActive(false);
    setPlayerTurn('human');
    setGameResult(null);
    setGameLog([]);
  }, [clearAiTimeout]);

  // Cleanup timeout on unmount
  useEffect(() => () => clearAiTimeout(), [clearAiTimeout]);

  // Keyboard controls
  useEffect(() => {
    if (!gameActive) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      if (key === 'q') {
        event.preventDefault();
        handleQuit();
        return;
      }
      if (INPUT_REGEX.test(key)) {
        event.preventDefault();
        handlePlayerMove(Number(key) - 1);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [gameActive, handlePlayerMove, handleQuit]);

  const getStatusText = () => {
    if (gameActive) {
      return playerTurn === 'human'
        ? 'Awaiting HUMAN input (keys 1-9).'
        : 'WOPR executing counter-move...';
    }
    return gameResult ? RESULT_STATUS[gameResult] : '';
  };

  const statusText = getStatusText();

  const isVisible = gameActive || gameResult !== null;

  return {
    board,
    gameActive,
    gameLog,
    gameResult,
    isVisible,
    resetGame,
    startGame,
    statusText,
  };
}

interface TicTacToeBoardProps {
  board: Board;
  gameActive: boolean;
  gameLog: string[];
  statusText: string;
}

export function TicTacToeBoard({
  board,
  gameActive,
  gameLog,
  statusText,
}: TicTacToeBoardProps) {
  const gameLogRef = useRef<HTMLDivElement>(null);

  // biome-ignore lint/correctness/useExhaustiveDependencies: Intentionally triggering scroll on log change
  useEffect(() => {
    const el = gameLogRef.current;
    if (!el) {
      return;
    }
    el.scrollTo({ top: el.scrollHeight, behavior: 'auto' });
  }, [gameLog]);

  return (
    <div
      aria-live="polite"
      className="grid gap-3 border-white/10 border-b bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent p-6 text-white/80"
    >
      <div className="text-white/60 text-xs uppercase tracking-[0.3em]">
        TIC-TAC-TOE.EXE
        <span className="text-white/30">
          {gameActive ? ' // RUNNING' : ' // ARCHIVED'}
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2 font-mono text-xl">
        {board.map((cell, idx) => {
          const isX = cell === 'X';
          const isO = cell === 'O';
          const label = cell ?? idx + 1;
          let colorClass = 'text-white/40';
          if (isX) {
            colorClass = 'text-cyan-300';
          } else if (isO) {
            colorClass = 'text-emerald-300';
          }

          return (
            <div
              className={`flex h-12 items-center justify-center rounded border border-white/20 bg-black/40 font-bold leading-none shadow-inner ${colorClass}`}
              // biome-ignore lint/suspicious/noArrayIndexKey: Board indices are stable keys
              key={`cell-${idx}`}
            >
              {label}
            </div>
          );
        })}
      </div>
      {statusText && (
        <p className="text-[11px] text-white/60 uppercase tracking-wider">
          {statusText}
        </p>
      )}
      {gameActive && (
        <p className="text-[11px] text-white/50">
          Use keys 1-9 to deploy X. Press Q to abort session.
        </p>
      )}
      {gameLog.length > 0 && (
        <div
          className="no-scrollbar max-h-24 overflow-y-auto rounded border border-white/10 bg-black/30 p-3"
          ref={gameLogRef}
        >
          {gameLog.map((line, idx) => (
            <p
              className={`text-[11px] ${line === '' ? 'h-3' : 'text-success/70'}`}
              // biome-ignore lint/suspicious/noArrayIndexKey: Log order is stable
              key={`gamelog-${idx}`}
            >
              {line}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
