import React from 'react';
import { NavLink } from 'react-router-dom';
import {IoSettings} from "react-icons/io"
import SideNavBar from './SideNavBar.css';


const SideNav = (navInfo) => {
    return (
        <div className='sidenav'>
            <NavLink className="side-navbar-link" exact to="/"><i className="fa-solid fa-brands fa-instagram"></i></NavLink>
            <NavLink title="Home" className="side-navbar-link" exact to="/"><i className="fa-sharp fa-solid fa-house"></i></NavLink>
            <NavLink title="Search" className="side-navbar-link" exact to="/"><i className="fa-sharp fa-solid fa-magnifying-glass"></i></NavLink>
            <NavLink title="Create" className="side-navbar-link" exact to="/"><i className="fa-regular fa-square-plus"></i></NavLink>
            <NavLink title="Notifications"className="side-navbar-link" exact to="/"><i className="fa-regular fa-heart"></i></NavLink>
        </div>
    );
};
    
export default SideNav;

