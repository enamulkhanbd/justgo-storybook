export default {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links", 
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-vitest"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  typescript: {
    check: false,
    reactDocgen: "react-docgen-typescript",
  },
};
