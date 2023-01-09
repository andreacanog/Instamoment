import React from 'react';
import { NavLink } from 'react-router-dom';
// import {IoSettings} from "react-icons/io"
import {AiOutlineHeart} from "react-icons/ai"
import './SideNavBar.css';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';




const SideNav = () => {

    const sessionUser = useSelector(state => state.session.user);
    console.log("sessionUser: ", sessionUser);
    return sessionUser ? (
        <div className='sidenav'>
            <NavLink className="side-navbar-link" exact to="/"><i className="fa-solid fa-brands fa-instagram"></i>Instapound</NavLink>
            <NavLink title="Home" className="side-navbar-link" exact to="/"><i className="fa-sharp fa-solid fa-house">Home</i></NavLink>
            <NavLink title="Search" className="side-navbar-link" exact to="/"><i className="fa-sharp fa-solid fa-magnifying-glass">Search</i></NavLink>
            <NavLink title="Create" className="side-navbar-link" exact to="/"><i className="fa-regular fa-square-plus"></i>Create</NavLink>
            <NavLink title="Notifications"className="side-navbar-link" exact to="/"><AiOutlineHeart/>Notifications</NavLink>
            <NavLink title="Profile" className="side-navbar-link user-ico" exact to="/"><ProfileButton user={sessionUser} />Profile</NavLink>
            <NavLink title="Settings" className="side-navbar-link bars" exact to="/"><i className="fa-solid fa-bars"></i>More</NavLink>
        </div>
    ) : <></>;
};
    
export default SideNav;

