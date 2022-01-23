import {combineReducers} from 'redux';
import {arithmeticReducer} from './arithmeticReducer';

const reducers = combineReducers({
    arithmeticSpan : arithmeticReducer
})

export default reducers;