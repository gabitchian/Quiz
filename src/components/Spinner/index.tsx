import React, { useState } from 'react';
import Lottie from 'react-lottie';
import styled, { keyframes } from 'styled-components';

import animationData from './animation.json';

/* const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 4px solid ${({ theme }) => theme.colors.primary};
  border-right: 4px solid ${({ theme }) => theme.colors.primary};
  border-bottom: 4px solid ${({ theme }) => theme.colors.primary};
  border-left: 4px solid ${({ theme }) => theme.colors.mainBg};
  background: transparent;
  width: 64px;
  height: 64px;
  border-radius: 50%;
`;

export default Spinner; */

const Spinner = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div style={{ pointerEvents: 'none' }}>
      <Lottie
        options={defaultOptions}
        height={200}
        width={200}
      />
    </div>
  );
};

export default Spinner;
