import React from 'react';
import GitHubCorner from './index';

export default {
  component: GitHubCorner,
  title: 'Component Lib/GitHubCorner',
};

export const primary = ({ themes, projectUrl }) => (
  <GitHubCorner projectUrl={projectUrl} theme={themes} />
);

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
  projectUrl: {
    type: { name: 'string', required: true },
    control: {
      type: 'text',
    },
    defaultValue: 'https://github.com/gabitchian/aluraquiz',
    table: {
      category: 'Urls',
    },
  },
};
