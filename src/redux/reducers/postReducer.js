import _ from 'lodash'
import {
    CREATE_GIF,
    CREATE_ARTICLE, 
    CREATE_ARTICLE_COMMENT,
    CREATE_GIF_COMMENT, 
    DELETE_GIF,
    DELETE_ARTICLE, 
    UPDATE_ARTICLE, 
    FEEDS,    
    SINGLE_ARTICLE, 
    SINGLE_GIF,
} from '../actions/types'

export default (state = {}, action) => {
    switch (action.type) {
        case FEEDS:
            return {...state, ..._.mapKeys(action.payload, 'id')};
        case CREATE_ARTICLE:
            return {...state, [action.payload.id]: action.payload};
        case CREATE_GIF:
            return {...state, [action.payload.id]: action.payload};
        case UPDATE_ARTICLE:
            return {...state, [action.payload.id]: action.payload};
        case CREATE_ARTICLE_COMMENT:
            return {...state, [action.payload.id]: action.payload};
        case CREATE_GIF_COMMENT:
            return {...state, [action.payload.id]: action.payload};
        case DELETE_GIF:
            return _.omit(state, action.payload);
        case DELETE_ARTICLE:
            return _.omit(state, action.payload);
        case SINGLE_ARTICLE:
            return {...state, [action.payload.id]: action.payload};
        case SINGLE_GIF:
            return {...state, [action.payload.id]: action.payload};
        default:
            return state;
    }
}