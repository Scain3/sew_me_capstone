import { useSelector} from "react-redux";
import './ShoppingCart.css';

function ShoppingCart(){
    const cartItems = useSelector(state => state.cart);

    return(
        <h1> Hello World </h1>
    )
}

export default ShoppingCart;
