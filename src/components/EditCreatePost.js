import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArticle, editArticle } from '../redux/actions'
import { isAuthenticated } from '../services/auth-helper';
import PostForm from '../components/PostForm'

const token = isAuthenticated().token

class EditCreatePost extends Component { 
   componentDidMount() {
       const {props} = this.props
       this.props.fetchArticle(props.match.params.id, token)
   }
   onSubmit = (formValues) => {
        const {props} = this.props
        console.log(this.props)
        console.log(props.match.params.id)
        this.props.editArticle(props.match.params.id, token, formValues)
   }
   render() {
        console.log(this.props.post)
        if (!this.props.post) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <h3 id="article">Edit Article Post</h3>
                <PostForm
                    initialValues={_.pick(this.props.post, 'title', 'article')} 
                    onSubmit={this.onSubmit}
                />
            </div>
        )
       
   }
}


const mapStateToProps = (state, ownProps) => {
    const {props} = ownProps
    return {post: state.posts[props.match.params.id]}
}

export default connect(mapStateToProps, {fetchArticle, editArticle})(EditCreatePost)