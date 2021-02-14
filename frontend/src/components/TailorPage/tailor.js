import { useSelector, useDispatch} from "react-redux";
import {removeTailoredProduct} from "../../store/tailor";

import {useHistory} from "react-router-dom";
import {addItemToCart} from "../../store/cart";

import './Tailor.css';

function Tailor(){
    const tailorItem = useSelector(state => state.tailor);
    const user = useSelector(state => state.session.user);
    const cartId = useSelector(state => state.session.cartId);
    const history = useHistory();
    const dispatch = useDispatch();
    console.log(tailorItem);

    const moveToCart = () => {
        if(!user){
            return history.push('/login');
        }
        const tailorId = tailorItem.id;
        const tailorType = tailorItem.clothing;
        const fabricType = tailorItem.fabricType;
        const tailorColor = tailorItem.fabricColor;
        const tailorImage = "https://images.pexels.com/photos/461035/pexels-photo-461035.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
        const tailorPrice = tailorItem.price;
        dispatch(addItemToCart({tailorId, tailorType, fabricType, tailorColor, tailorImage, tailorPrice, cartId}));
        history.push('/cart');
    }


    return(
    <div className="tailor-container">
        <div className="tailor-pattern">
            <div>{tailorItem.type}</div>
            <img className="tailored-image" src={tailorItem.patternImage} alt={tailorItem.type} />
            <div>{tailorItem.price}</div>
            <div><button onClick={()=>{dispatch(removeTailoredProduct(tailorItem.id))}}>Remove</button></div>
        </div>

        <div className="tailor-fabric">
            <div>{tailorItem.fabricColor}</div>
            <img className="tailored-image" src={tailorItem.fabricImage} alt={tailorItem.fabricType} />
            <div><button onClick={moveToCart}>Add To Cart</button></div>
        </div>

    </div>
    )
}

export default Tailor;
