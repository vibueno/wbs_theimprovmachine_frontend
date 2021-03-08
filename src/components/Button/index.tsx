import React from 'react';

import './index.css';

type ButtonProps = {
  label: string;
};

const Button = ({ label }: ButtonProps) => {
  return <button className="btn">{label}</button>;
};

export default Button;
