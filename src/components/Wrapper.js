import {useState} from "react"
import {connect} from 'react-redux'
import moment from 'moment'
import { createTask, clearAllTasks, clearError } from "../actions"
import AddTaskModal from "./AddTaskModal"
import ClearAllModal from "./ClearAllModal"
import TaskList from "./TaskList"
import TaskManage from "./TaskManage"
import ErrorModal from "./ErrorModal"

const Wrapper = ({createTask, clearAllTasks, clearError}) =>{
    const [addTask, setAddTask] = useState(false)
    const [clearTasks, setClearTasks] = useState(false)
    const [titleValue, setTitleValue] = useState('')
    const [descriptionValue, setDescriptionValue] = useState('')
    const [dateValue, setDateValue] = useState('')
    
    const toggleAddTask = () =>{
        setDateValue(moment().add(1,'days').format("YYYY-MM-DDTHH:mm"))
        setAddTask(!addTask)
    }
    
    const onTaskClear = () => {
        clearAllTasks();
        setClearTasks(false)
    } 

    const onInputChange = (e) =>{
        if(e.target.name === 'title') setTitleValue(e.target.value)
        else if(e.target.name === 'description') setDescriptionValue(e.target.value)
        else setDateValue(e.target.value)
    }
    
    const handleTaskCreate = () =>{
        if(titleValue && descriptionValue && dateValue){
            createTask(titleValue, descriptionValue, dateValue)
            setAddTask(false);
            setTitleValue('');
            setDescriptionValue('');
            setDateValue('')
        }
    }

    return(
        <div className='Wrapper'>
            <TaskManage toggleAddTask={toggleAddTask} toggleClearTasks={() => setClearTasks(true)} />
            <TaskList/>
            <AddTaskModal 
                addTask={addTask} 
                onClose={()=>setAddTask(false)}
                dateValue={dateValue}
                descriptionValue={descriptionValue}
                titleValue={titleValue}
                onInputChange={onInputChange}
                handleTaskCreate={handleTaskCreate}
                />
            <ClearAllModal clearTasks={clearTasks} onClose={()=>setClearTasks(false)} onClear={onTaskClear}/>
            <ErrorModal onClose={()=>clearError()}/>
        </div>
    )
}
export default connect(null, {createTask, clearAllTasks, clearError})(Wrapper)