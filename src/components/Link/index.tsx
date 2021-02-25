/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import NextLink from 'next/link';

export default ({ children, href, ...props }) => (
  <NextLink href={href} passHref>
    <a {...props}>
      {children}
    </a>
  </NextLink>
);
