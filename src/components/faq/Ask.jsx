import './Ask.css'
import { useTheme } from '../../hooks/useTheme';
import wheelIcon from '../../assets/icons/wheel-icon.svg'
import msgIcon from '../../assets/icons/msg-icon.svg'

const Ask = () => {
    const { color } = useTheme()

    return (
        <div className="ask">
            <div className="left">
                <div className="content">
                    <div style={{backgroundColor: color}} className="icon">
                        <img src={wheelIcon} alt="wheel" />
                    </div>
                    <div className="texts">
                        <h3>Ask in the Forums</h3>
                        <span>Join the conversation! We think you would love our <br /> community and it's a great place to find Furniture <br /> announcements or general help.</span>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="content">
                    <div style={{backgroundColor: color}} className="icon">
                        <img src={msgIcon} alt="wheel" />
                    </div>
                    <div className="texts">
                        <h3>Visit out Blog</h3>
                        <span>Join the conversation! We think you would love our <br /> community and it's a great place to find Furniture <br /> announcements or general help.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Ask;