import React, { MouseEventHandler } from 'react';
const Button = (props: {
  kind: any;
  id: any;
  type: any;
  name: any;
  value: any;
  disabled: any;
  handleClick: MouseEventHandler;
  label: string;
}) => {
  return (
    <button
      className={`btn btn--${props.kind} CTA`}
      data-id={props.id}
      type={props.type}
      name={props.name}
      value={props.value}
      disabled={props.disabled}
      onClick={props.handleClick}
    >
      <h4>{props.label}</h4>
    </button>
  );
};

export { Button };
