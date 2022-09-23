import './Modal.css'
import { useTheme } from '../../hooks/useTheme';


const Modal = () => {
    const { modal: {bool, src}, showModal } = useTheme()

    return (
        (bool && (<div className="modal">
                <div className="img">
                    <img src={src} alt="watch" />
                </div>
                <span onClick={() => showModal({bool: false})}>X</span>
        </div>))
    );
}
 
export default Modal;