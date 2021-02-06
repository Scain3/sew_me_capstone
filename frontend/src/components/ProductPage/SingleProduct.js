import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useParams, useHistory } from "react-router-dom";

import { fetchProducts } from "../../store/product";

import './Product.css';

function SingleProductPage(){
    const products = useSelector(state => state.products);
    const [singleItem, setSingleItem] = useState(null);
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(fetchProducts());
    }, [dispatch])

    useEffect(()=>{
        setSingleItem(products[id])
    }, [products, id])

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
                <div className="pattern-number">{singleItem.patternNumber}</div>
                <div className="pattern-company">{singleItem.patternCompany}</div>
                <div className="pattern-price">${singleItem.price}</div>
                <div><button>Add To Cart</button></div>
                <div><button>Tailor This!</button></div>
            </div>
        </div>
    )




}

export default SingleProductPage;
