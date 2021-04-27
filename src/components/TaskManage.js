import { connect } from "react-redux"

const TaskManage = ({toggleAddTask, toggleClearTasks, tasks}) =>{
    const displayButtons = tasks.length < 1 ? 'none': 'inline-block'
    return(
        <div className='TaskManage '>
            <h1 className='title'>My Tasks</h1>
            <div className='flex'>
                <button className='btn btn-green' onClick={toggleAddTask}><i className='fas fa-plus'></i>  Add Task</button>
                <button className='btn btn-red' onClick={toggleClearTasks} style={{display: displayButtons}}><i className='fas fa-trash' ></i>  Clear all tasks</button>
            </div>
        </div>
    )
}

const mapStateAsProps = state =>({
    tasks: state.tasks.taskList,
})

export default connect(mapStateAsProps)(TaskManage)