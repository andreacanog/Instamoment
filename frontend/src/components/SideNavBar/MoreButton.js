import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import {GoThreeBars} from 'react-icons/go';
import { Redirect, useHistory } from "react-router-dom";


function MoreButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  let history = useHistory();
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const HandleLogout = (e) => {
    return dispatch(sessionActions.logout())
  };


  return user ? (
    <div className="more-button-container" onClick={openMenu}>
      {/* <button className='more-button' onClick={openMenu}>
        <div> */}
          <GoThreeBars/>
        {/* </div>
      </button> */}
      {showMenu && (
        <ul className="profile-dropdown">
          <li>
            <button onClick={HandleLogout}>Log Out</button>
          </li>
        </ul>
      )}
    </div>
  ) : <Redirect to="/login"/>;
}


export default MoreButton;