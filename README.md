# JustGo Storybook 📚

## What is JustGo Storybook? 🤔

JustGo Storybook is a **visual catalog** of website components - the building blocks that make up our website. Think of it like a **furniture catalog** where you can see all the pieces before assembling them into a complete room.

### For Non-Developers

Imagine building a house where every builder uses exactly the same types of doors, windows, and paint colors. This ensures the house looks consistent and professional. JustGo Storybook does this for websites by creating a collection of pre-designed components that everyone uses.

## Why We Need This 🎯

### The Problem

Without a component library like this:
- Different pages might have buttons that look different
- Text sizes and colors might be inconsistent
- Developers waste time recreating components that already exist
- Design changes become difficult to implement across the entire website

### The Solution

JustGo Storybook solves these problems by:
- Creating a **single source of truth** for all components
- Ensuring **visual consistency** across the entire website
- **Saving development time** by providing ready-to-use components
- Making it easy to **update designs everywhere** at once

## How It Works (Simple Version) 🛠️

1. **Designers** create the visual rules (colors, fonts, sizes)
2. These rules are stored as **design tokens** (think of them as the DNA of the design)
3. **Developers** build components following these rules
4. The components are displayed in **Storybook** (our visual catalog)
5. Everyone uses these components to build the website

## The Technology (Explained Simply) 💻

### Storybook

Think of Storybook as a **digital showroom** where you can:
- See every component in isolation
- Interact with components to test how they work
- View components in different states (normal, hover, clicked, etc.)
- See how components look on different screen sizes

### Style Dictionary

This is like a **universal translator** that converts design decisions into code:
- Designers say "use this blue color" (#007BFF)
- Style Dictionary creates code that developers can use
- When designers change the blue, it updates everywhere automatically

### CSS Variables

These are like **master controls** for the website's appearance:
- One place to change a color, and it updates everywhere
- Similar to changing the water temperature at the water heater instead of at each faucet

### Git Submodules

This is a way to share the design rules across multiple projects:
- Like having a shared recipe book that multiple restaurants use
- Ensures consistency across different websites or applications

## Project Organization 📁

Here's what each main folder contains:

- **📁 .storybook/** - Configuration files that control how Storybook works
- **📁 src/stories/** - The actual component examples and documentation
- **📁 justgo-planet/** - The design tokens (colors, fonts, spacing rules)
- **📁 public/** - Static files like images

## How to Use This Project 🚀

### For Viewers (Designers, Product Managers, Stakeholders)

1. **Visit the Storybook website** (ask a developer for the URL)
2. **Browse components** by clicking on them in the left sidebar
3. **Interact with components** to see how they behave
4. **View documentation** to understand how to use each component
5. **Check different device sizes** using the viewport controls at the top

### For Developers

#### Setup (One-time)

1. **Clone the repository**
   ```bash
   git clone https://github.com/enamulkhanbd/justgo-storybook.git
   cd justgo-storybook
   ```

2. **Get the design tokens**
   ```bash
   git submodule update --init --recursive
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

#### Daily Development

- **Start Storybook**: `npm run storybook`
- **Build for production**: `npm run build-storybook`
- **Update design tokens**: `npm run build:tokens`

## Design Tokens Explained 🎨

Design tokens are the building blocks of our design system. They include:

### Colors

All the colors used in the website, with names like:
- `primary` (main brand color)
- `secondary` (supporting color)
- `success` (green for positive actions)
- `error` (red for errors)

### Typography

Text styles including:
- Font families (which fonts to use)
- Font sizes (how big text should be)
- Line heights (spacing between lines)
- Font weights (how bold text should be)

### Spacing

Consistent spacing values used throughout the design:
- Margins (space around elements)
- Padding (space within elements)
- Gaps (space between elements)

### Advanced Features

- **Theme Support**: Light and dark mode versions of all colors
- **Brand Variations**: Support for multiple brand identities
- **Responsive Design**: Adjustments for different screen sizes

## Contributing to the Project 🤝

### For Everyone

- **Report issues** if you find something that doesn't look right
- **Suggest improvements** for components or documentation
- **Provide feedback** on usability and design

### For Developers

- **Add new components** following the established patterns
- **Improve existing components** by fixing bugs or adding features
- **Update documentation** to help others understand the system

## Getting Help 💬

- **GitHub Issues**: Report bugs or request features
- **Documentation**: Read this README and component documentation
- **Contact**: Reach out to [enamulkhanbd](https://github.com/enamulkhanbd) for questions

## Troubleshooting 🔧

### Common Issues

- **"Command not found" errors**: Make sure Node.js is installed and run `npm install`
- **Missing design tokens**: Run `git submodule update --init --recursive`
- **Storybook won't start**: Check if port 6006 is available or look for error messages
- **Components look wrong**: Run `npm run build:tokens` to update CSS variables

## License 📄

This project is licensed under the MIT License, which means you can:
- Use it for personal or commercial projects
- Modify it to suit your needs
- Distribute your modified version

## Acknowledgments 🙏

- Built with [Storybook](https://storybook.js.org), [Style Dictionary](https://amzn.github.io/style-dictionary/), and [React](https://reactjs.org)
- Thanks to all contributors and the open-source community

---

*This README is designed to be accessible to everyone, regardless of technical background. If anything is unclear, please let us know!*
