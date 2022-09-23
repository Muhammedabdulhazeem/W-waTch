import './Navbar.css'
import { useTheme } from '../hooks/useTheme';
import prof from '../assets/icons/user.svg'
import search from '../assets/icons/search.svg'
import bag from '../assets/icons/bag.svg'
import logoImage from '../assets/images/logo-image.png'
import hamburger from '../assets/icons/hamburger.svg'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';
import { useLogout } from '../hooks/useLogout';



const Navbar = () => {
    const [showNav, setShowNav] = useState(false)
    const {color} = useTheme()
    const { user } = useAuth()
    const { logout } = useLogout()

    const handleSwitch = () => {
      setShowNav(false)
      logout()
    }

    // console.log(mobile)
    // if(mobile == 'true') setShowNav(true)

    return (
        <div className="navbar">
            <nav className='container'>
                
                <div className="fun">
                    <Link to='/'>
                      <div className="logo-wrap">
                        <div className="logo-img">
                          <motion.img src={logoImage} alt="watch" className="logo" 
                            animate={{y: -5}}
                            transition={{duration: 0.4, yoyo: Infinity}}
                          />
                          <span><em>W-waTches</em></span>
                        </div>
                        {/* <p>Furniture</p> */}
                      </div>
                    </Link>
                    <div onClick={() => setShowNav(!showNav)} className="hamburger">
                        <img src={hamburger} alt="hamburger" />
                    </div>
                </div>
                <div className="links">
                    <NavLink 
                      style={({ isActive }) => ({
                        color: isActive ? color : 'black',
                      })}
                      to='/'>
                        <div>Home</div>
                    </NavLink>
                    <NavLink 
                      style={({ isActive }) => ({
                        color: isActive ? color : 'black',
                      })}
                      to="/category">
                        <div>Category</div>
                    </NavLink>
                    <NavLink 
                      style={({ isActive }) => ({
                        color: isActive ? color : 'black',
                      })}
                      to='/item'>
                        <div>Item</div>
                    </NavLink>
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? color : 'black',
                      })}
                      to='/blog-list'>
                        <div>Blog Listing</div>
                    </NavLink>
                    <NavLink 
                      style={({ isActive }) => ({
                        color: isActive ? color : 'black',
                      })}
                      to='/faq'>
                        <div>FAQ</div>
                    </NavLink>
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? color : 'black',
                      })}
                      to='/contact'>
                        <div>Contact</div>
                    </NavLink>
                </div>

                <motion.div style={{display: showNav? 'block' : 'none'}} className="links-mobile"
                  initial={{x: '100vw'}}
                  animate={{x: 0}}
                  transition={{duration: 2}}
                >
                    <NavLink onClick={() => setShowNav(false)} to='/'>
                        <div>Home</div>
                    </NavLink>
                    <NavLink onClick={() => setShowNav(false)} to="/category">
                        <div>Category</div>
                    </NavLink>
                    <NavLink onClick={() => setShowNav(false)} to='/item'>
                        <div>Item</div>
                    </NavLink>
                    <NavLink onClick={() => setShowNav(false)} to='/blog-list'>
                        <div>Blog Listing</div>
                    </NavLink>
                    <NavLink onClick={() => setShowNav(false)} to='/faq'>
                        <div>FAQ</div>
                    </NavLink>
                    <NavLink onClick={() => setShowNav(false)} to='/contact'>
                        <div>Contact</div>
                    </NavLink>
                    <NavLink onClick={() => setShowNav(false)} to='/profile'>
                        <div>Profile</div>
                    </NavLink>
                    <NavLink onClick={() => setShowNav(false)} to='/cart'>
                        <div>Cart</div>
                    </NavLink>
                      {user && (<div onClick={handleSwitch} >Logout</div>)}
                      {!user && (<Link to='/signup'><div onClick={() => setShowNav(false)} >Login</div></Link>)}
                </motion.div>

                <div className="icons">
                    <div className="s-icon">
                      <Link to='/profile'>
                        <img src={prof} alt="user" />
                      </Link>
                    </div>
                    <div className="s-icon">
                      <Link to='/cart'>
                        <img src={bag} alt="bag" />
                      </Link>
                    </div>
                    {user && (<button onClick={logout} style={{border: `3px solid ${color}`}} className="logout">Logout</button>)}
                    {!user && (<Link to='/signup'><button style={{border: `3px solid ${color}`}} className="logout">Login</button></Link>)}
                </div>
            </nav>
        </div>
    );
}
 
export default Navbar;