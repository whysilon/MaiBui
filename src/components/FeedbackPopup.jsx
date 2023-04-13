import './FeedbackPopup.css';
import CloseIcon from '@mui/icons-material/Close';


/**
 * Feedback Popup that comes up when user presses popup icon on Select Restaurant page
 * @author Marcus Yeo
 * @param {JSX} props 
 * @returns HTML form of the popup
 */

const FeedbackPopup = (props) => {
    return(props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <CloseIcon className="close-btn" onClick={()=>props.setTrigger(false)}/>
                {props.children}
            </div>
        </div>) : "";
}

export default FeedbackPopup;