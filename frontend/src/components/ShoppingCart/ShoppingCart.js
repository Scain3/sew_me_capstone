import { useSelector, useDispatch} from "react-redux";
import './ShoppingCart.css';
import {removeItemFromCart, purchaseItemsFromCart} from "../../store/cart";

function ShoppingCart(){
    const cartItems = useSelector(state => Object.values(state.cart));
    const dispatch = useDispatch();


    return(
        <div className="cart-container">
            <h1 className="header"> Shopping Cart </h1>
            <div>{cartItems.map(cartItem => (
                <div className="whole-cart">
                    {cartItem.patternId && <div className="pattern-cart">
                        <h3>{cartItem.patternCompany + " " + cartItem.patternNumber}</h3>
                        <img className="images" src={cartItem.patternImage} alt={cartItem.patternType} />
                        {cartItem.patternPrice > 0 && <div>${cartItem.patternPrice}</div>}
                        <button className="button" onClick={()=>{dispatch(removeItemFromCart(cartItem.id))}}>Remove</button>
                    </div>}
                    {cartItem.fabricId && <div className="fabric-cart">
                        <h3>{cartItem.fabricColor + " " + cartItem.fabricType}</h3>
                        <img className="images" src={cartItem.fabricImage} alt={cartItem.fabricColor} />
                        {cartItem.fabricPrice > 0 && <div>${cartItem.fabricPrice}</div>}
                        <button className="button" onClick={()=>{dispatch(removeItemFromCart(cartItem.id))}}>Remove</button>
                    </div>}
                    {cartItem.tailorId && <div className="tailor-cart">
                        <h3>{cartItem.tailorType}</h3>
                        <img className="images" src={cartItem.tailorImage} alt={cartItem.tailorType} />
                        {cartItem.tailorPrice > 0 && <div>${cartItem.tailorPrice}</div>}
                        <button className="button" onClick={()=>{dispatch(removeItemFromCart(cartItem.id))}}>Remove</button>
                    </div>}
                </div>


            ))}</div>
            <h1>{"Total:" + " " }
                <span>${cartItems.reduce((currentSum, cartItem) => {
                        const price = parseFloat(cartItem.patternPrice) + parseFloat(cartItem.fabricPrice) + parseFloat(cartItem.tailorPrice)

                       return(
                        currentSum + Math.round(price)
                       )
                }, 0)}
                </span>
            </h1>
            <button onClick={()=>dispatch(purchaseItemsFromCart(cartItems))}>Purchase</button>
        </div>
    )
}

export default ShoppingCart;
