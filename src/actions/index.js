import {CREATE_TASK, CLEAR_TASKS, REMOVE_TASK, READ_ERROR, FETCH_TASKS, WRITE_ERROR, CLEAR_ERROR} from './types'
import {db} from '../firebase'

export const createTask = (title, description, deadlineDate) => async dispatch =>{
    try{
        db.ref('tasks').push({title, description, deadlineDate})
        dispatch({
            type: CREATE_TASK
        })
    }catch(e){
        console.log('An Error Occured')
        dispatch({
            type: WRITE_ERROR,
            payload: e.message
            })
    }
    
}

export const clearAllTasks = () => async dispatch => {
    try{
    db.ref('tasks').set([])
    dispatch({
        type: CLEAR_TASKS,
    })
    }
    catch(e){
        console.log('An Error Occured')
        dispatch({
            type: WRITE_ERROR,
            payload: e.message
            })
    }
    
}

export const removeTask = (newTasks) => dispatch => {
    try{
        db.ref('tasks').set(newTasks)
        dispatch({
            type: REMOVE_TASK,
        })
    }
    catch(e){
        console.log('An Error Occured')
        dispatch({
            type: WRITE_ERROR,
            payload: e.message
            })
    }
    
}

export const fetchTasks = () => async dispatch =>{
    try{
        db.ref("tasks").on("value", snapshot =>{
            const tasks = [];
            snapshot.forEach(snap => {tasks.push(snap.val())})
            dispatch({
                type: FETCH_TASKS,
                payload: tasks
            })
        })
    }catch(e){
        //TODO: display modal on error
        console.log('An error occured')
        dispatch({
            type: READ_ERROR,
            payload: e.message
        })
    }
}

export const clearError = () =>{
    return{
        type: CLEAR_ERROR,
    }
}
