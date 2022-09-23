import { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import box1 from '../../assets/images/box1.jpg'
import box13 from '../../assets/images/box13.jpg'
import box3 from '../../assets/images/box3.jpg'
import box4 from '../../assets/images/box4.jpg'
import box5 from '../../assets/images/box5.jpg'
import box6 from '../../assets/images/box6.jpg'
import box7 from '../../assets/images/box7.jpg'
import box15 from '../../assets/images/box15.jpg'
import box9 from '../../assets/images/box9.jpg'
import box10 from '../../assets/images/box10.jpg'
import box11 from '../../assets/images/box11.jpg'
import box12 from '../../assets/images/box12.jpg'
import './MainCategory.css'
import LikeCartIcon from '../LikeCartIcon';

const MainCategory = () => {
    const [num, setNum] = useState(0)
    const [moreProduct, setMoreProduct] = useState(false)
    const { color, showModal } = useTheme()


    return (
        <div className="main">
            <div className="left">
                <div className="color-head">
                    <div className='choice color-c'>
                        <span>Color</span>
                        <span></span>
                    </div>
                    <div className="colors">
                        <RadioButtons activeColor={num} setActiveColor={setNum}/>
                    </div>
                </div>

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

                <div className="choice price">
                    <span>Price</span>
                    <span></span>
                </div>

                <div className="euro">
                    <input type="range" min='0' defaultValue='0' max='100' />
                    <div className="range">
                        <span>0€</span>
                        <span>2000€</span>
                    </div>
                </div>

                <div style={{color: color}} className="clear">
                    <span>CLEAR ALL</span>
                    <span>X</span>
                </div>
            </div>

            <div className="right">
                <div className="head">
                    <span>ALL</span>
                    <span>NEW</span>
                    <span>OFFERS</span>
                    <span>DELIVERY IN 100 DAYS</span>
                </div>
                <div className="content">
                    <div className="single-item">
                        <div className="color-wraper">
                            <LikeCartIcon />
                            <div onClick={() => showModal({bool: true, src: box1})} style={{ backgroundColor: "#E9F1F3" }} className="color">
                                <div className="darken"></div>
                                <img src={box1} alt="watch" />
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
                            <div onClick={() => showModal({bool: true, src: box13})} style={{ backgroundColor: "#E9F3ED" }} className="color">
                                <div className="darken"></div>
                                <img src={box13} alt="watch" />
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
                            <div onClick={() => showModal({bool: true, src: box3})} style={{ backgroundColor: "#FFEDDF" }} className="color">
                                <div className="darken"></div>
                                <img src={box3} alt="watch" />
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
                            <div onClick={() => showModal({bool: true, src: box4})} style={{ backgroundColor: "#E9F1F3" }} className="color">
                                <div className="darken"></div>
                                <img src={box4} alt="watch" />
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
                            <div onClick={() => showModal({bool: true, src: box5})} style={{ backgroundColor: "#FFF0EE" }} className="color">
                                <div className="darken"></div>
                                <img src={box5} alt="watch" />
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
                            <div onClick={() => showModal({bool: true, src: box6})} style={{ backgroundColor: "#E9F1F3" }} className="color">
                                <div className="darken"></div>
                                <img src={box6} alt="watch" />
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

                    {moreProduct && (<>
                        <div className="single-item">
                            <div className="color-wraper">
                                <LikeCartIcon />
                                <div onClick={() => showModal({bool: true, src: box7})} style={{ backgroundColor: "#E9F3ED" }} className="color">
                                    <div className="darken"></div>
                                    <img src={box7} alt="watch" />
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
                                <div onClick={() => showModal({bool: true, src: box15})} style={{ backgroundColor: "#E9F3ED" }} className="color">
                                    <div className="darken"></div>
                                    <img src={box15} alt="watch" />
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
                                <div onClick={() => showModal({bool: true, src: box9})} style={{ backgroundColor: "#E9F1F3" }} className="color">
                                    <div className="darken"></div>
                                    <img src={box9} alt="watch" />
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
                                <div onClick={() => showModal({bool: true, src: box10})} style={{ backgroundColor: "#FFEDDF" }} className="color">
                                    <div className="darken"></div>
                                    <img src={box10} alt="watch" />
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
                                <div onClick={() => showModal({bool: true, src: box11})} style={{ backgroundColor: "#FFEDDF" }} className="color">
                                    <div className="darken"></div>
                                    <img src={box11} alt="watch" />
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
                                <div onClick={() => showModal({bool: true, src: box12})} style={{ backgroundColor: "#FFEDDF" }} className="color">
                                    <div className="darken"></div>
                                    <img src={box12} alt="watch" />
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
                    </>)}
                </div>

                <div className="btn">
                    <button style={{backgroundColor: color}} onClick={() => setMoreProduct(!moreProduct)} className="show-more">{moreProduct? 'SHOW LESS PRODUCTS' : 'SHOW MORE PRODUCTS'}</button>
                </div>
            </div>
        </div>
    );
}

export default MainCategory;

const RadioButtons = ({ setActiveColor, activeColor }) => {
    const colorArray = ['#7FAADB', '#FE7865', '#9CE0D8', '#FFB585', '#B0E2BB', '#BFADEF', '#FF8E9C', '#FCBDDA']
    return (
        <>
            {colorArray.map((color, index) => (
                <div onClick={() => setActiveColor(index)} className="radio-wrap">
                    {activeColor === index
                        ? <div style={{ border: `0.1rem solid ${color}` }} className="ring">
                            <div style={{ backgroundColor: `${color}` }}></div>
                        </div>

                        : <div className="radio-wrap">
                            <div style={{ backgroundColor: `${color}` }} className="radio"></div>
                        </div>
                    }
                </div>
            ))}
        </>
    )
}