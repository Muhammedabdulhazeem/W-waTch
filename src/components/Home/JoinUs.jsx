import './JoinUs.css'
import { useTheme } from '../../hooks/useTheme';

const JoinUs = () => {
    const {color} = useTheme()

    return (
        <div className="join-us">
            <div style={{backgroundColor: color}} className="left">
                <div className="content">
                    <p>Special Offer</p>
                    <h1>Join Us</h1>
                    <span>Sign up for the newsletter and receive <br /> 10% off your first order.</span>
                    <form action>
                        <div>
                        <input
                            className='user-input'
                            type="text" 
                            placeholder='Name'
                        />
                        </div>
                        <div>
                        <input 
                            className='user-input'
                            type="email"
                            placeholder='hello@gmail.com'
                        />
                        </div>
                        <button className='btn'>SIGN UP NOW</button>
                    </form>
                    <label>
                        <input type="radio" />
                        <span>By subscribing you agree to our Terms & Conditions and <br /> Privacy & Cookies Policy.</span>
                    </label>
                </div>
            </div>

            <div className="right"></div>
        </div>
    );
}
 
export default JoinUs;