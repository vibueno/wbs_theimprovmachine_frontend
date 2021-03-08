import React, { MouseEventHandler } from 'react';

import './index.css';

type ButtonProps = {
  label: string;
  btnStyle: string;
  clickHandler: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ label, btnStyle, clickHandler }: ButtonProps) => {
  return (
    <button className={`btn ${btnStyle}`} onClick={clickHandler}>
      {label}
    </button>
  );
};

export default Button;
