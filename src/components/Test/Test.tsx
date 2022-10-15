import React from 'react';

export interface TestProps {
  label: string;
}

const Test = (props: TestProps) => {
  return <button>{props.label}</button>;
};

export default Test;
