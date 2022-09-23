import './HeadItem.css'
import { useTheme } from '../../hooks/useTheme';
import lgChair from '../../assets/images/lg-chair.png'
import image6 from '../../assets/images/image6.jpg'
import sImg1 from '../../assets/images/s-img1.jpg'
import sImg4 from '../../assets/images/s-img4.jpg'
import ssImage1 from '../../assets/images/ss-image1.png'
import ssImage2 from '../../assets/images/ss-image2.png'
import ssImage3 from '../../assets/images/ss-image3.png'
import topChair from '../../assets/images/top-chair.png'
import bottomChair from '../../assets/images/bottom-chair.png'
import arrowRight from '../../assets/icons/arrow-right.svg'


const HeadItem = () => {
    const { color } = useTheme()

    return (
        <div className="head">
            <div className="left">
                <div className="lg-chair">
                    {/* <img src={lgChair} alt="chair" /> */}
                    <img src={ssImage1} alt="watch" />
                </div>
            </div>
            <div className="right">
                <div className="content">
                    <div className="left">
                        <p style={{color: color}}>150€</p>
                        <h1>Bjorg chair. <br /> white plastic</h1>
                        <span>Armchair in polypropylene. Seat and legs in solid <br /> natural beech wood.</span>
                        <div className="colors">
                            <span style={{backgroundColor: "#7FAADB"}}></span>
                            <div></div>
                            <span style={{backgroundColor: "#9CE0D8"}}></span>
                            <span style={{backgroundColor: "#FFB585"}}></span>
                        </div>
                        <div style={{backgroundColor: color}} className="add-cart">
                            <span>ADD TO CART</span>
                            <div>
                                <img src={arrowRight} alt="arrow" />
                            </div>
                        </div>
                        <span>SHARE PRODUCT</span>
                    </div>

                    <div className="right">
                        <div className="top-chair">
                            <img src={ssImage2} alt="chair" />
                        </div>
                        <div className="bottom-chair">
                            <img src={ssImage3} alt="chair" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default HeadItem;