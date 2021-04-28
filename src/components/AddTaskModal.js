import Modal from "./Modal"
import ModalFooter from "./ModalFooter"
import ModalBody from "./ModalBody"

const AddTaskModal = ({addTask, onClose, titleValue, descriptionValue, dateValue, onInputChange, handleTaskCreate}) => {
    if(addTask) return(
            <Modal onClose={onClose} 
            headerText={'Fill in the form below to create a new task'}
            >
                <ModalBody>
                    <form>
                        <label htmlFor="title">Title</label>
                        <input name='title' type="text" onChange={onInputChange} value={titleValue}/>

                        <label htmlFor="description">Description</label>
                        <textarea name='description' type="text" onChange={onInputChange} value={descriptionValue}/>

                        <label htmlFor="deadline">Deadline</label>
                        <input name='deadline' type="datetime-local" value={dateValue} min={dateValue} onChange={onInputChange}/>
                    </form>
                </ModalBody>

                <ModalFooter>
                    <div>
                        <button className='btn btn-grey' onClick={onClose}><i className='fas fa-ban'></i> Cancel</button>
                        <button className='btn btn-green' onClick={handleTaskCreate}><i className='fas fa-plus'></i> Create Task</button>
                    </div>
                </ModalFooter>
                </Modal>

    )
    else return null
}
export default AddTaskModal