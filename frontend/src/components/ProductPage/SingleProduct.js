import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useParams, useHistory } from "react-router-dom";

import { fetchPatterns } from "../../store/pattern";

import './Product.css';

function SingleProductPage(){
    const patterns = useSelector(state => state.patterns);
    const [singleItem, setSingleItem] = useState(null);
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(fetchPatterns());
    }, [dispatch])

    useEffect(()=>{
        setSingleItem(patterns[id])
    }, [patterns, id])

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
