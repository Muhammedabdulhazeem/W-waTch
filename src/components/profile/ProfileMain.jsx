import './ProfileMain.css'

const orders = [1,2,3,4,5,6,7,8]

const ProfileMain = () => {
    return (
        <div className="prod-main">
            <div className="orders">
                <h2>Orders</h2>
                <div className="order-wrap">
                    {orders.map((order) => (
                        <div key={order} className="s-product">
                            <div className="sp-img">
                                <img src="" alt="" />
                            </div>
                            <div className="texts">
                                <span>Name</span>
                                <span>Price</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="liked">
                <h2>Products you've liked</h2>
                <div className="order-wrap">
                    {orders.map((order) => (
                        <div key={order} className="s-product">
                            <div className="sp-img">
                                <img src="" alt="" />
                            </div>
                            <div className="texts">
                                <span>Name</span>
                                <span>Price</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default ProfileMain;