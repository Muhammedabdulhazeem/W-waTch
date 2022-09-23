import { NavLink } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import FurnitureBox from '../FurnitureBox';
import image6 from '../../assets/images/image6.jpg'
import sImg14 from '../../assets/images/s-img14.jpg'
import sImg12 from '../../assets/images/s-img12.jpg'
import sImg11 from '../../assets/images/s-img11.jpg'
import sImg10 from '../../assets/images/s-img10.jpg'
import image3 from '../../assets/images/image3.jpg'
import { motion } from 'framer-motion';
import './SaleOff.css'
import Darken from '../Darken';
import LikeCartIcon from '../LikeCartIcon';

const box1Variant = {
    initial: { y: -250, opacity: 0},
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.2,
            duration: 0.4,
        }
    }
}
const box2Variant = {
    initial: { x: -250, opacity: 0},
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 0.2,
            duration: 0.4,
        }
    }
}
const box3Variant = {
    initial: { y: 250, opacity: 0},
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.2,
            duration: 0.4,
        }
    }
}
const box4Variant = {
    initial: { y: -250, x: 250, opacity: 0},
    animate: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
            delay: 0.4,
            duration: 0.4,
        }
    }
}
const box5Variant = {
    initial: { x: 250, opacity: 0},
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 0.2,
            duration: 0.4,
        }
    }
}
const box6Variant = {
    initial: { y: 200, x: 250, opacity: 0},
    animate: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
            delay: 0.2,
            duration: 0.4,
        }
    }
}

const SaleOff = () => {
    const {color, showModal} = useTheme()

    return (
        <div className="sale-off">
            <div className="left">
                <div className="top">
                    <p className="on-sale">On Sale</p>
                    <h1>Up to <br /> 20% off</h1>
                    <div style={{backgroundColor: color}} className="hr-line"></div>
                    <span>Our entire Winter collection</span>
                </div>
                <div className="bottom">
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? color : 'black',
                      })}
                      to='/'
                    >
                        <span className='bold'>Home</span>
                    </NavLink>
                    <NavLink 
                      style={({ isActive }) => ({
                        color: isActive ? color : 'black',
                      })}
                      to='/category'>
                        <span className='bold'>Category</span>
                    </NavLink>
                    <div className="collection">
                        <span>Chairs</span>
                        <span>Office Chairs</span>
                        <span>Stools</span>
                        <span>Rocking Chairs</span>
                        <span>Benches</span>
                    </div>
                    <NavLink 
                      style={({ isActive }) => ({
                        color: isActive ? color : 'black',
                      })}
                      to='/item'>
                        <span className='bold'>Item</span>
                    </NavLink>
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? color : 'black',
                      })}
                      to='/blog-list'>
                        <span className='bold'>Blog Listing</span>
                    </NavLink>
                    <NavLink 
                      style={({ isActive }) => ({
                        color: isActive ? color : 'black',
                      })}
                      to='/faq'>
                        <span className='bold'>FAQ</span>
                    </NavLink>
                    <NavLink 
                      style={({ isActive }) => ({
                        color: isActive ? color : 'black',
                      })}
                      to='/contact'>
                        <span className='bold'>Contact</span>
                    </NavLink>
                </div>
            </div>

            <div className="right">
                <div className="left">
                    <div className="f-box-wrap">
                        <LikeCartIcon />
                        <motion.div className="f-box box-1"
                            variants={box1Variant}
                            initial="initial"
                            animate="animate"
                            onClick={() => showModal({bool: true, src: image6})}
                        >
                            <div className="darken"></div>
                            <span>Hodinkee</span>
                            <div className="box-image">
                                <img src={image6} alt="watch" />
                            </div>
                        </motion.div>
                    </div>

                    <div className="f-box-wrap">
                        <LikeCartIcon />
                        <motion.div className="f-box box-2"
                            variants={box2Variant}
                            initial="initial"
                            animate="animate"
                            onClick={() => showModal({bool: true, src: sImg12})}
                        >
                            <div className="darken"></div>
                            <span>Bobs Watches</span>
                            <div className="box-image">
                                <img src={sImg12} alt="watch" />
                            </div>
                        </motion.div>
                    </div>

                    <div className="f-box-wrap">
                        <LikeCartIcon />
                        <motion.div className="f-box box-3"
                            variants={box3Variant}
                            initial="initial"
                            animate="animate"
                            onClick={() => showModal({bool: true, src: sImg10})}
                        >
                            <div className="darken"></div>
                            <span>Wristcheck</span>
                            <div className="box-image">
                                <img src={sImg10} alt="watch" />
                            </div>
                        </motion.div>
                    </div>

                </div>
                <div className="right">
                    <div className="f-box-wrap">
                        <LikeCartIcon />
                        <motion.div className="f-box box-1"
                            variants={box4Variant}
                            initial="initial"
                            animate="animate"
                            onClick={() => showModal({bool: true, src: image3})}
                        >
                            <div className="darken"></div>
                            <span>A Collected Man</span>
                            <div className="box-image">
                                <img src={image3} alt="watch" />
                            </div>
                        </motion.div>
                    </div>

                    <div className="f-box-wrap">
                        <LikeCartIcon />
                        <motion.div className="f-box box-2"
                            variants={box5Variant}
                            initial="initial"
                            animate="animate"
                            onClick={() => showModal({bool: true, src: sImg11})}
                        >
                            <div className="darken"></div>
                            <span>Rolex</span>
                            <div className="box-image">
                                <img src={sImg11} alt="watch" />
                            </div>
                        </motion.div>
                    </div>

                    <div className="f-box-wrap">
                        <LikeCartIcon />
                        <motion.div className="f-box box-3"
                            variants={box6Variant}
                            initial="initial"
                            animate="animate"
                            onClick={() => showModal({bool: true, src: sImg14})}
                        >
                            <div className="darken"></div>
                            <span>Revolution Watch</span>
                            <div className="box-image">
                                <img src={sImg14} alt="watch" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default SaleOff;