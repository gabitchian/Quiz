import React from 'react';
import styled from 'styled-components';

// src/components/Footer/index.js
const FooterWrapper = styled.footer`
  background-color: #00000070;
  padding: 10px;
  display: flex;
  align-items: center;
  margin: 5px;
  border-radius: 4px;
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: white;
    text-decoration: none;
    transition: 0.3s;
    &:hover,
    &:focus {
      opacity: 0.5;
    }
    span {
      text-decoration: underline;
    }
  }
`;

export default ({ username, name, ...props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <FooterWrapper {...props}>
    <a href={`https://github.com/${username}`}>
      <img
        src={`https://avatars.githubusercontent.com/${username}`}
        alt={name}
        style={{ borderRadius: '50%' }}
      />
    </a>
    <p>
      Criado por{' '}
      <a href={`https://github.com/${username}`}>
        <span>{name}</span>
      </a>
    </p>
  </FooterWrapper>
);
