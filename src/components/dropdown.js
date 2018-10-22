import React from 'react';
import { css } from 'emotion';

const styles = {
  dropdown: css`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  `,
  list: css`
    margin: 0;
    padding: 0;
    list-style: none;
  `,
  item: css`
    padding: 0.75rem 1rem;
    cursor: pointer;

    &:hover,
    &:focus,
    &:active {
      background-color: #f9fafc;
    }
  `
};

const Dropdown = ({ items }) => (
  <div className={styles.dropdown}>
    <ul className={styles.list}>
      {items.map(item => (
        <li className={styles.item} key={item}>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default Dropdown;
