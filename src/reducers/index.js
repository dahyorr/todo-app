import {combineReducers} from 'redux'
import { } from '../actions/types'
import {FETCH_TASKS, WRITE_ERROR, READ_ERROR, CLEAR_ERROR,
     CLEAR_TASKS, CREATE_TASK, REMOVE_TASK } from '../actions/types'

const taskReducer = (state={taskList: [], readError: '', writeError:''}, action) =>{
    switch(action.type){
        case FETCH_TASKS:
            return {...state, taskList: [...action.payload]}
        case WRITE_ERROR:
            return {...state, writeError: action.payload}
        case READ_ERROR:
            return {...state, readError: action.payload}
        case CLEAR_ERROR:
            return {...state, readError: '', writeError: ''}
        case CREATE_TASK:
        case CLEAR_TASKS:
        case REMOVE_TASK:
        default:
            return state
    }
}

export default combineReducers({
    tasks: taskReducer
})