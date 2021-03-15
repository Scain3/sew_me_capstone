import {useSelector} from "react-redux";

function ConfirmPurchase(){
    const user = useSelector(state => state.session.user);
    console.log('user', user);
    if(!user){
        return null
    }
    return(
        <div className='confirm-purchase-div'>
            <div className='confirm-purchase-greeting'>{`Hey ${user.username}`}</div>
            <h1 className='confirm-purchase-heading'>Your Purchase has been Confirmed!</h1>
            <p className='confirm-purchase-paragraph'>Thanks for shopping! Your order hasn't shipped yet, but we'll send you an email when it does.</p>
        </div>
    )
}

export default ConfirmPurchase;
