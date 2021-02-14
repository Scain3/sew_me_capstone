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
        {console.log(tailorItem)}
        {tailorItem.id && <div className="tailor-pattern">
            <h3 className="headers">{ tailorItem.clothing}</h3>
            <img className="tailored-image" src={tailorItem.patternImage} alt={tailorItem.type} />
        </div>}

        {tailorItem.fabricId && <div className="tailor-fabric">
            <h3 className="headers">{tailorItem.fabricId && tailorItem.fabricColor + " " + tailorItem.fabricType}</h3>
            <img className="tailored-image" src={tailorItem.fabricImage} alt={tailorItem.fabricType} />

        </div>}
        {
            tailorItem.id && <div className="price_and_buttons">
                <h3 className="div_button">Price</h3>
                <div className="div_button">${tailorItem.price}</div>
                <div className="div_button"><button className="button" onClick={moveToCart}>Add To Cart</button></div>
                <div className="div_button"><button className="button" onClick={()=>{dispatch(removeTailoredProduct(tailorItem.id))}}>Remove</button></div>
            </div>
        }


    </div>
    )
}

export default Tailor;
