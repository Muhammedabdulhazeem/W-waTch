import './Contact.css'
import { useTheme } from '../hooks/useTheme';


const Contact = () => {
    const { color } = useTheme()

    return (
        <div className='contact container'>
            <div className="let-talk">
                <div className="right"></div>

                <div className="left">
                    <div className="content">
                        <p style={{color: color}}>Contact Us</p>
                        <h1>Let's talk</h1>
                        <span>Our friendly custom service team always <br /> respond to enquiries within 24 hours.</span>
                        <form action>
                            <input
                              className='user-input'
                              type="text" 
                              placeholder='Name'
                            />
                            <input 
                              style={{border: `0.1rem solid ${color}`}}
                              className='user-input'
                              type="email"
                              placeholder='hello@gmail.com'
                            />
                            <textarea style={{resize: 'none'}} placeholder='Messages...'></textarea>
                            <button className='btn'>SIGN UP NOW</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Contact;