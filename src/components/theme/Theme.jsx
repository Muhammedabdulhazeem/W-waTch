import { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { motion } from 'framer-motion';
import './Theme.css'

const colors = ['#87A2FB', '#FE7865', '#9CE0D8', '#FFB585', '#B0E2BB', '#BFADEF', '#FF8E9C', '#FCBDDA']


const Theme = () => {
    const { changeColor, color } = useTheme()
    const [showTheme, setShowTheme] = useState(false)
    console.log(color)

    const handleClick = (color) => {
        changeColor(color)
        setShowTheme(false)
    }

    return (
        <motion.div className="theme"
            drag
            dragConstraints={{left: 0, top: 0, right: 0, bottom: 0}}
            // dragElastic={0.2}
        >
            <div className={showTheme? "theme-wrap show-theme" : "theme-wrap"}>
                <div style={{border: `2px solid ${color}`}} className="theme-card">
                    <div className="card-wrap">
                        {colors.map((color, index) => (
                            <div 
                            key={color} 
                            onClick={() => handleClick(color)}
                            style={{backgroundColor: color, boxShadow: `1px 1px 5px`}} 
                            className="s-color"
                            ></div>
                        ))}
                    </div>
                </div>
            </div>

            <div onClick={() => setShowTheme(!showTheme)} className="side-icon"></div>
        </motion.div>
    );
}
 
export default Theme;