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
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
    span {
      text-decoration: underline;
    }
  }
`;

export default (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <FooterWrapper {...props}>
    <a href="https://github.com/gabitchian" >
      <img src="https://avatars.githubusercontent.com/gabitchian" alt="Gabi Tchian" style={{borderRadius: '50%'}} />
    </a>
    <p>
      Criado por
      {' '}
      <a href="https://github.com/gabitchian">
        <span>Gabi Tchian</span>
      </a>
    </p>
  </FooterWrapper>
);
