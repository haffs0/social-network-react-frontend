import _ from 'lodash'
import {FLAG, DELETE_FLAG} from '../actions/types'


export default (state = {}, action) => {
    switch(action.type) {
        case FLAG:
            return {..._.mapKeys(action.payload, 'id')};
        case DELETE_FLAG:
                return _.omit(state, action.payload.id);
        default: 
            return state;
    }
}