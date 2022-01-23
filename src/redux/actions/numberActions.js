import {ActionTypes} from '../constants/action-types';

export const addNumber = (number) => {
    return {
        type : ActionTypes.ADD_NUM,
        payload : number
    }
}

export const subNumber = (number) => {
    return {
        type : ActionTypes.SUB_NUM,
        payload : number
    }
}