import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchFeeds, deleteArticles, deleteGifs } from '../redux/actions'
import { isAuthenticated } from '../services/auth-helper';


class PostList extends Component {
    componentDidMount() {
        this.props.fetchFeeds(isAuthenticated().token);
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

    renderType(post) {
        if (post.hasOwnProperty('article')) {
            return <p>{post.article}</p>
        }
        else if(post.hasOwnProperty('url')) {
            return <img className="img-fluid border border-dark" src={post.url} alt={post.title}/>
        }
    }
    renderList() {
        return this.props.posts.map(post=> {
            return (
                <div className="card mx-2" key={post.id}>
                    <div className="card-body mySubGrid">
                        <h2><Link to={`/post/specific/${post.id}`} className="text-danger my-2">{post.title}</Link></h2>
                        <p>{post.name} {post.createdOn}</p>
                        {this.renderType(post)}
                    </div>
                    {this.renderBotton(post)}
                </div>  
            )
        })
    }
    render() {
        return (
            <div className="container py-5 myGrid">
                {this.renderList()}
            </div>
        )      
    }
}
const mapStateToProps = (state) => {
    return { posts: Object.values(state.posts)}
}

export default connect(mapStateToProps, { fetchFeeds, deleteArticles, deleteGifs})(PostList)