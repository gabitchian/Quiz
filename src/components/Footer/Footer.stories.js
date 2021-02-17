import React from 'react';
import FooterAlura from './Alura';
import FooterUser from './User';

export default {
  component: FooterAlura,
  title: 'Component Lib/Footer',
};

export const alura = () => <FooterAlura />;
export const user = ({ name, username }) => (
  <FooterUser name={name} username={username} />
);

user.argTypes = {
  name: {
    type: { name: 'string', required: true },
    control: {
      type: 'text',
    },
    defaultValue: 'Gabi Tchian',
  },
  username: {
    type: { name: 'string', required: true },
    control: {
      type: 'text',
    },
    defaultValue: 'gabitchian',
  },
};
