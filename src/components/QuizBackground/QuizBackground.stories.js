import React from 'react';
import QuizBackground from './index';

export default {
  component: QuizBackground,
  title: 'Component Lib/QuizBackground',
};

export const primary = ({ themes, backgroundImage }) => (
  <QuizBackground theme={themes} backgroundImage={backgroundImage} />
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
  backgroundImage: {
    type: { name: 'string', required: true },
    control: {
      type: 'text',
    },
    defaultValue:
      'https://cdn.leverageedu.com/blog/wp-content/uploads/2020/08/07194032/SCALA-Programming-Language-2.png',
    table: {
      category: 'Url',
    },
  },
};
