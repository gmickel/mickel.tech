'use client';

import { useCallback } from 'react';

import { ContactFooter } from './contact-footer';
import {
  TerminalHeader,
  TerminalInput,
  TerminalOutput,
  useTerminal,
} from './terminal';
import { TicTacToeBoard, useTicTacToe } from './tic-tac-toe';

export default function Contact() {
  const game = useTicTacToe(
    useCallback(() => {
      // No-op callback for quitting
    }, [])
  );

  const terminal = useTerminal({
    gameActive: game.gameActive,
    onJoshua: game.startGame,
    onClear: game.resetGame,
  });

  return (
    <section
      aria-labelledby="contact-heading"
      className="bg-secondary/10 px-6 py-24 md:px-20"
      id="contact"
    >
      <div className="mx-auto max-w-4xl space-y-12">
        <header className="mb-8 flex items-center gap-4">
          <h2 className="font-bold text-4xl" id="contact-heading">
            OPEN CHANNEL
          </h2>
          <div aria-hidden="true" className="h-px flex-grow bg-white/10" />
        </header>

        {/* Terminal */}
        <div className="flex min-h-[400px] w-full flex-col overflow-hidden rounded-lg border border-white/20 bg-black font-mono text-sm shadow-2xl">
          <TerminalHeader />

          <div className="flex flex-grow flex-col">
            {game.isVisible ? (
              <TicTacToeBoard
                board={game.board}
                gameActive={game.gameActive}
                gameLog={game.gameLog}
                statusText={game.statusText}
              />
            ) : null}

            <TerminalOutput
              focusInput={terminal.focusInput}
              handleKeyDown={terminal.handleKeyDown}
              logRef={terminal.logRef}
              output={terminal.output}
            />
          </div>

          <TerminalInput
            disabled={game.gameActive}
            handleCommand={terminal.handleCommand}
            input={terminal.input}
            inputRef={terminal.inputRef}
            setInput={terminal.setInput}
          />
        </div>

        <ContactFooter />
      </div>
    </section>
  );
}
