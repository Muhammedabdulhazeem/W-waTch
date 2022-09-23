import CartMain from '../components/cart/CartMain';
import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../hooks/useTheme';
import './Cart.css'

const Cart = () => {
    const { user } = useAuth()
    const { color } = useTheme()

    return ( 
        <div className="cart container">
            {/* HEAD */}
            <div className="head">
                <h1>Shopping cart</h1>
            </div>

            {/* MAIN */}
            <CartMain />
        </div>
    );
}
 
export default Cart;