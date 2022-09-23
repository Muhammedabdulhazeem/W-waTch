import './HeadCategory.css'
import { useTheme } from '../../hooks/useTheme';
import arrowRight from '../../assets/icons/arrow-right.svg'
import { Link } from 'react-router-dom';

const HeadCategory = () => {
    const { color } = useTheme()

    return (
        <div className="head">
            <div className="left"></div>
            <div className="right">
                <div style={{backgroundColor: color}} className="discount"><span>-35%</span></div>
                <div className="content">
                    <p style={{color: color}}>Sale Off</p>
                    <h1>Sofas <span className='and'>and</span> <br /> Armchairs</h1>
                    <span>Relax, get comfortable and let yourself go. Once you try one of <br /> these sofas and armchairs you won't want any others. May the <br /> style be with you!</span>
                    <Link to='/item'>
                    <div style={{backgroundColor: color}}>
                        <span>EXPLORE ALL ITEMS</span>
                        <div className='arrow'>
                            <img src={arrowRight} alt="arrow" />
                        </div>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
 
export default HeadCategory;