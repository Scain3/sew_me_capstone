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
                    </div>
                    <div className="fabric-cart">
                        <img src={cartItem.fabricImage} alt={cartItem.fabricColor} />
                    </div>
                </div>


            ))}</div>
        </div>
    )
}

export default ShoppingCart;
