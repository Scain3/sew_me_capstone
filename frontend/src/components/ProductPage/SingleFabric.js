import {useEffect} from "react";

import { useDispatch, useSelector} from "react-redux";

import {useHistory, useParams} from "react-router-dom";
import {addItemToCart} from "../../store/cart";
import {fetchSingleFabric} from "../../store/fabric";



import {updateTailoredProduct} from "../../store/tailor";

function SingleFabricPage(){
    const fabrics = useSelector(state => state.fabrics);
    const user = useSelector(state => state.session.user);
    const cartId = useSelector(state => state.session.cartId);
    const tailor = useSelector(state => state.tailor);
    const {id} = useParams();
    const singleItem = fabrics[id];
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(()=> {
        if(singleItem) return
        dispatch(fetchSingleFabric(id));
    }, [id, dispatch, singleItem])


    const handleClick = () => {
        if(!user){
            return history.push('/login');
        }
        const fabricId = fabrics[id].id;

        dispatch(updateTailoredProduct(fabricId, user.id, tailor.id));
        history.push('/tailor')
    }

    const moveToCart = () => {
        if(!user){
            return history.push('/login');
        }
        const fabricId = fabrics[id].id;
        const fabricColor = fabrics[id].color;
        const fabricType = fabrics[id].type;
        const fabricImage = fabrics[id].image;
        const fabricPrice = fabrics[id].price;
        dispatch(addItemToCart({fabricId, fabricColor, fabricType, fabricImage, fabricPrice, cartId}));
        history.push('/cart');
    }



    if(!singleItem){
        return null;
    }

    return(
        <div className="single-product__container">
            <img className="main-product__image" src={singleItem.image} alt={singleItem.type} />
            <div className="single-product__description">
                <div className="fabric-name">
                    <span className="product-header fabric-color" >{singleItem.color}</span>
                    <span className="product-header fabric-type" >{singleItem.type}</span>
                </div>
                <div className="single-price">${singleItem.price}</div>
                <div><button className= "button" onClick={moveToCart}>Add To Cart</button></div>
                <div><button className= "button" onClick={handleClick}>Tailor This!</button></div>
            </div>
        </div>
    )
}

export default SingleFabricPage;
