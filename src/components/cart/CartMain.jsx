import { useTheme } from '../../hooks/useTheme';
import './CartMain.css'
import masterCard from '../../assets/images/master-card.png'
import visaCard from '../../assets/images/visa-card.png'
import amExp from '../../assets/images/am-exp.png'
import paypal from '../../assets/images/paypal.png'

const CartMain = () => {
    const { color } = useTheme()
    return (
        <div className="cart-main">
            <div className="cart-wrap">
                <div className="left">
                    <div className="heads-wrap">
                        <span className="heads">PRODUCT</span>
                        <div className='quantity'>
                            <span className="heads">QUANTITY</span>
                            <span className="heads">PRICE</span>
                        </div>
                        <div></div>
                    </div>

                    <div className="product-wrap">
                        <div className="prod-image">
                            <div className="img">
                                <img src="" alt="" />
                            </div>
                            <div className="text">
                                <span className="name">Name of watch</span>
                                <span className="brand">Category</span>
                                <span className="brand">Brand</span>
                            </div>
                        </div>

                        <div className="price-wrap">
                            <input type="number" defaultValue={1} />
                            <span>$149.67</span>
                        </div>

                        <div className="remove">
                            <button>Remove</button>
                        </div>
                    </div>

                    <div className="shop-on">
                        <div className="l-btn">
                            <span className="arr">{"<"}</span>
                            <span>Continue shopping</span>
                        </div>

                        <div style={{backgroundColor: color}} className="r-btn">
                            <span>Make Purchase</span>
                            <span className="arr">{">"}</span>
                        </div>
                    </div>
                </div>

                <div className="right">
                    <div className="coupon">
                        <span>Have coupon?</span>
                        <div className="code-input">
                            <input placeholder='Coupon code' type="text" />
                            <button style={{backgroundColor: color, disable: true}}>Apply</button>
                        </div>
                    </div>

                    <div className="total-pay">
                        <div className="total">
                            <div>
                                <span>Total price:</span>
                                <span>USD 568</span>
                            </div>
                            <div>
                                <span>Discount:</span>
                                <span>USD 14</span>
                            </div>
                            <div>
                                <span>Total</span>
                                <span className='bold-total'>$190</span>
                            </div>
                        </div>

                        <div className="payment">
                            <div style={{border: '1px solid black'}} className="p-card">
                                <img src={paypal} alt="credit card" />
                            </div>
                            <div className="p-card">
                                <img src={masterCard} alt="credit card" />
                            </div>
                            <div style={{border: '1px solid black'}} className="p-card">
                                <img src={visaCard} alt="credit card" />
                            </div>
                            <div className="p-card">
                                <img src={amExp} alt="credit card" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default CartMain;