import {connect} from 'react-redux'
import Task from "./Task"
import {removeTask} from '../actions'



const TaskList = ({tasks, removeTask}) =>{
    
    const onRemoveTask = index => {
        let newTasks = [...tasks.slice(0,index), ...tasks.slice(index+1)]
        removeTask(newTasks)
    }

    const renderedTasks = tasks.map((task, index) => <Task key={index} index={index} task={task} onRemoveTask={onRemoveTask}/>)

    return(
        <div className='TaskList'>
            {renderedTasks}
        </div>
    )
}

const mapStateAsProps = state =>({
    tasks: state.tasks.taskList,
})

export default connect(mapStateAsProps, {removeTask})(TaskList)