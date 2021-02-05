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
        <div>
            <div>
                <img className="main-product__image" src={singleItem.image1} alt={singleItem.patternNumber} />
                <div>
                    <img src= {singleItem.image2} alt={singleItem.patternNumber} />
                    <img src={singleItem.image3} alt={singleItem.patternNumber} />
                    <img src={singleItem.image4} alt={singleItem.patternNumber} />
                </div>
            </div>
            <div>{singleItem.patternCompany}</div>
            <div>{singleItem.patternNumber}</div>
        </div>
    )




}

export default SingleProductPage;
