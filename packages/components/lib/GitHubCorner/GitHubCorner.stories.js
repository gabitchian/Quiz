import React from 'react';
import GitHubCorner from './GitHubCorner';

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
      color: '#e71d36',
      contrastText: '#FFFFFF',
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

export const secondary = ({ themes, projectUrl }) => (
  <GitHubCorner projectUrl={projectUrl} theme={themes} />
);

secondary.argTypes = {
  themes: {
    type: { name: 'object', required: true },
    control: {
      type: 'object',
    },
    defaultValue: {
      color: '#00a152',
      contrastText: '#FFFFFF',
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
