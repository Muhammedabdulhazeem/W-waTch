import './HeadBlogList.css'
import { useTheme } from '../../hooks/useTheme';
import arrowRight from '../../assets/icons/arrow-right.svg'
import searchIcon from '../../assets/icons/search-icon.svg'
import { Link } from 'react-router-dom';

const HeadBlogList = () => {
    const { color } = useTheme()

    return (
        <div className="head">
            <div className="left">
                <div  style={{border: `0.1rem solid ${color}`}}>
                    <span>WHAT CAN WE HELP YOU WITH?</span>
                    <div>
                        {/* <img src={searchIcon}  alt="search" /> */}
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="9" cy="9" r="8" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M18.9999 19L14.6499 14.65" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        {/* <searchIcon stroke={color}/> */}
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="content">
                    <p style={{color: color}}>Featured Article</p>
                    <h1>Think Big! Make <br /> the most out of <br /> your space with <br /> these tips</h1>
                    <Link to='/blog-detail'>
                        <div style={{backgroundColor: color}}>
                            <span>READ MORE</span>
                            <div>
                                <img src={arrowRight} alt="arrow" />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
 
export default HeadBlogList;