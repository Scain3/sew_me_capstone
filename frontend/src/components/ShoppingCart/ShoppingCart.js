import { useSelector} from "react-redux";
import './ShoppingCart.css';

function ShoppingCart(){
    const cartItems = useSelector(state => Object.values(state.cart));
    const fabricItems = useSelector(state => state.fabrics);
    const patternItems = useSelector(state => state.patterns);

    return(
        <h1> Hello World </h1>
    )
}

export default ShoppingCart;
