import React from 'react';
import Spinner from './Spinner';

export default {
  component: Spinner,
  title: 'Component Lib/Spinner',
};

export const done = ({ type }) => <Spinner type={type} />;

done.argTypes = {
  type: {
    type: { name: 'string', required: true },
    control: {
      type: 'select',
      options: ['verde', 'azul'],
    },
    defaultValue: 'verde',
  },
};
