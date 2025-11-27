# mickel.tech

A modern portfolio website built with Next.js, featuring a cyberpunk-inspired terminal interface and interactive elements.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Linting/Formatting**: Biome (via Ultracite)
- **Package Manager**: Bun

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) installed on your system

### Installation

```bash
# Install dependencies
bun install

# Run development server
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
# Build for production
bun run build

# Start production server
bun start
```

## Code Quality

This project uses **Ultracite** for automated code formatting and linting:

```bash
# Check for issues
bun run lint

# Auto-fix issues
bun run lint:fix
```

## Features

- **Terminal Interface**: Interactive terminal-style contact section
- **Easter Egg**: Try typing `joshua` in the terminal to challenge WOPR to a game of tic-tac-toe
- **Responsive Design**: Optimized for all screen sizes
- **Performance**: Server-side rendering with React Suspense boundaries

---

**Note**: The only winning move is not to play. But if you must, use keys 1-9 to deploy your X's.
