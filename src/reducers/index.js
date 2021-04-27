import {combineReducers} from 'redux'
// import { CLEAR_TASKS, CREATE_TASK, REMOVE_TASK} from '../actions/types'
import {FETCH_TASKS, WRITE_ERROR, READ_ERROR } from '../actions/types'

const taskReducer = (state={taskList: [], readError: '', writeError:''}, action) =>{
    switch(action.type){
        case FETCH_TASKS:
            return {...state, taskList: [...action.payload]}
        case WRITE_ERROR:
            return {...state, writeError: action.payload}
        case READ_ERROR:
            return {...state, readError: action.payload}
        // case CREATE_TASK:
        //     return state
        // case CLEAR_TASKS:{
        //     return state
        // }
        // case REMOVE_TASK:
        //     return state
        default:
            return state
    }
}

export default combineReducers({
    tasks: taskReducer
})