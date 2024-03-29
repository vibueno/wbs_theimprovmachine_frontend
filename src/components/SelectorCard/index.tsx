import React, { MouseEventHandler } from 'react';

import Button from '../../components/Button';

type SelectorCardProps = {
  content: string;
  btnId: string;
  btnLabel: string;
  clickHandler: MouseEventHandler<HTMLButtonElement>;
};

const SelectorCard = ({
  content,
  btnId,
  btnLabel,
  clickHandler
}: SelectorCardProps) => {
  return (
    <section className="card">
      <div className="card-text-container">
        <p className="card-text">{content}</p>
      </div>
      <div className="card-btn-container">
        <Button
          id={btnId}
          label={btnLabel}
          btnStyle="btn-forth card-btn"
          clickHandler={clickHandler}
        />
      </div>
    </section>
  );
};

export default SelectorCard;
