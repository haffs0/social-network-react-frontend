import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchArticle, fetchGif } from '../redux/actions'
import { isAuthenticated } from '../services/auth-helper';
import store from '../redux/store'


const token = isAuthenticated().token

class SpecificPost extends Component { 
   componentDidMount() {
       const {props} = this.props
       console.log(props)
       console.log(store.getState())
       const post = store.getState().posts[props.match.params.id]
       console.log(post)
       if(post.hasOwnProperty('article')) {
        this.props.fetchArticle(props.match.params.id, token)
       }
       else if (post.hasOwnProperty('url')) {
        this.props.fetchGif(props.match.params.id, token)
       }
   }

    onDeleteClick(event) {
        const id = event.target.id
        const article = event.target.dataset.article
        if (article) {
            window.confirm('Are you sure you want to delete this')
            this.props.deleteArticles(id, isAuthenticated().token)
        }
        else {
            window.confirm('Are you sure you want to delete this')
            this.props.deleteGifs(id, isAuthenticated().token)
        }
        
    }

    renderBotton(post) {
        const userId = isAuthenticated().userId;
        if (post.authorId === userId) {
            if(post.hasOwnProperty('article')) {
                return (
                    <div className="btn-links">
                        <Link to={`/post/edit/${post.id}`} className="btn-pad a-btn ba">Edit</Link>
                        <button id={post.id} data-article='article' onClick={this.onDeleteClick.bind(this)} className="btn-pad a-btn rb">Delete</button>
                    </div>
                )
            }else if(post.hasOwnProperty('url')) {
                return (
                    <div className="btn-links">
                        <button id={post.id} data-gif='gif' onClick={this.onDeleteClick.bind(this)} className="btn-pad a-btn rb">Delete</button>
                    </div>
                )
            }
        }
        else {
            return <Link to={`/posts/flag/${post.id}`} className="btn-links btn-pad a-btn ga">Report Post</Link>
        }
    }

   render() {
        console.log(this.props.post)
        const post = this.props.post
        if (!this.props.post) {
            return <div>Loading...</div>
        }
        else if(post.hasOwnProperty('article')) {
            return (
                <div className="container py-5 myGrid">
                    <div className="card mx-2" key={post.id}>
                    <div className="card-body mySubGrid">
                        <h2><Link to={`/post/specific/${post.id}`} className="text-danger my-2">{post.title}</Link></h2>
                        <p>{post.name} {post.createdOn}</p>
                        <p>{post.article}</p>
                    </div>
                    {this.renderBotton(post)}
                </div>  
                </div>
            )  
        }
        else if (post.hasOwnProperty('url')) {
            return (
                <div className="container py-5 myGrid">
                    <div className="card mx-2" key={post.id}>
                    <div className="card-body mySubGrid">
                        <h2><Link to={`/post/specific/${post.id}`} className="text-danger my-2">{post.title}</Link></h2>
                        <p>{post.name} {post.createdOn}</p>
                        <img className="img-fluid border border-dark" src={post.url} alt={post.title}/>
                    </div>
                    {this.renderBotton(post)}
                </div>  
                </div>
            )  
        }
   }
}


const mapStateToProps = (state, ownProps) => {
    const {props} = ownProps
    return {post: state.posts[props.match.params.id]}
}

export default connect(mapStateToProps, {fetchArticle, fetchGif})(SpecificPost)