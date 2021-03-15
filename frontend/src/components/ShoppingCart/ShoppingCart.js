import { useSelector, useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";
import './ShoppingCart.css';
import {removeItemFromCart, purchaseItemsFromCart} from "../../store/cart";

function ShoppingCart(){
    const history = useHistory();
    const user = useSelector(state => state.session.user);
    //const userId = user.id;
    //console.log('userId:', user.id)
    const cartItems = useSelector(state => Object.values(state.cart));
    const cart = useSelector(state => state.cart);
    console.log('cartItems', cartItems);
    console.log('cart', cart);
    const dispatch = useDispatch();

    const purchase = () => {
        cartItems.map(cartItem => (
            <div>
                {dispatch(purchaseItemsFromCart(cartItem.id))}
            </div>
        ))
        return history.push('/confirm-purchase');
    }

    return(
        <div className="cart-container">
            <h1 className="header"> Shopping Cart </h1>
            <div className="cart-item">{cartItems.map(cartItem => (
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
            <h1 className="total">{"Total:" + " " }
                <span>${cartItems.reduce((currentSum, cartItem) => {
                        const price = parseFloat(cartItem.patternPrice) + parseFloat(cartItem.fabricPrice) + parseFloat(cartItem.tailorPrice)

                       return(
                        currentSum + Math.round(price)
                       )
                }, 0)}
                </span>
            </h1>
            <button onClick={purchase}>Purchase</button>
        </div>
    )
}

export default ShoppingCart;
