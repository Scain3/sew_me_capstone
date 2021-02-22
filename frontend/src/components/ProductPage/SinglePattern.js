import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useParams, useHistory } from "react-router-dom";
import { addItemToCart } from "../../store/cart";

import { fetchPatterns } from "../../store/pattern";

import {tailorProductInfo} from "../../store/tailor";

import './Product.css';

function SinglePatternPage(){
    const patterns = useSelector(state => state.patterns);
    const user = useSelector(state => state.session.user);
    const cartId = useSelector(state => state.session.cartId);
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    // useEffect(()=> {
    //     dispatch(fetchPatterns());
    // }, [dispatch])

    const handleClick = () => {
        if(!user){
            return history.push('/login');
        }
        const patternId = patterns[id].id;
        dispatch(tailorProductInfo(patternId, user.id))
        history.push('/tailor')
    }

    const moveToCart = () => {
        if(!user){
            return history.push('/login');
        }
        const patternId = patterns[id].id;
        const patternCompany = patterns[id].patternCompany;
        const patternNumber = patterns[id].patternNumber;
        const patternType = patterns[id].type;
        const patternImage = patterns[id].image1;
        const patternPrice = patterns[id].price;

        dispatch(addItemToCart({patternId, patternCompany, patternNumber, patternType, patternImage, patternPrice, cartId}));
        history.push('/cart');
    }

    const singleItem = patterns[id];

    if(!singleItem){
        return null;
    }

    return(
        <div className="single-product__container">
            <div>
                <img className="main-product__image" src={singleItem.image1} alt={singleItem.patternNumber} />
                <div className="sub-img__container">
                    <div className="sub-images"><img className="img"  src={singleItem.image2} alt={singleItem.patternNumber} /></div>
                    <div className="sub-images"><img className="img" src={singleItem.image3} alt={singleItem.patternNumber} /></div>
                    <div className="sub-images"><img className="img" src={singleItem.image4} alt={singleItem.patternNumber} /></div>
                </div>
            </div>
            <div className="single-product__description">
                <div className="product-header">{singleItem.patternNumber}</div>
                <div className="pattern-company">{singleItem.patternCompany}</div>
                <div className="price">${singleItem.price}</div>
                <div><button className="button" onClick={moveToCart}>Add To Cart</button></div>
                <div><button className="button" onClick={handleClick}>Tailor This!</button></div>
            </div>
        </div>
    )




}

export default SinglePatternPage;
