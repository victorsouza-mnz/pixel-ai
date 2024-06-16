import React from 'react';
import './form-input.styles.scss';
import { FormInputProps } from '@/types/forms';

const FormInput = ({ label, ...props }: FormInputProps) => {
  return (
    <div className="group">
      <input className="form-input" {...props}></input>
      {label && (
        <label
          className={`${props.value.length ? 'shrink' : ''} form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
