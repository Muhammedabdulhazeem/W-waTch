import './HeadFaq.css'
import { useTheme } from '../../hooks/useTheme';
import searchIcon from '../../assets/icons/search-icon.svg'


const HeadFaq = () => {
    const { color } = useTheme()

    return (
        <div className="head">
            <div className="left"></div>
            <div className="right">
                <div className="content">
                    <p style={{color: color}}>Help Center</p>
                    <h1>How can We <br /> help You</h1>
                    <span>Our help center can instantly give you answers to <br /> many frequently asked questions.</span>
                    <div style={{border: `0.1rem solid ${color}`}}>
                        <span>WHAT CAN WE HELP YOU WITH?</span>
                        <div>
                            {/* <img src={searchIcon} alt="search" /> */}
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="9" cy="9" r="8" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M18.9999 19L14.6499 14.65" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default HeadFaq;