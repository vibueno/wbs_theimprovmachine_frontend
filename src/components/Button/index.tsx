import React, { MouseEventHandler } from 'react';

type ButtonProps = {
  id: string;
  label: string;
  btnStyle: string;
  clickHandler?: MouseEventHandler<HTMLButtonElement>;
};

import './index.css';

const Button = ({ id, label, btnStyle, clickHandler }: ButtonProps) => {
  return (
    <button id={id} className={`btn ${btnStyle}`} onClick={clickHandler}>
      {label}
    </button>
  );
};

export default Button;
