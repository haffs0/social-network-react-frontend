import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { FaExclamationCircle } from 'react-icons/fa';
import { signIn } from '../redux/actions'
import { connect } from 'react-redux';
import validate from './validate';


class SignInForm extends Component {
    renderError = ({ touched, error }) => touched && error ? <span><FaExclamationCircle/> {error}</span> : false;
    
    renderInput = ({ input, label, type, meta }) => {
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
        console.log(formValues)
        this.props.signIn(formValues);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field 
                name="email" 
                type="email" 
                component={this.renderInput} 
                label="Email" 
                />
                <Field
                    name="password"
                    type="password"
                    component={this.renderInput}
                    label="Password"
                />
                <div>
                    <button type="submit" className="login-btn">Login</button>
                </div>
            </form>
        )
    }
}
const formWrapped = reduxForm({
    form: 'signInForm',
    validate
})(SignInForm)
export default connect(null, {signIn})(formWrapped)

