import React from 'react';
import {FaExclamationCircle } from 'react-icons/fa'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span><FaExclamationCircle/> {error}</span>}
    </div>
  </div>
);

export default renderField;
