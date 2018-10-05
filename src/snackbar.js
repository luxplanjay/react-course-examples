import React from 'react';
import { createPortal } from 'react-dom';
import styles from './snackbar.module.css';

const snackbarRoot = document.querySelector('#snackbar-root');

const Snackbar = ({ isOpen, message, onClose }) =>
  isOpen &&
  createPortal(
    <div className={styles.container}>
      <p className={styles.message}>{message}</p>
      <button className={styles.button} onClick={onClose}>
        <svg
          className={styles.icon}
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
          role="presentation"
        >
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          <path fill="none" d="M0 0h24v24H0z" />
        </svg>
      </button>
    </div>,
    snackbarRoot
  );

export default Snackbar;
