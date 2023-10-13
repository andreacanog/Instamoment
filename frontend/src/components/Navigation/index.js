import ProfileButton from '../SideNavBar/ProfileButton';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from 'react';
import './Navigation.css';


const Navigation = () => {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {

    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );

  } else {
    sessionLinks = (
      <>
        {/* <NavLink to="/login">Log In</NavLink> */}

      </>
    );
  }

  return (
    <header>
      <nav>
        <NavLink className="logo-home-link" exact to="/"></NavLink>
        <ul>{sessionLinks}</ul> 
      </nav>
    </header>
  );
}

export default Navigation;