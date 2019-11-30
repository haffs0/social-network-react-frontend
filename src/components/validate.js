const validate = values => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'Required';
    }
    if (!values.lastName) {
      errors.lastName = 'Required';
    }
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.sex) {
      errors.sex = 'Required';
    }
    if (!values.jobRole) {
      errors.jobRole = 'Required';
    }
    if (!values.password) {
      errors.password = 'Required';
    } else if (/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(errors.password)) {
      errors.password = 'Password not strong';
    }
    if (!values.role) {
      errors.role = 'Required';
    }
    if (!values.department) {
      errors.department = 'Required';
    }
    if (!values.title) {
      errors.title = 'Required';
    }
    if (!values.article) {
      errors.article = 'Required';
    }
    if (!values.address) {
      errors.address = 'Required';
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = 'Required';
    } else if (/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(errors.phoneNumber)) {
      errors.phoneNumber = 'Invalid phone number';
    }
    return errors;
  };
  
  export default validate;
  