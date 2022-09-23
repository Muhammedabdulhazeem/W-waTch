import './Slider.css'
import { useTheme } from '../hooks/useTheme';
import slider1 from '../assets/images/box13.jpg'
import slider2 from '../assets/images/slider2.jpg'
import slider3 from '../assets/images/slider3.jpg'
import slider4 from '../assets/images/slider4.jpg'
import slider5 from '../assets/images/slider5.jpg'


// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/mousewheel';

const Slider = () => {
    const {color, showModal} = useTheme()
    const mobile = window.innerWidth
    console.log(mobile)

    return (
        <div className="slider container">
            <div className="wrapper">
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={30}
                    slidesPerView= {'auto'}
                    breakpoints = {{
                        1080: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        }
                    }}
                    navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                <SwiperSlide>
                    <div onClick={() => showModal({bool: true, src: slider1})} className="single-img">
                        <img src={slider1} alt="watch" />
                        <span className="collection">Autumn Collection</span>
                        <span style={{backgroundColor: color}} className="num">01</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div onClick={() => showModal({bool: true, src: slider2})} className="single-img">
                        <img src={slider2} alt="watch" />
                        <span className="collection">Autumn Collection</span>
                        <span style={{backgroundColor: color}} className="num">02</span>
                    </div>
                    <br />
                    <br />
                </SwiperSlide>
                <SwiperSlide>
                    <div onClick={() => showModal({bool: true, src: slider3})} className="single-img">
                        <img src={slider3} alt="watch" />
                        <span className="collection">Autumn Collection</span>
                        <span style={{backgroundColor: color}} className="num">03</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div onClick={() => showModal({bool: true, src: slider4})} className="single-img">
                        <img src={slider4} alt="watch" />
                        <span className="collection">Autumn Collection</span>
                        <span style={{backgroundColor: color}} className="num">04</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div onClick={() => showModal({bool: true, src: slider5})} className="single-img">
                        <img src={slider5} alt="watch" />
                        <span className="collection">Autumn Collection</span>
                        <span style={{backgroundColor: color}} className="num">05</span>
                    </div>
                </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}
 
export default Slider;