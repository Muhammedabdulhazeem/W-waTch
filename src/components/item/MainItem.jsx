import './MainItem.css'
import { useTheme } from '../../hooks/useTheme';
import LikeCartIcon from '../LikeCartIcon';
import item5 from '../../assets/images/item1.jpg'
import item6 from '../../assets/images/item2.jpg'
import item7 from '../../assets/images/item3.jpg'
import item8 from '../../assets/images/item4.jpg'
import item9 from '../../assets/images/item9.jpg'
import item10 from '../../assets/images/item10.jpg'


const MainItem = () => {
    const { color, showModal } = useTheme()

    return (
        <div className="main">
            <div className="left">
                <div className="choice filter">
                    <span>Filter</span>
                    <span></span>
                </div>
                
                <span className="others">New In</span>

                <div className="materials">
                    <p className='others'>Materials</p>
                    <div className="lists">
                        <div className='opt'>
                            <span>Synthetic skin (6)</span>
                            <div></div>
                        </div>
                        <div className='opt'>
                            <span>Synthetic skin (6)</span>
                            <div></div>
                        </div>
                        <div className='opt'>
                            <span>Synthetic skin (6)</span>
                            <div></div>
                        </div>
                        <div className='opt'>
                            <span>Synthetic skin (6)</span>
                            <div></div>
                        </div>
                        <div className='opt'>
                            <span>Synthetic skin (6)</span>
                            <div></div>
                        </div>
                        <div className='opt'>
                            <span>Synthetic skin (6)</span>
                            <div></div>
                        </div>
                        <div className='opt'>
                            <span>Synthetic skin (6)</span>
                            <div></div>
                        </div>
                        <div className='opt'>
                            <span>Synthetic skin (6)</span>
                            <div></div>
                        </div>
                    </div>
                </div>

                <span className="others">Sale Off</span>
            </div>

            <div className="right">
                <div className="content">
                    <div className="single-item">
                        <div className="color-wraper">
                            <LikeCartIcon />
                            <div onClick={() => showModal({bool: true, src: item5})} style={{backgroundColor: "#E9F1F3"}} className="color">
                                <div className="darken"></div>
                                <img src={item5} alt="clock" />
                            </div>
                        </div>
                        <div className="texts">
                            <div className="price">386 €</div>
                            <h1>Patio <br /> armchair, blue</h1>
                            <p>Within 10 days</p>
                            <span>Armchair in scandinavian design <br /> upholstered with fabric Miss pattern. <br /> Backrest with decorative buttons. Legs <br /> in natural wood.</span>
                            <h3>BUY NOW</h3>
                        </div>
                    </div>
                    <div className="single-item">
                        <div className="color-wraper">
                            <LikeCartIcon />
                            <div onClick={() => showModal({bool: true, src: item6})} style={{backgroundColor: "#E9F3ED"}} className="color">
                                <div className="darken"></div>
                                <img src={item6} alt="clock" />
                            </div>
                        </div>
                        <div className="texts">
                            <div className="price">386 €</div>
                            <h1>Patio <br /> armchair, blue</h1>
                            <p>Within 10 days</p>
                            <span>Armchair in scandinavian design <br /> upholstered with fabric Miss pattern. <br /> Backrest with decorative buttons. Legs <br /> in natural wood.</span>
                            <h3>BUY NOW</h3>
                        </div>
                    </div>
                    <div className="single-item">
                        <div className="color-wraper">
                            <LikeCartIcon />
                            <div onClick={() => showModal({bool: true, src: item7})} style={{backgroundColor: "#FFEDDF"}} className="color">
                                <div className="darken"></div>
                                <img src={item7} alt="clock" />
                            </div>
                        </div>
                        <div className="texts">
                            <div className="price">386 €</div>
                            <h1>Patio <br /> armchair, blue</h1>
                            <p>Within 10 days</p>
                            <span>Armchair in scandinavian design <br /> upholstered with fabric Miss pattern. <br /> Backrest with decorative buttons. Legs <br /> in natural wood.</span>
                            <h3>BUY NOW</h3>
                        </div>
                    </div>
                    <div className="single-item">
                        <div className="color-wraper">
                            <LikeCartIcon />
                            <div onClick={() => showModal({bool: true, src: item8})} style={{backgroundColor: "#E9F1F3"}} className="color">
                                <div className="darken"></div>
                                <img src={item8} alt="clock" />
                            </div>
                        </div>
                        <div className="texts">
                            <div className="price">386 €</div>
                            <h1>Patio <br /> armchair, blue</h1>
                            <p>Within 10 days</p>
                            <span>Armchair in scandinavian design <br /> upholstered with fabric Miss pattern. <br /> Backrest with decorative buttons. Legs <br /> in natural wood.</span>
                            <h3>BUY NOW</h3>
                        </div>
                    </div>
                    <div className="single-item">
                        <div className="color-wraper">
                            <LikeCartIcon />
                            <div onClick={() => showModal({bool: true, src: item9})} style={{backgroundColor: "#E9F1F3"}} className="color">
                                <div className="darken"></div>
                                <img src={item9} alt="clock" />
                            </div>
                        </div>
                        <div className="texts">
                            <div className="price">386 €</div>
                            <h1>Patio <br /> armchair, blue</h1>
                            <p>Within 10 days</p>
                            <span>Armchair in scandinavian design <br /> upholstered with fabric Miss pattern. <br /> Backrest with decorative buttons. Legs <br /> in natural wood.</span>
                            <h3>BUY NOW</h3>
                        </div>
                    </div>
                    <div className="single-item">
                        <div className="color-wraper">
                            <LikeCartIcon />
                            <div onClick={() => showModal({bool: true, src: item10})} style={{backgroundColor: "#E9F1F3"}} className="color">
                                <div className="darken"></div>
                                <img src={item10} alt="clock" />
                            </div>
                        </div>
                        <div className="texts">
                            <div className="price">386 €</div>
                            <h1>Patio <br /> armchair, blue</h1>
                            <p>Within 10 days</p>
                            <span>Armchair in scandinavian design <br /> upholstered with fabric Miss pattern. <br /> Backrest with decorative buttons. Legs <br /> in natural wood.</span>
                            <h3>BUY NOW</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default MainItem;