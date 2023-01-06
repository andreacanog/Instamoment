import React from 'react';
import { NavLink } from 'react-router-dom';
import {IoSettings} from "react-icons/io"
import {AiOutlineHeart} from "react-icons/ai"
import SideNavBar from './SideNavBar.css';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';



const SideNav = (navInfo) => {

    const sessionUser = useSelector(state => state.session.user);

    return sessionUser ? (
        <div className='sidenav'>
            <NavLink className="side-navbar-link" exact to="/"><i className="fa-solid fa-brands fa-instagram"></i></NavLink>
            <NavLink title="Home" className="side-navbar-link" exact to="/"><i className="fa-sharp fa-solid fa-house"></i></NavLink>
            <NavLink title="Search" className="side-navbar-link" exact to="/"><i className="fa-sharp fa-solid fa-magnifying-glass"></i></NavLink>
            <NavLink title="Create" className="side-navbar-link" exact to="/"><i className="fa-regular fa-square-plus"></i></NavLink>
            <NavLink title="Notifications"className="side-navbar-link" exact to="/"><AiOutlineHeart/></NavLink>
            <NavLink title="Profile" className="side-navbar-link user-ico" exact to="/"><ProfileButton user={sessionUser} /></NavLink>
            <NavLink title="Settings" className="side-navbar-link bars" exact to="/"><i className="fa-solid fa-bars"></i></NavLink>
        </div>
    ) : <></>;
};
    
export default SideNav;

