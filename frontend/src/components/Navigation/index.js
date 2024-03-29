import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import './Navigation.css';
import SearchBar from '../Search/SearchBar';
import SecondNav from '../SecondNav/SecondNav';
import {login} from '../../store/session';


function Navigation({ isLoaded }){
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [setErrors] = useState([]);

  const demoLogin = () => {
    const email = 'demo@user.io';
    const password = 'password';
    return dispatch(login({email, password}))
        .catch((res) => {
            if (res.data && res.data.errors) setErrors(res.data.errors);
        });
  }

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className="icon-holder">
        {/* <div className="cart-icon">
          <ShoppingCartIcon />
        </div> */}
        <div className="icons">
          <ProfileButton  user={sessionUser} />
        </div>
      </div>
    );
  } else {
    sessionLinks = (
      <span className="auth-links">
        <span className=".demo-container">
          <button className="Demo-login" onClick={demoLogin}>Demo Login</button>
        </span>
        <LoginFormModal />
        <SignupFormModal />
        {/* <NavLink className="signup" to="/signup">Sign Up</NavLink> */}
      </span>
    );
  }




  return (
    <div>
      <ul className='nav-container'>
        <li className='link-container'>
          <span className='search-container'>
            <SearchBar />
          </span>
          <div className="faq-div"><NavLink className="faq-link" to='/FAQ'>FAQ</NavLink></div>
          <NavLink className="home" exact to="/">Sew Me</NavLink>
          {isLoaded && sessionLinks}
        </li>
      </ul>
      <SecondNav />
    </div>
  );
}

export default Navigation;
