import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import './Navigation.css';
import SearchBar from '../Search/SearchBar';
import ShoppingCartIcon from '../ShoppingCart/ShoppingIcon';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className="icon-holder">
        <div className="cart-icon">
          <ShoppingCartIcon />
        </div>
        <div className="icons">
          <ProfileButton  user={sessionUser} />
        </div>
      </div>
    );
  } else {
    sessionLinks = (
      <span className="auth-links">
        <LoginFormModal />
        <NavLink className="signup" to="/signup">Sign Up</NavLink>
      </span>
    );
  }

  return (
      <ul className='nav-container'>
        <li className='link-container'>
          <span className='search-container'>
            <SearchBar />
          </span>
          <NavLink className="home" exact to="/">Sew Me</NavLink>
          {isLoaded && sessionLinks}
        </li>
      </ul>
  );
}

export default Navigation;
