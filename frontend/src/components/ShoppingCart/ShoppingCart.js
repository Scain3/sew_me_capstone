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
                        <div>{cartItem.patternPrice}</div>
                    </div>
                    <div className="fabric-cart">
                        <img src={cartItem.fabricImage} alt={cartItem.fabricColor} />
                        <div>{cartItem.fabricPrice}</div>
                    </div>
                    <div className="tailor-cart">
                        <div>{cartItem.tailorType}</div>
                        <img src={cartItem.tailorImage} alt={cartItem.tailorType} />
                        <div>{cartItem.tailorPrice}</div>
                    </div>
                </div>


            ))}</div>
            <h1>Total:
                <span>{cartItems.map(cartItem => (
                    <div>
                        {cartItem.patternPrice + cartItem.fabricPrice + cartItem.tailorPrice}
                        <div>
                            {console.log("pattern price", typeof cartItem.patternPrice)}
                            {console.log("fabric price", typeof cartItem.fabricPrice)}
                            {console.log("tailor price", typeof cartItem.tailorPrice)}
                        </div>
                    </div>
                ))}</span>
            </h1>
        </div>
    )
}

export default ShoppingCart;
