import { combineReducers } from 'redux';
import postReducer from './postReducer';
import userReaducer from './userReducer';
import categoryReducer  from './categoryReducer';
import createUserReducer from './createUserReducer';
import flagReducer from './flagReducer';
import { reducer as formReducer } from 'redux-form';



export default combineReducers({
    posts: postReducer,
    form: formReducer,
    user: userReaducer,
    category: categoryReducer,
    createUser: createUserReducer,
    flag: flagReducer,
})