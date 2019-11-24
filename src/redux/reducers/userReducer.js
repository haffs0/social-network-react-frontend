import {SIGN_IN, SIGN_OUT} from '../actions/types'

const initialState = {
    isSignIn: null,
}



export default (state = initialState, action) => {
    switch(action.type) {
        case SIGN_IN:
            return {...state, isSignIn: true };
        case SIGN_OUT:
            return {...state, isSignIn: false };
        default: 
            return state;
    }
}