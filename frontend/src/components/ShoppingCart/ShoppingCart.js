import { useSelector} from "react-redux";
import './ShoppingCart.css';

function ShoppingCart(){
    const cartItems = useSelector(state => Object.values(state.cart));


    return(
        <div className="cart-container">
            <h1 className="header"> Shopping Cart </h1>
            <div>{cartItems.map(cartItem => (
                <div className="whole-cart">
                    <div className="pattern-cart">
                        <h3>{cartItem.patternCompany + " " + cartItem.patternNumber}</h3>
                        <img className="images" src={cartItem.patternImage} alt={cartItem.patternType} />
                        {cartItem.patternPrice > 0 && <div>${cartItem.patternPrice}</div>}
                    </div>
                    {cartItem.fabricId && <div className="fabric-cart">
                        <h3>{cartItem.fabricColor + " " + cartItem.fabricType}</h3>
                        <img className="images" src={cartItem.fabricImage} alt={cartItem.fabricColor} />
                        {cartItem.fabricPrice > 0 && <div>${cartItem.fabricPrice}</div>}
                    </div>}
                    {cartItem.tailorId && <div className="tailor-cart">
                        <h3>{cartItem.tailorType}</h3>
                        <img className="images" src={cartItem.tailorImage} alt={cartItem.tailorType} />
                        {cartItem.tailorPrice > 0 && <div>${cartItem.tailorPrice}</div>}
                    </div>}
                </div>


            ))}</div>
            <h1>Total:
                <span>${cartItems.reduce((currentSum, cartItem) => {
                        const price = parseFloat(cartItem.patternPrice) + parseFloat(cartItem.fabricPrice) + parseFloat(cartItem.tailorPrice)

                       return(
                        currentSum + price
                       )
                }, 0)}
                </span>
            </h1>
        </div>
    )
}

export default ShoppingCart;
