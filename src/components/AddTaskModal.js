const AddTaskModal = ({addTask, onClose, titleValue, descriptionValue, dateValue, onInputChange, handleTaskCreate}) => {
    if(addTask) return(
        <div className="AddTaskModal modal" onClick={onClose}>
            <div className="modal-content" onClick={e=>e.stopPropagation()}>
                <div className="modal-header">
                    <h3>Fill in the form below to create a new task</h3>
                    <div className="close-modal fas fa-times" onClick={onClose}></div>
                </div>
            
                <div className="modal-body">
                    <form>
                        <label htmlFor="title">Title</label>
                        <input name='title' type="text" onChange={onInputChange} value={titleValue}/>

                        <label htmlFor="description">Description</label>
                        <textarea name='description' type="text" onChange={onInputChange} value={descriptionValue}/>

                        <label htmlFor="deadline">Deadline</label>
                        <input name='deadline' type="datetime-local" value={dateValue} min={dateValue} onChange={onInputChange}/>
                    </form>
                </div>

                <div className="modal-footer">
                    <div>
                    <button className='btn btn-grey' onClick={onClose}><i className='fas fa-ban'></i> Cancel</button>
                    <button className='btn btn-green' onClick={handleTaskCreate}><i className='fas fa-plus'></i> Create Task</button>
                    </div>
                </div>
            </div>
        </div>
    )
    else return null
}
export default AddTaskModal