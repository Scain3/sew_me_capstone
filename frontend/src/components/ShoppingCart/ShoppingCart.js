import { useSelector} from "react-redux";
import './ShoppingCart.css';

function ShoppingCart(){
    const cartItems = useSelector(state => Object.values(state.cart));


    return(
        <div>
            <h1> Shopping Cart </h1>
            <div>{cartItems.map(cartItem => (
                <div className="whole-cart">
                    <div className="pattern-cart">
                        <div>{cartItem.fabricColor}<span>{cartItem.fabricType}</span></div>
                        <img src={cartItem.patternImage} alt={cartItem.patternType} />
                        {cartItem.patternPrice > 0 && <div>${cartItem.patternPrice}</div>}
                    </div>
                    <div className="fabric-cart">
                        <img src={cartItem.fabricImage} alt={cartItem.fabricColor} />
                        {cartItem.fabricPrice > 0 && <div>${cartItem.fabricPrice}</div>}
                    </div>
                    <div className="tailor-cart">
                        <div>{cartItem.tailorType}</div>
                        <img src={cartItem.tailorImage} alt={cartItem.tailorType} />
                        {cartItem.tailorPrice > 0 && <div>${cartItem.tailorPrice}</div>}
                    </div>
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
