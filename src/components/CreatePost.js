import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createArticles } from '../redux/actions'
import { isAuthenticated } from '../services/auth-helper';
import PostForm from '../components/PostForm'


class CreatePost extends Component {
    onSubmit = (formValues) => {
        const data = isAuthenticated()
        formValues['userId'] = data.userId
        this.props.createArticles(formValues, data.token)
    }
    render() {
        return (
            <div>
                <h3 id="article">Post an Article</h3>
                <PostForm onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

export default connect(null, {createArticles})(CreatePost)