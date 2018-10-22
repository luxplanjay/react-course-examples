import React from 'react';
import { css } from 'emotion';

const styles = {
  list: css`
    margin: 16px 0 0 0;
    padding: 0;
    list-style: none;
  `,
  tag: css`
    display: inline-block;
    margin: 0.25rem;
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    border-radius: 2px;
    background-color: #4a4a4a;
    color: #fafafa;
    cursor: pointer;

    &:hover,
    &:focus,
    &:active {
      background-color: #587ef5;
    }
  `
};

const TagList = ({ items }) => (
  <ul className={styles.list}>
    {items.map(item => (
      <li className={styles.tag} key={item}>
        {item}
      </li>
    ))}
  </ul>
);

export default TagList;
