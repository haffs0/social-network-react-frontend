import _ from 'lodash'
import {CATEGORY} from '../actions/types'


export default (state = {}, action) => {
    switch(action.type) {
        case CATEGORY:
            return {..._.mapKeys(action.payload, 'id')};
        default: 
            return state;
    }
}