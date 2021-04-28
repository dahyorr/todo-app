import ModalHeader from "./ModalHeader"

const Modal = ({children, onClose, headerText}) =>{
    return(
    <div className="modal" onClick={onClose}>
        <div className="modal-content" onClick={e=>e.stopPropagation()}>
            <ModalHeader onClose={onClose}>{headerText}</ModalHeader>
            {children}
        </div>
    </div>
    )
}
export default Modal