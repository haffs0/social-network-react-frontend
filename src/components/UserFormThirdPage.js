import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { FaAngleLeft } from 'react-icons/fa'
import validate from './validate';
import renderField from './renderField';

const department = ['Software', 'Sales', 'IT', 'Operation'];

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;

const renderDepartmentSelector = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input}>
      <option value="">Select a department...</option>
      {department.map(val => <option value={val} key={val}>{val}</option>)}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
);

const UserFormThirdPage = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Department</label>
        <Field name="department" component={renderDepartmentSelector} />
      </div>
      <Field name="address" type="text" component={renderField} label="Address" />
      <Field name="phoneNumber" type="text" component={renderField} label="Phone Number" />
      <div>
      <label>Role</label>
      <div id="label">
        <label>
          <Field name="role" component="input" type="radio" value="user" />
          {' '}
          User
        </label>
        <label>
          <Field name="role" component="input" type="radio" value="admin" />
          {' '}
          Admin
        </label>
        <Field name="role" component={renderError} />
      </div>
    </div>
      <div>
        <button type="button" className="previous" onClick={previousPage}>
          <FaAngleLeft/> Previous
        </button>
        <button type="submit" disabled={pristine || submitting} className="next">Submit</button>
      </div>
    </form>
  );
};
export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(UserFormThirdPage);
