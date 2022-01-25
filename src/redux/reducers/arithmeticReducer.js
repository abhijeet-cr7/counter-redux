import {ActionTypes} from '../constants/action-types';

const initialState = {
    count : 0   
}

export const arithmeticReducer = (state=initialState, {type, payload}) => {
    console.log(state);
    
    console.log('****reducerCount');
    switch(type)
    {
    case ActionTypes.ADD_NUM :
        return {...state, count : payload + 1}
    case ActionTypes.SUB_NUM :
        return {...state, count : payload - 1}
    default : 
    return state;    
    }
}