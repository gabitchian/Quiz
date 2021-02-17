import React from 'react';
import BackLinkArrow from './index';

export default {
  component: BackLinkArrow,
  title: 'Component Lib/BackLinkArrow',
};

export const Story = () => <BackLinkArrow href='/' />;

Story.argTypes = {
  href: {
    type: { name: 'string', required: true },
    control: {
      type: 'text',
    },
    defaultValue: '/',
  },
};
