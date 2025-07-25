# Development Setup Guide

Welcome to the project! This guide will walk you through setting up your development environment after cloning the repository.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **[pnpm](https://pnpm.io/)**: A fast, disk space efficient package manager.
- **[Node.js](https://nodejs.org/)**: We recommend using the latest Long-Term Support (LTS) version. Node.js comes with `npm` (Node Package Manager).
- **Git**: For version control and cloning the repository.
- **A Code Editor**: We recommend Visual Studio Code for a great out-of-the-box experience with TypeScript and React.

## Getting Started

Follow these steps to get your development environment up and running.

### 1. Clone the Repository

First, clone the project from GitHub to your local machine.

```bash
git clone https://github.com/your-username/storybook.git
```

_(Replace `https://github.com/your-username/storybook.git` with the actual repository URL.)_

### 2. Navigate to the Project Directory

```bash
cd storybook
```

### 3. Install Dependencies

Next, install the project's dependencies. These are the packages the project needs to run, which are defined in `package.json`.

```bash
npm install
```

This command reads `package.json` and downloads the required packages into a `node_modules` folder in your project directory.

> **Why is this step necessary?**
> The `.gitignore` file in this project is configured to exclude certain files and directories from being tracked by Git. This includes the `node_modules` directory, build outputs (`dist`), and log files. This practice keeps the repository lightweight and avoids "it works on my machine" issues by ensuring every developer installs the exact same dependency versions listed in `package-lock.json`.

## Available Scripts

Once the dependencies are installed, you can use the following scripts defined in `package.json`:

- **Run the development server:**

  ```bash
  npm run dev
  ```

  This will start the Vite development server, and you can view the application in your browser, usually at `http://localhost:5173`. The server supports Hot Module Replacement (HMR) for a fast development workflow.

- **Run Storybook:**

  ```bash
  npm run storybook
  ```

  This starts the Storybook server for developing and viewing UI components in isolation.

- **Build the application for production:**
  ```bash
  npm run build
  ```
  This command bundles the application into the `dist` folder, ready for deployment.

Happy coding!
