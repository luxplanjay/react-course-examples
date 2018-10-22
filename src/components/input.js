import React from 'react';
import { css } from 'emotion';

const styles = css`
  display: block;
  width: 100%;
  height: 3rem;
  padding: 0.75rem;
  border: 2px solid transparent;
  border-radius: 4px;
  font-size: inherit;

  &:focus {
    border-color: #587ef5;
    outline: 0;
  }
`;

const Input = ({
  type = 'text',
  placeholder = '',
  onChange = () => null,
  onFocus = () => null,
  onBlur = () => null
}) => (
  <input
    className={styles}
    type={type}
    placeholder={placeholder}
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
  />
);

export default Input;
