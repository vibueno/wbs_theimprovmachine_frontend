import React, { MouseEventHandler } from 'react';

import './index.css';

type ButtonProps = {
  id: string;
  label: string;
  btnStyle: string;
  clickHandler: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ id, label, btnStyle, clickHandler }: ButtonProps) => {
  return (
    <button id={id} className={`btn ${btnStyle}`} onClick={clickHandler}>
      {label}
    </button>
  );
};

export default Button;
