import { useState } from 'react';
import './MainBlogList.css'
import { useTheme } from '../../hooks/useTheme';
import image8 from '../../assets/images/image8.jpg'
import image9 from '../../assets/images/image9.jpg'
import image6 from '../../assets/images/image6.jpg'
import image12 from '../../assets/images/image12.jpg'
import image11 from '../../assets/images/image11.jpg'
import image10 from '../../assets/images/image10.jpg'
import box16 from '../../assets/images/box16.jpg'
import box17 from '../../assets/images/box17.jpg'


const MainBlogList = () => {
    const [seeMore, setSeeMore] = useState(false)
    const { color, showModal } = useTheme()

    return (
        <div className="main">
            <div className="main-wrap">
                <div className="left">
                    <div className="choice filter">
                        <span>Categories</span>
                        <span></span>
                    </div>

                    <span className="others">Featured Articles</span>

                    <div className="materials">
                        <p className='others'>Inspirations</p>
                        <div className="lists">
                            <div className='opt'>
                                <span>Synthetic skin (6)</span>
                            </div>
                            <div className='opt'>
                                <span>Synthetic skin (6)</span>
                            </div>
                            <div className='opt'>
                                <span>Synthetic skin (6)</span>
                            </div>
                            <div className='opt'>
                                <span>Synthetic skin (6)</span>
                            </div>
                            <div className='opt'>
                                <span>Synthetic skin (6)</span>
                            </div>
                            <div className='opt'>
                                <span>Synthetic skin (6)</span>
                            </div>
                            <div className='opt'>
                                <span>Synthetic skin (6)</span>
                            </div>
                            <div className='opt'>
                                <span>Synthetic skin (6)</span>
                            </div>
                        </div>
                    </div>

                    <span className="others">Sale Off</span>
                </div>

                <div className="right">
                    <div className="left">
                        <div onClick={() => showModal({bool: true, src: image8})} className='box box-card'>
                            <img src={image8} alt="watch" />                          
                            <div className='inner'>
                                <p>Make the most out <br /> of your space with <br /> these tips</p>
                                <span>Inspiration</span>
                            </div>
                        </div>

                        <div
                            className='box-dot'
                            onClick={() => showModal({bool: true, src: box17})}
                        >
                            <img src={box17} alt="watch" />
                            <div className='dots'>
                                <span></span>
                                <span></span>
                                <span style={{backgroundColor: color}}></span>
                                <span></span>
                            </div>
                        </div>

                        {seeMore && (<>
                            <div
                                className='box box-card'
                                onClick={() => showModal({bool: true, src: image10})}
                            >
                                <img src={image10} alt="watch" />
                                <div className='inner'>
                                    <p>Make the most out <br /> of your space with <br /> these tips</p>
                                    <span>Inspiration</span>
                                </div>
                            </div>

                            <div
                                className='box box-card'
                                onClick={() => showModal({bool: true, src: image11})}
                            >
                                <img src={image11} alt="watch" />
                                <div className='inner'>
                                    <p>Make the most out <br /> of your space with <br /> these tips</p>
                                    <span>Inspiration</span>
                                </div>
                            </div>
                        </>)}
                    </div>

                    <div className="right">
                        <div
                            className='box-dot'
                            onClick={() => showModal({bool: true, src: box16})}
                        >
                            <img src={box16} alt="watch" />
                            <div className='dots'>
                                <span></span>
                                <span></span>
                                <span style={{backgroundColor: color}}></span>
                                <span></span>
                            </div>
                        </div>

                        <div
                            className='box box-card'
                            onClick={() => showModal({bool: true, src: image9})}
                        >
                            <img src={image9} alt="watch" />  
                            <div className='inner'>
                                <p>Make the most out <br /> of your space with <br /> these tips</p>
                                <span>Inspiration</span>
                            </div>
                        </div>

                        {seeMore && (<>
                            <div
                                className='box box-card'
                                onClick={() => showModal({bool: true, src: image6})}
                            >
                                <img src={image6} alt="watch" />
                                <div className='inner'>
                                    <p>Make the most out <br /> of your space with <br /> these tips</p>
                                    <span>Inspiration</span>
                                </div>
                            </div>

                            <div
                                className='box box-card'
                                onClick={() => showModal({bool: true, src: image12})}
                            >
                                <img src={image12} alt="watch" />
                                <div className='inner'>
                                    <p>Make the most out <br /> of your space with <br /> these tips</p>
                                    <span>Inspiration</span>
                                </div>
                            </div>
                        </>)}
                    </div>
                    <div className="btn">
                        <button style={{backgroundColor: color}} onClick={() => setSeeMore(!seeMore)}>{seeMore ? "See Less" : "See More"}</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default MainBlogList;