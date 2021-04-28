const ModalHeader = ({children, onClose}) =>{
    return(
        <div className="modal-header">
            {children}
            <div className="close-modal fas fa-times" onClick={onClose}></div>
        </div>
    )

}
export default ModalHeader