import './Signup.css'
import { useTheme } from '../hooks/useTheme';
import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';
import { useLogin } from '../hooks/useLogin';



const Signup = () => {
    const { color } = useTheme()
    const [isSignup, setIsSignup] = useState(false)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signup, error, isPending} = useSignup()
    const { login } = useLogin()


    const handleSubmit = (e) => {
        e.preventDefault()
        if(isSignup) {
            signup(email, password, username)
        } else {
            login(email, password)
        }
    }

    return (
        <div className="signup container">
            <div className="let-talk">
                <div className="right"></div>

                <div className="left">
                    <div className="content">
                        <p style={{color: color}}>Hi there,</p>
                        <h1>Welcome</h1>
                        <div className="switch">
                            <span>{isSignup ? "Signup" : "Login"}</span>
                            <div>
                                <span>{isSignup ? "Already have an account?" : "Don't have an account?"}</span>
                                <span onClick={() => setIsSignup(!isSignup)} className="tap">{isSignup ? "Login" : "Signup"}</span>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit} action>
                            {isSignup && (<input
                              style={{borderBottom: `0.1rem solid ${color}`}}
                              className='user-input'
                              type="text" 
                              placeholder='username'
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
                            />)}
                            <input 
                              style={{borderBottom: `0.1rem solid ${color}`}}
                              className='user-input'
                              type="email"
                              placeholder='hello@gmail.com'
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                              style={{borderBottom: `0.1rem solid ${color}`}}
                              className='user-input'
                              type="password" 
                              placeholder='password'
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <button style={{backgroundColor: color}} className='btn'>{isSignup ? "Signup" : "Login"}</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Signup;