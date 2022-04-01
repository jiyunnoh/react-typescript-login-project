import React from 'react';
import classes from './Button.module.css';

const Button = (props: { 
  type?: 'button' | 'submit' | 'reset' | undefined; 
  className?: string; 
  onClick?: React.MouseEventHandler<HTMLButtonElement>; 
  children?: React.ReactNode;
}) => {
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
