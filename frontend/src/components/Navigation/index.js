import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import SearchBar from '../Search/SearchBar';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
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
