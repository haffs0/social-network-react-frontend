import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { FaAngleRight } from 'react-icons/fa'
import validate from './validate';
import renderField from './renderField';

const UserFormFirstPage = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="firstName"
        type="text"
        component={renderField}
        label="First Name"
      />
      <Field
        name="lastName"
        type="text"
        component={renderField}
        label="Last Name"
      />
      <Field 
      name="email" 
      type="email" 
      component={renderField} 
      label="Email" 
      />
      <div>
        <button type="submit" className="next">Next <FaAngleRight className="fa-icon"/></button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(UserFormFirstPage);
