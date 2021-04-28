import Modal from "./Modal"
import ModalBody from "./ModalBody"
import ModalFooter from "./ModalFooter"

const ClearAllModal = ({clearTasks, onClose, onClear}) => {
    if(clearTasks) return(
        <Modal onClose={onClose} headerText={'Clear All ?'}>
                <ModalBody>
                        <p>Are you sure you want to clear all tasks</p>            
                </ModalBody>

                <ModalFooter>
                    <div>
                        <button className='btn btn-grey' onClick={onClose}><i className='fas fa-ban'></i> Cancel</button>
                        <button className='btn btn-red' onClick={onClear}><i className='fas fa-trash'></i>  Clear all</button>
                    </div>
                </ModalFooter>
        </Modal>
    )
    else return null
}
export default ClearAllModal