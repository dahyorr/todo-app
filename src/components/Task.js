const formatTime = (time) => {
    const taskDate = new Date(time);
    const currentDate = new Date();
    const sign = currentDate >= taskDate
    const timeLeft = Math.abs(taskDate.getTime() - currentDate.getTime())
    const daysLeft = Math.floor(timeLeft/(1000*60*60*24))
    if (daysLeft < 1){
        const hoursLeft = Math.floor(timeLeft/(1000*60*60))
        if(hoursLeft < 1 ){
            const minutesLeft = Math.floor(timeLeft/(1000*60))
            if(minutesLeft < 1 ){
                const secondsLeft = Math.floor(timeLeft/(1000))
                return [`${sign? '-': ''}${secondsLeft} ${ secondsLeft === 1 ? 'second': 'seconds'} ${sign?'past':'left'}`, sign]
            }
            return [`${sign? '-': ''}${minutesLeft} ${ minutesLeft === 1 ? 'minute': 'minutes'} ${sign?'past':'left'}`, sign]
            
        }
        return [`${sign? '-': ''}${hoursLeft} ${ hoursLeft === 1 ? 'hour': 'hours'} ${sign?'past':'left'}`, sign]
    }
    return [`${sign? '-': ''}${Math.floor(daysLeft)} ${ daysLeft === 1 ? 'day': 'days'} ${sign?'past':'left'}`, sign]
}

const Task = ({task, index, onRemoveTask}) =>{
    const time =formatTime(task.deadlineDate)
    return(
        <div className='Task'>
            <div className="remove-icon fas fa-minus-circle" onClick={() => onRemoveTask(index)}></div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p className={`small ${time[1]?'red-text': ''}`}>{time[0]}</p>
        </div>
    )
}

export default (Task)