# JustGo Storybook

[![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/images/badge/badge-storybook.svg)](https://your-storybook-url.com)

Welcome to the official Storybook for the JustGo design system. This project serves as the central hub for developing, documenting, and testing UI components in an isolated environment.

Our goal is to create a consistent, scalable, and maintainable component library. To achieve this, we leverage the power of **design tokens** managed through **Style Dictionary**, which are automatically transformed into CSS variables for seamless integration.

---

## 🚀 Live Demo

View the live, interactive component library here:

**[➡️ View Live Storybook](https://your-storybook-url.com)**

_(Replace `https://your-storybook-url.com` with your actual deployment URL, for example, from Netlify or Vercel.)_

---

## ✨ Key Features

- **📖 Component-Driven Development:** Build and test components in isolation.
- **🎨 Token-Based Theming:** Uses Style Dictionary to convert JSON design tokens into ready-to-use CSS variables.
- **🔄 Synced with Design:** Tokens are sourced from a dedicated submodule, ensuring design and development stay in sync.
- **✅ Automated Workflow:** Scripts to build the Storybook and transform tokens.
- **🚀 Ready for Deployment:** Easily build and deploy a static version of the Storybook.

---

## 🛠️ Getting Started

Follow these instructions to set up the project on your local machine for development and testing.

### Prerequisites

Make sure you have the following software installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation Steps

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/enamulkhanbd/justgo-storybook.git](https://github.com/enamulkhanbd/justgo-storybook.git)
    cd justgo-storybook
    ```

2.  **Initialize and update the Git submodule:**
    Our design tokens are managed in a separate repository and included as a submodule. This command fetches the token files.

    ```bash
    git submodule update --init --recursive
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

---

## ▶️ Available Scripts

This project includes several scripts to help with development:

| Script                    | Description                                                                   |
| ------------------------- | ----------------------------------------------------------------------------- |
| `npm run storybook`       | Starts the Storybook development server on `localhost:6006`.                  |
| `npm run build-storybook` | Builds a static version of the Storybook in the `storybook-static` directory. |
| `npm run build:tokens`    | Transforms design tokens into CSS variables using Style Dictionary.           |

---

## 🎨 Design Tokens Workflow

We use **Style Dictionary** to automatically transform our design tokens (colors, spacing, typography, etc.) into code.

1.  **Source:** The single source of truth for our design tokens are the JSON files located in the `/tokens` directory (our Git submodule).
2.  **Transformation:** When you run `npm run build:tokens`, Style Dictionary processes these JSON files based on the configuration in `style-dictionary.config.js`.
3.  **Output:** The script generates a `variables.css` file in `build/css/`, containing all the design tokens as CSS custom properties.

This generated CSS file can then be imported into your project to style the components.

---

## 📁 Project Structure

Here is a high-level overview of the project's directory structure:

justgo-storybook/
├── .storybook/
│ ├── main.js # Main Storybook configuration
│ └── preview.js # Global decorators and parameters
│
├── build/
│ └── css/
│ └── variables.css # Generated CSS variables from tokens
│
├── src/
│ └── stories/ # All component stories are defined here
│
├── tokens/ # Git submodule containing the source JSON design tokens
│
├── .gitignore # Files and folders to be ignored by Git
├── package.json # Project dependencies and scripts
├── README.md # You are here!
└── style-dictionary.config.js # Configuration for Style Dictionary

---

## 🙌 How to Contribute

We welcome contributions! If you'd like to help improve the JustGo design system, please follow these steps:

1.  **Fork the repository.**
2.  **Create a new feature branch:** `git checkout -b feature/your-amazing-feature`
3.  **Make your changes.** Remember to write or update stories for any new or modified components.
4.  **Commit your changes:** `git commit -m 'feat: Add some amazing feature'`
5.  **Push to your branch:** `git push origin feature/your-amazing-feature`
6.  **Open a Pull Request** against the `main` branch of the original repository.

---

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
