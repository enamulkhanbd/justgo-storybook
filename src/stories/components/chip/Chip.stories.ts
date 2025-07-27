import type { Meta, StoryObj } from '@storybook/react-vite';
import { Chip } from './Chip';

import React from 'react';

// Sample icons for stories
const HeartIcon = () => {
  return React.createElement('svg', { width: 16, height: 16, viewBox: '0 0 16 16', fill: 'currentColor' },
    React.createElement('path', { d: 'M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748z' })
  );
};

const UserIcon = () => {
  return React.createElement('svg', { width: 16, height: 16, viewBox: '0 0 16 16', fill: 'currentColor' },
    React.createElement('path', { d: 'M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z' })
  );
};

const StarIcon = () => {
  return React.createElement('svg', { width: 16, height: 16, viewBox: '0 0 16 16', fill: 'currentColor' },
    React.createElement('path', { d: 'M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' })
  );
};

const TagIcon = () => {
  return React.createElement('svg', { width: 16, height: 16, viewBox: '0 0 16 16', fill: 'currentColor' },
    React.createElement('path', { d: 'M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l6.414 6.414a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0L2.293 7.293A1 1 0 0 1 2 6.586V2z' }),
    React.createElement('path', { d: 'M5.5 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z' })
  );
};

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile chip component that can be used for tags, filters, selections, and more. Supports multiple variants, sizes, colors, and interactive features.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'outlined', 'filled', 'selectable'],
      description: 'Visual style variant of the chip',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the chip',
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'info'],
      description: 'Color theme of the chip',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the chip is disabled',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    removable: {
      control: { type: 'boolean' },
      description: 'Whether the chip can be removed',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    selected: {
      control: { type: 'boolean' },
      description: 'Whether the chip is initially selected (for selectable variant)',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    label: {
      control: { type: 'text' },
      description: 'The text content of the chip',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes',
    },
    onClick: { 
      action: 'clicked',
      description: 'Click handler function',
    },
    onRemove: { 
      action: 'removed',
      description: 'Remove handler function',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Chip>;

// Default story
export const Default: Story = {
  args: {
    label: 'Default Chip',
  },
};

// Playground story for interactive testing
export const Playground: Story = {
  args: {
    label: 'Interactive Chip',
    variant: 'default',
    size: 'medium',
    color: 'primary',
    disabled: false,
    removable: false,
    selected: false,
  },
};

// Variants showcase
export const Variants: Story = {
  render: () => {
    return React.createElement('div', { style: { display: 'flex', gap: '12px', flexWrap: 'wrap' } },
      React.createElement(Chip, { label: "Default", variant: "default" }),
      React.createElement(Chip, { label: "Outlined", variant: "outlined" }),
      React.createElement(Chip, { label: "Filled", variant: "filled" }),
      React.createElement(Chip, { label: "Selectable", variant: "selectable" })
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Different visual variants of the chip component.',
      },
    },
  },
};

// Size variations
export const Sizes: Story = {
  render: () => {
    return React.createElement('div', { style: { display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' } },
      React.createElement(Chip, { label: "Small", size: "small" }),
      React.createElement(Chip, { label: "Medium", size: "medium" }),
      React.createElement(Chip, { label: "Large", size: "large" })
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Available size options for the chip component.',
      },
    },
  },
};

// Color themes
export const Colors: Story = {
  render: () => {
    return React.createElement('div', { style: { display: 'flex', gap: '12px', flexWrap: 'wrap' } },
      React.createElement(Chip, { label: "Primary", color: "primary", variant: "filled" }),
      React.createElement(Chip, { label: "Secondary", color: "secondary", variant: "filled" }),
      React.createElement(Chip, { label: "Success", color: "success", variant: "filled" }),
      React.createElement(Chip, { label: "Warning", color: "warning", variant: "filled" }),
      React.createElement(Chip, { label: "Error", color: "error", variant: "filled" }),
      React.createElement(Chip, { label: "Info", color: "info", variant: "filled" })
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Available color themes for the chip component.',
      },
    },
  },
};

// With icons
export const WithIcons: Story = {
  render: () => {
    return React.createElement('div', { style: { display: 'flex', gap: '12px', flexWrap: 'wrap' } },
      React.createElement(Chip, { label: "Heart", icon: React.createElement(HeartIcon) }),
      React.createElement(Chip, { label: "User", icon: React.createElement(UserIcon), variant: "outlined" }),
      React.createElement(Chip, { label: "Star", icon: React.createElement(StarIcon), variant: "filled", color: "warning" }),
      React.createElement(Chip, { label: "Tag", icon: React.createElement(TagIcon), variant: "selectable" })
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Chips with icons for enhanced visual communication.',
      },
    },
  },
};

// With avatars
export const WithAvatars: Story = {
  render: () => {
    return React.createElement('div', { style: { display: 'flex', gap: '12px', flexWrap: 'wrap' } },
      React.createElement(Chip, { 
        label: "John Doe", 
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" 
      }),
      React.createElement(Chip, { 
        label: "Jane Smith", 
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b9a5b4ba?w=32&h=32&fit=crop&crop=face", 
        variant: "outlined"
      }),
      React.createElement(Chip, { 
        label: "Alex Johnson", 
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face", 
        variant: "filled",
        color: "primary"
      })
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Chips with user avatars for person-related tags.',
      },
    },
  },
};

// Removable chips
export const Removable: Story = {
  render: () => {
    return React.createElement('div', { style: { display: 'flex', gap: '12px', flexWrap: 'wrap' } },
      React.createElement(Chip, { label: "Removable", removable: true }),
      React.createElement(Chip, { label: "With Icon", icon: React.createElement(StarIcon), removable: true, variant: "outlined" }),
      React.createElement(Chip, { label: "Filled", removable: true, variant: "filled", color: "primary" }),
      React.createElement(Chip, { label: "Large", removable: true, variant: "filled", size: "large", color: "success" })
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Chips that can be removed with a close button.',
      },
    },
  },
};

// Different states
export const States: Story = {
  render: () => {
    return React.createElement('div', { style: { display: 'flex', gap: '12px', flexWrap: 'wrap' } },
      React.createElement(Chip, { label: "Normal" }),
      React.createElement(Chip, { label: "Disabled", disabled: true }),
      React.createElement(Chip, { label: "Selected", variant: "selectable", selected: true }),
      React.createElement(Chip, { label: "Disabled Selected", variant: "selectable", selected: true, disabled: true }),
      React.createElement(Chip, { label: "Disabled Removable", removable: true, disabled: true })
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Different interaction states of the chip component.',
      },
    },
  },
};

// Interactive selectable example
export const SelectableChips: Story = {
  render: () => {
    return React.createElement('div', { style: { display: 'flex', gap: '8px', flexWrap: 'wrap' } },
      React.createElement(Chip, { label: "React", variant: "selectable" }),
      React.createElement(Chip, { label: "TypeScript", variant: "selectable" }),
      React.createElement(Chip, { label: "JavaScript", variant: "selectable", selected: true }),
      React.createElement(Chip, { label: "CSS", variant: "selectable" }),
      React.createElement(Chip, { label: "HTML", variant: "selectable" }),
      React.createElement(Chip, { label: "Node.js", variant: "selectable" })
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive selectable chips for filtering or tagging.',
      },
    },
  },
};

// Complex example with all features
export const ComplexExample: Story = {
  render: () => {
    return React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '600px' } },
      React.createElement('div', {},
        React.createElement('h4', { style: { margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' } }, 'User Tags'),
        React.createElement('div', { style: { display: 'flex', gap: '8px', flexWrap: 'wrap' } },
          React.createElement(Chip, { 
            label: "Admin", 
            variant: "filled", 
            color: "error", 
            size: "small"
          }),
          React.createElement(Chip, { 
            label: "Developer", 
            variant: "filled", 
            color: "primary", 
            size: "small",
            icon: React.createElement(UserIcon)
          }),
          React.createElement(Chip, { 
            label: "Designer", 
            variant: "outlined", 
            color: "secondary", 
            size: "small"
          })
        )
      ),
      
      React.createElement('div', {},
        React.createElement('h4', { style: { margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' } }, 'Skills Filter'),
        React.createElement('div', { style: { display: 'flex', gap: '8px', flexWrap: 'wrap' } },
          React.createElement(Chip, { 
            label: "React", 
            variant: "selectable", 
            selected: true,
            icon: React.createElement(StarIcon)
          }),
          React.createElement(Chip, { 
            label: "TypeScript", 
            variant: "selectable"
          }),
          React.createElement(Chip, { 
            label: "Node.js", 
            variant: "selectable", 
            selected: true
          }),
          React.createElement(Chip, { 
            label: "Python", 
            variant: "selectable"
          })
        )
      ),
      
      React.createElement('div', {},
        React.createElement('h4', { style: { margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' } }, 'Project Tags'),
        React.createElement('div', { style: { display: 'flex', gap: '8px', flexWrap: 'wrap' } },
          React.createElement(Chip, { 
            label: "In Progress", 
            variant: "filled", 
            color: "warning",
            removable: true
          }),
          React.createElement(Chip, { 
            label: "High Priority", 
            variant: "filled", 
            color: "error",
            removable: true
          }),
          React.createElement(Chip, { 
            label: "Backend", 
            variant: "outlined", 
            color: "info",
            removable: true,
            icon: React.createElement(TagIcon)
          }),
          React.createElement(Chip, { 
            label: "Frontend", 
            variant: "outlined", 
            color: "success",
            removable: true,
            icon: React.createElement(TagIcon)
          })
        )
      ),
      
      React.createElement('div', {},
        React.createElement('h4', { style: { margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' } }, 'Team Members'),
        React.createElement('div', { style: { display: 'flex', gap: '8px', flexWrap: 'wrap' } },
          React.createElement(Chip, { 
            label: "John Smith", 
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
            removable: true
          }),
          React.createElement(Chip, { 
            label: "Sarah Wilson", 
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b9a5b4ba?w=32&h=32&fit=crop&crop=face",
            removable: true
          }),
          React.createElement(Chip, { 
            label: "Mike Johnson", 
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
            removable: true
          })
        )
      )
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'A complex example showcasing different use cases of the chip component in a real-world scenario.',
      },
    },
  },
};

// All size and variant combinations
export const AllCombinations: Story = {
  render: () => {
    return React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: '20px' } },
      ['small', 'medium', 'large'].map((size) => 
        React.createElement('div', { key: size },
          React.createElement('h4', { style: { margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600', textTransform: 'capitalize' } },
            `${size} Size`
          ),
          React.createElement('div', { style: { display: 'flex', gap: '8px', flexWrap: 'wrap' } },
            React.createElement(Chip, { label: "Default", size: size }),
            React.createElement(Chip, { label: "Outlined", size: size, variant: "outlined" }),
            React.createElement(Chip, { label: "Filled", size: size, variant: "filled" }),
            React.createElement(Chip, { label: "Selectable", size: size, variant: "selectable" }),
            React.createElement(Chip, { label: "With Icon", size: size, icon: React.createElement(HeartIcon) }),
            React.createElement(Chip, { label: "Removable", size: size, removable: true }),
            React.createElement(Chip, { label: "Disabled", size: size, disabled: true })
          )
        )
      )
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'All size and variant combinations for comprehensive testing.',
      },
    },
  },
};

// Color variations across variants
export const ColorVariations: Story = {
  render: () => {
    return React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: '20px' } },
      ['default', 'outlined', 'filled'].map((variant) => 
        React.createElement('div', { key: variant },
          React.createElement('h4', { style: { margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600', textTransform: 'capitalize' } },
            `${variant} Variant`
          ),
          React.createElement('div', { style: { display: 'flex', gap: '8px', flexWrap: 'wrap' } },
            React.createElement(Chip, { label: "Primary", variant: variant, color: "primary" }),
            React.createElement(Chip, { label: "Secondary", variant: variant, color: "secondary" }),
            React.createElement(Chip, { label: "Success", variant: variant, color: "success" }),
            React.createElement(Chip, { label: "Warning", variant: variant, color: "warning" }),
            React.createElement(Chip, { label: "Error", variant: variant, color: "error" }),
            React.createElement(Chip, { label: "Info", variant: variant, color: "info" })
          )
        )
      )
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Color variations across different variants.',
      },
    },
  },
};

// Responsive behavior
export const ResponsiveBehavior: Story = {
  render: () => {
    return React.createElement('div', { style: { maxWidth: '300px', border: '1px dashed #ccc', padding: '16px' } },
      React.createElement('p', { style: { margin: '0 0 12px 0', fontSize: '12px', color: '#666' } },
        'Resize viewport to see responsive behavior'
      ),
      React.createElement('div', { style: { display: 'flex', gap: '8px', flexWrap: 'wrap' } },
        React.createElement(Chip, { label: "React Development", removable: true }),
        React.createElement(Chip, { label: "TypeScript", variant: "outlined" }),
        React.createElement(Chip, { label: "Component Library", variant: "filled", color: "primary" }),
        React.createElement(Chip, { label: "Storybook", variant: "selectable" }),
        React.createElement(Chip, { label: "User Interface Design", removable: true }),
        React.createElement(Chip, { label: "Frontend", variant: "filled", color: "success" }),
        React.createElement(Chip, { label: "Backend Development", variant: "outlined", color: "info" })
      )
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Responsive behavior of chips in constrained containers.',
      },
    },
  },
};

// Edge cases
export const EdgeCases: Story = {
  render: () => {
    return React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: '16px' } },
      React.createElement('div', {},
        React.createElement('h4', { style: { margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' } }, 'Long Text'),
        React.createElement('div', { style: { display: 'flex', gap: '8px', flexWrap: 'wrap', maxWidth: '400px' } },
          React.createElement(Chip, { label: "This is a very long chip label that might overflow" }),
          React.createElement(Chip, { label: "Another extremely long label for testing purposes", variant: "outlined" })
        )
      ),
      
      React.createElement('div', {},
        React.createElement('h4', { style: { margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' } }, 'Single Character'),
        React.createElement('div', { style: { display: 'flex', gap: '8px', flexWrap: 'wrap' } },
          React.createElement(Chip, { label: "A", size: "small" }),
          React.createElement(Chip, { label: "B", size: "medium" }),
          React.createElement(Chip, { label: "C", size: "large" })
        )
      ),
      
      React.createElement('div', {},
        React.createElement('h4', { style: { margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' } }, 'Numbers and Special Characters'),
        React.createElement('div', { style: { display: 'flex', gap: '8px', flexWrap: 'wrap' } },
          React.createElement(Chip, { label: "123" }),
          React.createElement(Chip, { label: "$99.99", variant: "filled", color: "success" }),
          React.createElement(Chip, { label: "#hashtag", variant: "outlined" }),
          React.createElement(Chip, { label: "@username", variant: "selectable" }),
          React.createElement(Chip, { label: "50%", removable: true })
        )
      ),
      
      React.createElement('div', {},
        React.createElement('h4', { style: { margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' } }, 'Empty or Minimal Content'),
        React.createElement('div', { style: { display: 'flex', gap: '8px', flexWrap: 'wrap' } },
          React.createElement(Chip, { label: " " }),
          React.createElement(Chip, { label: "•" }),
          React.createElement(Chip, { label: "...", variant: "outlined" })
        )
      )
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Edge cases and unusual content scenarios.',
      },
    },
  },
};