const ClearAllModal = ({clearTasks, onClose, onClear}) => {
    if(clearTasks) return(
        <div className="ClearallModal modal" onClick={onClose}>
            <div className="modal-content" onClick={e=>e.stopPropagation()}>
                <div className="modal-header">
                    <div className="close-modal fas fa-times" onClick={onClose}></div>
                </div>
            
                <div className="modal-body">
                        <p>Are you sure you want to clear all tasks</p>            
                </div>

                <div className="modal-footer">
                    <div>
                    <button className='btn btn-grey' onClick={onClose}><i className='fas fa-ban'></i> Cancel</button>
                    <button className='btn btn-red' onClick={onClear}><i className='fas fa-trash'></i>  Clear all</button>

                    </div>
                </div>
            </div>
        </div>
    )
    else return null
}
export default ClearAllModal