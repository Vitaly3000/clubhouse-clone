import styles from './Button.module.scss';
import clsx from 'clsx';
import React from 'react';

export const Button = ({ children, disabled, color, onClick, className }) => {
  const colors = {
    green: styles.buttonGreen,
    gray: styles.buttonGray,
  };
  return (
    <button
      className={clsx(className, styles.button, colors[color])}
      disabled={disabled}>
      {children}
    </button>
  );
};
