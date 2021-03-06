import _ from 'lodash'
import {CREATE_USER} from '../actions/types'


export default (state = {}, action) => {
    switch(action.type) {
        case CREATE_USER:
            return {...state, ..._.mapKeys(action.payload, 'id')};
        default: 
            return state;
    }
}