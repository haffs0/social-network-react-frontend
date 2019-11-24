import {signin, createUser} from '../../services/api-stuffs'
import history from '../history'
import {
    createGif,
    createArticle, 
    createArticleComment, 
    createGifComment, 
    category, 
    deleteArticle, 
    deleteFlag,
    deleteGif,
    updateArticle,
    flag,
    signout,
    singleArticle,
    singleGif,
    feeds,} from '../../services/api-stuffs'
import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_USER, 
    CREATE_GIF,
    CREATE_ARTICLE, 
    CREATE_ARTICLE_COMMENT,
    CREATE_GIF_COMMENT, 
    CATEGORY,
    DELETE_FLAG,
    DELETE_GIF,
    DELETE_ARTICLE, 
    UPDATE_ARTICLE, 
    FLAG,
    FEEDS,    
    SINGLE_ARTICLE, 
    SINGLE_GIF,
} from './types'


export const signIn = () => async dispatch => {
    const response = await signin();
    dispatch({type: SIGN_IN, payload: response.data});
}

export const logout = (credentials) => async dispatch => {
    await signout(credentials);
    dispatch({type: SIGN_OUT,});
    history.push('/');
}

export const createUsers = (user, credentials) => async dispatch => {
    const response = await createUser(user, credentials);
    dispatch({type: CREATE_USER, payload: response.data});
    history.push('/');
}

export const createGifs = (post, credentials) => async dispatch => {
    const response = await createGif(post, credentials);
    dispatch({type: CREATE_GIF, payload: response.data});
    history.push('/');
}

export const createArticles = (post, credentials) => async dispatch => {
    const response = await createArticle(post, credentials);
    dispatch({type: CREATE_ARTICLE, payload: response.data});
    history.push('/');
}

export const articleComment = (params, credentials, post) => async dispatch => {
    const id = post.articleId;
    const article = getState().posts[id]
    typeof article['comment'] === 'undefined' ? article['comment'] = [post] : article['comment'] = [...article['comment'], post]
    await createArticleComment(params, credentials, post);
    dispatch({type: CREATE_ARTICLE_COMMENT, payload: article});
    history.push('/');
}

export const gifComment = (params, credentials, post) => async dispatch => {
    const id = post.gifId;
    const gif = getState().posts[id]
    typeof gif['comment'] === 'undefined' ? gif['comment'] = [post] : gif['comment'] = [...gif['comment'], post]
    await createGifComment(params, credentials, post);
    dispatch({type: CREATE_GIF_COMMENT, payload: gif});
    history.push('/');
}

export const articleUpdate = (params, credentials, post) => async dispatch => {
    const response = await updateArticle(params, credentials, post);
    dispatch({type: UPDATE_ARTICLE, payload: response.data});
    history.push('/');
}

export const deleteArticles = (params, credentials) => async dispatch => {
    const data = getState().posts[params.articleId]
    await deleteArticle(params, credentials);
    dispatch({type: DELETE_ARTICLE, payload: data});
    history.push('/');
}

export const deleteGifs = (params, credentials) => async dispatch => {
    const data = getState().posts[params.gifId]
    await deleteGif(params, credentials);
    dispatch({type: DELETE_GIF, payload: data});
    history.push('/');
}

export const deleteFlags = (params, credentials, tableName) => async dispatch => {
    const data = getState().posts[params.id]
    await deleteFlag(params, credentials, tableName);
    dispatch({type: DELETE_FLAG, data});
    history.push('/');
}

export const categoies = (tag, credentials) => async dispatch => {
    const response = await category(tag, credentials);
    dispatch({type: CATEGORY, payload: response.data});
    history.push('/');
}

export const flags = (params, credentials, tableName) => async dispatch => {
    const response = await flag(params, credentials, tableName);
    dispatch({type: FLAG, payload: response.data});
    history.push('/');
}

export const feed = (credentials) => async dispatch => {
    const response = await feeds(credentials);
    dispatch({type: FEEDS, payload: response.data});
    history.push('/');
}

export const viewArticle = (params, credentials) => async dispatch => {
    const response = await singleArticle(params, credentials);
    dispatch({type: SINGLE_ARTICLE, payload: response.data});
}

export const viewGif = (params, credentials) => async dispatch => {
    const response = await singleGif(params, credentials);
    dispatch({type: SINGLE_GIF, payload: response.data});
}





