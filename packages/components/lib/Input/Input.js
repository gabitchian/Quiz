/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputBase = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.color};
  color: ${({ theme }) => theme.contrastText};
  background-color: ${({ theme }) => theme.mainBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: 0;
  margin-bottom: 25px;
`;

export default function Input({ onChange, placeholder, ...props }) {
  return (
    <div>
      <InputBase onChange={onChange} placeholder={placeholder} {...props} />
    </div>
  );
}

Input.defaultProps = {
  value: '',
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  themes: PropTypes.exact({
    color: PropTypes.string,
    contrastText: PropTypes.string,
    mainBg: PropTypes.string,
    borderRadius: PropTypes.string,
  }),
};
