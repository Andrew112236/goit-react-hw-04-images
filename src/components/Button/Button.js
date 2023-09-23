import React from 'react';
import styles from './Button.module.css';

export default function Button({ onClick }) {
  return (
    <div>
      <button className={styles.button} onClick={onClick}>
        Load more
      </button>
    </div>
  );
}
