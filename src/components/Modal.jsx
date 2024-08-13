import calsses from './Modal.module.css'

function Modal ({children, onClose}) {
    return(
    <>
        <div className={calsses.backdrop} onClick={onClose}/>
        <dialog open className={calsses.modal}>{children}</dialog>
    </>
    );
}

export default Modal