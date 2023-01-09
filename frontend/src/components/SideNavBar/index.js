import React from 'react';
import { NavLink } from 'react-router-dom';
// import {IoSettings} from "react-icons/io"
import {AiOutlineHeart} from "react-icons/ai"
import './SideNavBar.css';
import { useSelector } from 'react-redux';
import MoreButton from './MoreButton';
import {MdHomeFilled} from "react-icons/md";
import {FiSearch} from "react-icons/fi";
import {AiOutlinePlusSquare} from "react-icons/ai";
import {CgProfile} from "react-icons/cg";




const SideNav = () => {

    const sessionUser = useSelector(state => state.session.user);
    console.log("sessionUser: ", sessionUser);
    return sessionUser ? (
        <div className='sidenav'>
            <NavLink className="side-navbar-link insta" exact to="/"><div className='logo-side-nav'>Instapound</div></NavLink>
            <NavLink title="Home" className="side-navbar-link home" exact to="/"><MdHomeFilled/><div className='side-nav-home'>Home</div></NavLink>
            {/* <NavLink title="Home" className="side-navbar-link" exact to="/"><i className="fa-sharp fa-solid fa-house">Home</i></NavLink> */}
            {/* <NavLink title="Search" className="side-navbar-link" exact to="/"><i className="fa-sharp fa-solid fa-magnifying-glass">Search</i></NavLink> */}
            <NavLink title="Search" className="side-navbar-link search" exact to="/"><FiSearch/><div className='side-nav-search'>Search</div></NavLink>
            {/* <NavLink title="Create" className="side-navbar-link" exact to="/"><i className="fa-regular fa-square-plus"></i>Create</NavLink> */}
            <NavLink title="Create" className="side-navbar-link create" exact to="/"><AiOutlinePlusSquare/><div className='side-nav-create'>Create</div></NavLink>
            <NavLink title="Notifications"className="side-navbar-link notifications" exact to="/"><AiOutlineHeart/><div className='side-nav-notifications'>Notifications</div></NavLink>
            {/* <NavLink title="Profile" className="side-navbar-link user-ico" exact to="/"><ProfileButton user={sessionUser} />Profile</NavLink> */}
            {/* <NavLink title="Profile" className="side-navbar-link user-ico" exact to="/"><CgProfile/>Profile</NavLink> */}
            <NavLink title="Profile" className="side-navbar-link user-ico profile" exact to="/"><CgProfile/><div className='side-nav-profile'>Profile</div></NavLink>
            <NavLink title="Settings" className="side-navbar-link bars settings" exact to="/"><MoreButton user={sessionUser}/><div className='side-nav-more'>More</div></NavLink>
            {/* <NavLink title="Settings" className="side-navbar-link bars" exact to="/"><i className="fa-solid fa-bars"></i>More</NavLink> */}
        </div>
    ) : <></>;
};
    
export default SideNav;

