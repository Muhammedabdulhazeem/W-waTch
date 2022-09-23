import './Footer.css'
import { useTheme } from '../hooks/useTheme';
import facebook from '../assets/icons/facebook.svg'
import twitter from '../assets/icons/twitter.svg'
import instagram from '../assets/icons/instagram.svg'
import { useSignup } from '../hooks/useSignup';
import { useState } from 'react';



const Footer = () => {
    const {color} = useTheme()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signup, error, isPending} = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await signup(email, password, username)

        // setEmail('')
        // setPassword('')
        // setUsername('')
    }

    console.log([username, email, password])

    return (
        <div className="footer container">
            <div className="top">
                <div className="left">
                    <h3>Helpful Links</h3>
                    <div className='lists'>
                        <div>
                            <span>About Us</span>
                            <span>Delivery and Returns</span>
                            <span>Help and FAQ</span>
                            <span>Service for professionals</span>
                        </div>
                        <div>
                            <span>About Us</span>
                            <span>Delivery and Returns</span>
                            <span>Help and FAQ</span>
                            <span>Service for professionals</span>
                        </div>
                    </div>
                </div>

                <div className="middle">
                    <h3>Contact Info</h3>
                    <div className='lists'>
                        <div>
                            <p>Oxford (UK)</p>
                            <span>1-3 Abbey Street</span>
                            <span> Eynsham </span>
                            <span>Oxford</span>
                            <span>OX29 4TB</span>
                        </div>
                        <div>
                            <p>Walnut, CA (USA)</p>
                            <span>340 S Lemon Ave #3358 </span>
                            <span> Eynsham </span>
                            <span>Oxford</span>
                            <span>OX29 4TB</span>
                        </div>
                    </div>
                </div>
            </div>

            <span className="hr-line"></span>

            <div className="bottom">
                <span>© 2022 kreyaparekh1@gmail.com. Designed by</span>
                <div>
                    <img src={facebook} alt="facebook" />
                    <img src={twitter} alt="twitter" />
                    <img src={instagram} alt="instagram" />
                </div>
            </div>
        </div>
    );
}
 
export default Footer;

{/* <div className="right">
                    <h3>Sign Up</h3>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input
                            style={{borderBottom: `0.1rem solid ${color}`}}
                            type="text"
                            placeholder='username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            />
                            <input
                            style={{borderBottom: `0.1rem solid ${color}`}}
                            type="email"
                            placeholder='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                            <input 
                            style={{borderBottom: `0.1rem solid ${color}`}}
                            type="password"
                            placeholder='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                            <button style={{backgroundColor: color}}>SIGN UP NOW</button>
                        </div>
                    </form>
</div> */}