import { useHistory } from "react-router-dom";
import './ShoppingCart.css';

function ShoppingCartIcon(){
    const history = useHistory();
    return(
        <i className="fas fa-shopping-cart" onClick={()=> history.push(`/cart`)}></i>
    )
}

export default ShoppingCartIcon;
