import React from 'react';
import PropTypes from 'prop-types';
import Lottie from 'react-lottie';
import verde from './verde.json';
import azul from './azul.json';

const Spinner = ({ type }) => {
  const animation = type === 'verde' ? verde : type === 'azul' ? azul : null;
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div style={{ pointerEvents: 'none' }}>
      <Lottie options={defaultOptions} height={200} width={200} />
    </div>
  );
};

Spinner.defaultProps = {
  type: 'verde',
};

Spinner.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Spinner;
