import React from 'react';
import { NavLink } from 'react-router-dom';
import {AiOutlineHeart} from "react-icons/ai"
import './SideNavBar.css';
import { useSelector } from 'react-redux';
import MoreButton from './MoreButton';
import {GrHomeRounded} from "react-icons/gr";
import {FiSearch} from "react-icons/fi";
import {AiOutlinePlusSquare} from "react-icons/ai";
import {CgProfile} from "react-icons/cg";




const SideNav = () => {
    const sessionUser = useSelector(state => state.session.user);

    const openModal = (e) => {
        e.preventDefault();
        let modal = document.getElementById('post-create-modal');
        modal.style.display = 'flex';
    }

    return sessionUser ? (
        <div className='sidenav'>
            <NavLink className="side-navbar-link insta" exact to="/feed/posts"><div className='logo-side-nav'>Instapound</div></NavLink>
            <NavLink title="Home" className="side-navbar-link home" exact to="/feed/posts"><GrHomeRounded/><div className='side-nav-home'>Home</div></NavLink>
            <NavLink title="Search" className="side-navbar-link search" exact to="/feed/posts"><FiSearch/><div className='side-nav-search'>Search</div></NavLink>
            <a title="Create" onClick={openModal} className="side-navbar-link create"><AiOutlinePlusSquare/><div className='side-nav-create'>Create</div></a>
            {/* <NavLink title="Create" onClick={openModal} className="side-navbar-link create" exact to="/"><AiOutlinePlusSquare/><div className='side-nav-create'>Create</div></NavLink> */}
            <NavLink title="Notifications"className="side-navbar-link notifications" exact to="/feed/posts"><AiOutlineHeart/><div className='side-nav-notifications'>Notifications</div></NavLink>
            <NavLink title="Profile" className="side-navbar-link user-ico profile" exact to={`/users/${sessionUser.id}`}><CgProfile/><div className='side-nav-profile'>Profile</div></NavLink>
            <NavLink title="Settings" className="side-navbar-link bars settings" exact to="/feed/posts"><MoreButton user={sessionUser}/><div className='side-nav-more'>More</div></NavLink>
        </div>
    ) : <></>;
};
    
export default SideNav;

