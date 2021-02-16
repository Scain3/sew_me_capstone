import { useEffect, useDispatch } from "react";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";


function Coats(){
    const patterns = useSelector(state => state.patterns);


    if( patterns.patternType !== "coat"){
        return null;
    }

    const coats = patterns;

    return(
        <h1>
            <div>
                <div>
                    {console.log(coats)}
                </div>
                {

                    coats.map((coat, index) => (
                        <div>
                            <h1>Hello World</h1>


                        <div>
                            {coat.patternCompany}
                        </div>

                        </div>


                    ))
                }
            </div>
        </h1>
    )




}

export default Coats;
