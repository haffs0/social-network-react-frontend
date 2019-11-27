import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'
import validate from './validate';
import renderField from './renderField';

const jobRole = ['Lead developer', 'Junior developer', 'Senior developer', 'IT Manager'];
const renderJobRoleSelector = ({ input, meta: { touched, error } }) => (
    <div>
      <select {...input}>
        <option value="">Select a job role...</option>
        {jobRole.map(val => <option value={val} key={val}>{val}</option>)}
      </select>
      {touched && error && <span>{error}</span>}
    </div>
  );


const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;

const UserFormSecondPage = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="password" type="password" component={renderField} label="Password" />
      <div>
        <label>Gender</label>
        <div id="label">
          <label>
            <Field name="gender" component="input" type="radio" value="male" />
            {' '}
            Male
          </label>
          <label>
            <Field name="gender" component="input" type="radio" value="female" />
            {' '}
            Female
          </label>
          <Field name="gender" component={renderError} />
        </div>
      </div>
      <div>
        <label>Job Role</label>
        <Field name="jobRole" component={renderJobRoleSelector} />
      </div>
      <div>
        <button type="button" className="previous" onClick={previousPage}>
          <FaAngleLeft/> Previous
        </button>
        <button type="submit" className="next">Next <FaAngleRight/></button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(UserFormSecondPage);
