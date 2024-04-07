type RadioProps = {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
};

import React from 'react';
import './Radio.scss';

export const Radio = ({ label, checked, onChange }: RadioProps) => {
  return (
    <label className='form-control' htmlFor={`option-${label}`}>
      <input
        onChange={onChange}
        type='radio'
        className='radio'
        name='selector'
        checked={checked}
      />
      {label}
    </label>
  );
};
