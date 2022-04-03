import ReactDOM from 'react-dom';
import ModalInner from './ModalInner';
import { AnimatePresence } from 'framer-motion';

const Modal = ({ children, state, ...rest }) => {

    return ReactDOM.createPortal(
        <AnimatePresence>
            {state && <ModalInner {...rest}>{children}</ModalInner>},
        </AnimatePresence>,
        document.getElementById('modal-root')
    )
}

export default Modal

