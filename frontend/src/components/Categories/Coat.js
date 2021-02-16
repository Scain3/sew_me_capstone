import { useEffect, useDispatch } from "react";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {fetchPatterns} from "../../store/pattern";

function Coats(){
    const patterns = useSelector(state => state.patterns);
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(fetchPatterns())
    }, [dispatch])

    const coats = patterns[id].patternType === "coat";

    const coat = Object.values(coats);
        return(
            <div>
                {
                    coat.map((eachCoat, index) => (
                        <div>
                            
                        </div>

                    ))
                }
            </div>
        )


}

export default Coats;
