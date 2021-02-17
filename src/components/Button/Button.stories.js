import React from 'react';
import { motion } from 'framer-motion';
import Button from './index';

export default {
  component: Button,
  title: 'Component Lib/Button',
};

export const primary = ({ themes, text, disabled }) => (
  <Button
    type='submit'
    theme={themes}
    as={motion.button}
    whileHover={{ scale: 1.15 }}
    whileTap={{ scale: 0.8 }}
    disabled={disabled}
  >
    {text}
  </Button>
);
/*
primary.args = {
  themes: {
    colors: {
      primary: '#e71d36',
      secondary: '#00a152',
      mainBg: '#3b0000',
      contrastText: '#FFFFFF',
      wrong: '#FF5722',
      success: '#4CAF50',
    },
    borderRadius: '4px',
  },
  text: 'Button',
};*/

primary.argTypes = {
  themes: {
    type: { name: 'object', required: true },
    control: {
      type: 'object',
    },
    defaultValue: {
      colors: {
        primary: '#e71d36',
        secondary: '#00a152',
        mainBg: '#3b0000',
        contrastText: '#FFFFFF',
        wrong: '#FF5722',
        success: '#4CAF50',
      },
      borderRadius: '4px',
    },
    table: {
      category: 'Colors',
    },
  },
  text: {
    type: { name: 'string', required: true },
    control: {
      type: 'text',
    },
    defaultValue: 'Button',
    table: {
      category: 'Text',
    },
  },
  disabled: {
    type: { name: 'boolean', required: true },
    control: {
      type: 'boolean',
    },
    defaultValue: false,
    table: {
      category: 'Booleans',
    },
  },
};

// primary.argTypes = {
//   themes: {
//     properties: {
//       colors: {
//         control: { type: 'object' },
//         properties: {
//           primary: { control: { type: 'color' } },
//           secondary: { control: { type: 'color' } },
//           mainBg: { control: { type: 'color' } },
//           contrastText: { control: { type: 'color' } },
//           wrong: { control: { type: 'color' } },
//           success: { control: { type: 'color' } },
//         },
//       },
//       borderRadius: {
//         control: { type: 'string' },
//       },
//     },
//     type: { name: 'object', required: true },
//     control: {
//       type: 'object',
//     },
//     defaultValue: {
//       colors: {
//         primary: '#e71d36',
//         secondary: '#00a152',
//         mainBg: '#3b0000',
//         contrastText: '#FFFFFF',
//         wrong: '#FF5722',
//         success: '#4CAF50',
//       },
//       borderRadius: '4px',
//     },
//   },
//   text: {
//     control: {
//       type: 'string',
//     },
//     defaultValue: 'Button',
//   },
//   disabled: {
//     control: {
//       type: 'select',
//       options: ['true', 'false'],
//     },
//     defaultValue: 'false',
//   },
// };
