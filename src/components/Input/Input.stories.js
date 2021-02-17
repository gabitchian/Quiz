import React, { useState } from 'react';
import Input from './index';

export default {
  component: Input,
  title: 'Component Lib/Input',
};

export const primary = ({ themes }) => {
  const [name, setName] = useState('');
  return (
    <Input
      name='name'
      onChange={(input) => setName(input.target.value)}
      placeholder='Diz ai seu nome'
      value={name}
      theme={themes}
    />
  );
};

primary.argTypes = {
  themes: {
    type: { name: 'object', required: true },
    control: {
      type: 'object',
    },
    defaultValue: {
      color: '#e71d36',
      contrastText: '#FFFFFF',
      mainBg: '#3b0000',
      borderRadius: '4px',
    },
  },
};

export const secondary = ({ themes }) => {
  const [name, setName] = useState('');
  return (
    <Input
      name='name'
      onChange={(input) => setName(input.target.value)}
      placeholder='Diz ai seu nome'
      value={name}
      theme={themes}
    />
  );
};

secondary.argTypes = {
  themes: {
    type: { name: 'object', required: true },
    control: {
      type: 'object',
    },
    defaultValue: {
      color: '#00a152',
      contrastText: '#FFFFFF',
      mainBg: '#3b0000',
      borderRadius: '4px',
    },
  },
};
