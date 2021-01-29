import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
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

export default Spinner;
