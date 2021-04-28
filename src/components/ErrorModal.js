import {connect} from 'react-redux'
import Modal from "./Modal"
import ModalBody from "./ModalBody"
import ModalFooter from "./ModalFooter"

const ErrorModal = ({readError, writeError, onClose}) =>{
    const error = {};
    if(readError){
        error.title = 'Read Error'
        error.message = readError
    }
    else if(writeError){
        error.title = 'Write Error'
        error.message = writeError
    }

    if(readError || writeError) return(
        <Modal headerText={error.title} onClose={onClose}>
            <ModalBody>
                <p>{error.message}</p>
            </ModalBody>

            <ModalFooter>
                <div>
                    <button className='btn btn-grey' onClick={onClose}><i className='fas fa-times'></i> Close</button>
                </div>
            </ModalFooter>
        </Modal>
    )
    else return null
}

const mapStateToProps = state =>({
    readError: state.tasks.readError,
    writeError: state.tasks.writeError,
})

export default connect(mapStateToProps)(ErrorModal)