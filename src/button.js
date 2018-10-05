import React from 'react';
import styles from './button.module.css';

const Button = ({ type = 'button', label, onClick }) => (
  <button className={styles.button} type={type} onClick={onClick}>
    {label}
  </button>
);

export default Button;
