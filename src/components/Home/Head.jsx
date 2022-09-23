import './Head.css'
import { motion } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';
import arrowRight from '../../assets/icons/arrow-right.svg'
import sImg2 from '../../assets/images/ss-image11.png'
import sImg3 from '../../assets/images/s-img3.jpg'
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const textVariant = {
    initial: { x: '-100vw'},
    animate: {
        x: 0, 
        transition: {
            delay: 0.2,
            duration: 0.4,
        }
    }
}
// const rightVariant = {
//     initial: { x: '100vw'},
//     animate: {
//         x: 0, 
//         transition: {
//             delay: 0.2,
//             duration: 0.4,
//         }
//     }
// }
// const leftVariant = {
//     initial: { x: '-100vw'},
//     animate: {
//         x: 0, 
//         transition: {
//             delay: 0.2,
//             duration: 0.4,
//         }
//     }
// }

const Head = () => {
    const { color } = useTheme()
    const { user } = useAuth()

    return (
        <div className="head">
            <motion.div className="texts"
                variants={textVariant}
                initial="initial"
                animate="animate"
            >
                <p>New Collection </p>
                <p>Hey, {user?.displayName}</p>
                <h1>Elevated Hands</h1>
                <span>Armchair upholstered in synthetic leather. Powder <br /> coated steel legs.</span>
            </motion.div>
            <motion.div className='left'
            >
                <div className="image-box">
                    {/* <img src={sImg2} alt="" /> */}
                </div>
            </motion.div>
            <motion.div className='right'
            >
                <Link to='/category'>
                    <div className="r-img-box">
                        {/* <img src={sImg3} alt="watch" /> */}
                    </div>
                    <div style={{backgroundColor: color}} className="shop-now">
                            <span >Shop now</span>
                        <div>
                            <img src={arrowRight} alt="arrow" />
                        </div>
                    </div>
                </Link>
            </motion.div>
        </div>
    );
}
 
export default Head;