import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { FaExclamationCircle } from 'react-icons/fa';
import validate from './validate';


class PostForm extends React.Component {
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
        // event.preventDefault();
        this.props.onSubmit(formValues)
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" type="text" component={this.renderInput} label="Title" />
                <div>
                    <label>Articles</label>
                    <div>
                        <Field name="article" component="textarea" placeholder="Articles" />
                    </div>
                </div>
                <div>
                    <button type="submit" className="login-btn">Post</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({
    form: 'PostForm',
    validate
})(PostForm)
