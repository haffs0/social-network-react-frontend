import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { FaExclamationCircle } from 'react-icons/fa';
import { createGifs } from '../redux/actions'
import validate from './validate';
import { isAuthenticated } from '../services/auth-helper';


const adaptFileEventToValue = delegate => e => delegate(e.target.files[0]);

const FileInput = ({ 
  input: { value: omitValue, onChange, onBlur, ...inputProps }, 
  meta: omitMeta, 
  ...props 
}) => {
  return (
    <input
      className="pic"
      onChange={adaptFileEventToValue(onChange)}
      onBlur={adaptFileEventToValue(onBlur)}
      type="file"
      {...props.input}
      {...props}
    />
  );
};

class GifPostForm extends Component {
    renderError = ({ touched, error }) => touched && error ? <span><FaExclamationCircle/> {error}</span> : false;
    
    renderInput = ({ input, label, type, meta}) => {
        return (
            <div>
                <label>{label}</label>
                <div>
                    <input {...input} placeholder={label} type={type} autoComplete="off"/>
                    {this.renderError(meta)}
                </div>
            </div>
        )
    }

    onSubmit = (formValues) => {
        formValues['userId'] = isAuthenticated().userId
        this.props.createGifs(formValues, isAuthenticated().token)
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" type="text" component={this.renderInput} label="Title" />
                <div>
              <label>Attachment</label>
              <Field name="attachment" component={FileInput} type="file"/>
            </div>
                <div>
                    <button type="submit" className="login-btn">Post</button>
                </div>
            </form>
        )
    }
}

const formWrapped = reduxForm({
    form: 'GifPostForm',
    validate
})(GifPostForm)

export default connect(null, {createGifs})(formWrapped)
