import { useEffect, useDispatch } from "react";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";


function Coats(){
    const patterns = useSelector(state => Object.values(state.patterns));
    console.log("patterns", patterns);
    console.log("patterns", Object.values(patterns));
    const {id} = useParams();


    // if( patterns.patternType !== "coat"){
    //     return null;
    // }

    const coats = patterns.filter((pattern) => pattern.patternType === "coat" )
    console.log(coats)
    //console.log("id", patterns[id].id);

    return(
      <div>
          {coats.map((coat)=> (
              <div>{coat.patternCompany}</div>
          ))}
      </div>
    )




}

export default Coats;
