'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const INITIAL_OUTPUT = [
  'Mickel Tech console online.',
  'Type "help" for available commands.',
] as const;

interface TerminalProps {
  gameActive: boolean;
  onJoshua: () => void;
  onClear: () => void;
}

export function useTerminal({ gameActive, onJoshua, onClear }: TerminalProps) {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>([...INITIAL_OUTPUT]);
  const logRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const appendOutput = useCallback((lines: string | string[]) => {
    setOutput((prev) => [...prev, ...(Array.isArray(lines) ? lines : [lines])]);
  }, []);

  const handleCommand = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const cmd = input.trim().toLowerCase();
      let response = '';

      if (gameActive) {
        if (cmd) {
          appendOutput([
            `> ${input}`,
            'GAME ACTIVE >> Use 1-9 to place X or press Q to quit.',
          ]);
        }
        setInput('');
        return;
      }

      switch (cmd) {
        case 'help':
          response =
            'AVAILABLE COMMANDS: help, email, calendar, linkedin, x, blog, benchmark, work, summary, clear, joshua';
          break;
        case 'email':
          response = 'OPENING MAILER >> gordon@mickel.tech';
          window.location.href = 'mailto:gordon@mickel.tech';
          break;
        case 'calendar':
          response = 'ACCESSING SCHEDULER >> [Link opened in new tab]';
          window.open('https://cal.com/gmickel', '_blank');
          break;
        case 'linkedin':
          response = 'CONNECTING TO NETWORK >> [Link opened in new tab]';
          window.open('https://linkedin.com/in/gmickel', '_blank');
          break;
        case 'x':
          response = 'CONNECTING TO X >> [Link opened in new tab]';
          window.open('https://x.com/gmickel', '_blank');
          break;
        case 'blog':
          response =
            'LOADING BYTE-SIZED BRAINWAVES >> [Link opened in new tab]';
          window.open('https://bytesizedbrainwaves.substack.com', '_blank');
          break;
        case 'benchmark':
        case 'bench':
          response =
            'LOADING GMICKEL-BENCH >> Real-world AI coding evaluations';
          window.location.href = '/gmickel-bench';
          break;
        case 'work':
        case 'apps':
          response = 'LOADING PORTFOLIO >> Things I built';
          window.location.href = '/apps';
          break;
        case 'summary':
          response =
            'Gordon Mickel: AI SDLC & platform architect, Operating Principal at GrowthFactors / BU Bregal and ITDR-listed expert. I design AI SDLC, platforms and operational agents, and act as fractional CTO for high-stakes AI & software decisions.';
          break;
        case 'clear':
          setOutput([]);
          setInput('');
          onClear();
          return;
        case 'joshua':
          setOutput((prev) => [
            ...prev,
            '> joshua',
            'GREETINGS, PROFESSOR FALKEN.',
            'SHALL WE PLAY A GAME?',
            '',
            'Initializing Tic-Tac-Toe.exe...',
          ]);
          setInput('');
          inputRef.current?.blur();
          onJoshua();
          return;
        default:
          response = cmd ? `Command not found: ${cmd}` : '';
      }

      if (response) {
        setOutput((prev) => [...prev, `> ${input}`, response]);
      }
      setInput('');
    },
    [appendOutput, gameActive, input, onClear, onJoshua]
  );

  const focusInput = useCallback(() => {
    if (gameActive) {
      return;
    }
    inputRef.current?.focus();
  }, [gameActive]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (
        e.target === e.currentTarget &&
        (e.key === 'Enter' || e.key === ' ')
      ) {
        e.preventDefault();
        focusInput();
      }
    },
    [focusInput]
  );

  // Auto-scroll terminal output
  // biome-ignore lint/correctness/useExhaustiveDependencies: Intentionally triggering scroll on output change
  useEffect(() => {
    const logEl = logRef.current;
    if (!logEl) {
      return;
    }
    logEl.scrollTo({
      top: logEl.scrollHeight,
      behavior: gameActive ? 'auto' : 'smooth',
    });
  }, [gameActive, output]);

  return {
    focusInput,
    handleCommand,
    handleKeyDown,
    input,
    inputRef,
    logRef,
    output,
    setInput,
  };
}

interface TerminalOutputProps {
  output: string[];
  logRef: React.RefObject<HTMLDivElement | null>;
  focusInput: () => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => void;
}

export function TerminalOutput({
  output,
  logRef,
  focusInput,
  handleKeyDown,
}: TerminalOutputProps) {
  return (
    <div
      className="flex-grow space-y-2 overflow-y-auto p-6 text-white/80"
      onClick={focusInput}
      onKeyDown={handleKeyDown}
      ref={logRef}
      role="log"
    >
      {output.map((line, i) => (
        <div
          className={line.startsWith('>') ? 'text-white' : 'text-success/80'}
          // biome-ignore lint/suspicious/noArrayIndexKey: Order is stable and items are static logs
          key={`output-${i}`}
        >
          {line}
        </div>
      ))}
    </div>
  );
}

interface TerminalInputProps {
  input: string;
  setInput: (value: string) => void;
  handleCommand: (e: React.FormEvent) => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
  disabled: boolean;
}

export function TerminalInput({
  input,
  setInput,
  handleCommand,
  inputRef,
  disabled,
}: TerminalInputProps) {
  return (
    <form
      className="border-white/10 border-t bg-white/5 px-6 py-4"
      onSubmit={handleCommand}
    >
      <label className="sr-only" htmlFor="term-input">
        Enter command
      </label>
      <div className="flex items-center gap-2">
        <span aria-hidden="true" className="text-success">
          mickel.tech&gt;
        </span>
        <input
          autoComplete="off"
          className="flex-grow border-none bg-transparent p-0 text-white outline-none focus:ring-0 disabled:cursor-not-allowed disabled:text-white/40"
          disabled={disabled}
          id="term-input"
          onChange={(e) => setInput(e.target.value)}
          placeholder={
            disabled
              ? 'Use 1-9 or Q while the game runs...'
              : 'Type a command...'
          }
          ref={inputRef}
          type="text"
          value={input}
        />
      </div>
    </form>
  );
}

export function TerminalHeader() {
  return (
    <div className="flex items-center justify-between border-white/10 border-b bg-white/10 px-4 py-2">
      <div aria-hidden="true" className="flex gap-2">
        <div className="h-3 w-3 rounded-full bg-red-500/50" />
        <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
        <div className="h-3 w-3 rounded-full bg-green-500/50" />
      </div>
      <div className="text-muted-foreground text-xs">root@mickel-tech:~</div>
    </div>
  );
}
