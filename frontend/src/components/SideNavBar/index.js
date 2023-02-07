import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {AiOutlineHeart} from "react-icons/ai"
import './SideNavBar.css';
import { useSelector } from 'react-redux';
import MoreButton from './MoreButton';
import {GrHomeRounded} from "react-icons/gr";
import {FiSearch} from "react-icons/fi";
import {AiOutlinePlusSquare} from "react-icons/ai";
import {CgProfile} from "react-icons/cg";
import { useDispatch } from 'react-redux';
import { getUser } from '../../store/user';
import {AiFillLinkedin} from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'
import {FaUserFriends} from 'react-icons/fa'




const SideNav = () => {
    const sessionUser = useSelector(state => state.session.user);
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();

    const openModal = (e) => {
        e.preventDefault();
        let modal = document.getElementById('post-create-modal');
        modal.style.display = 'flex';
    }

    const openFollowsModal = (e) => {
        e.preventDefault();
        let modal = document.getElementById('follows-modal');
        modal.style.display = 'flex';
    }


    return sessionUser ? (
        <div>
            <div className='sidenav'>
                <button className="side-navbar-link insta"><div className='logo-side-nav'>Instapound</div></button>
                <NavLink className="side-navbar-link home" exact to="/feed/posts"><GrHomeRounded/><div className='side-nav-home'>Home</div></NavLink>
                
                {/* <form className="side-form-search search" onSubmit={handleSubmit}><FiSearch/>
                    <div className='side-nav-search'>Search</div>
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}></input>
                </form> */}
                {/* <NavLink className="side-navbar-link home" exact to="/feed/posts"><FiSearch/><div className='side-nav-search'>Search</div></NavLink> */}
                
                <a title="Create" onClick={openModal} className="side-navbar-link create"><AiOutlinePlusSquare/><div className='side-nav-create'>Create</div></a>
                <a title="follows" onClick={openFollowsModal} className="side-navbar-link follows" exact to="/feed/posts"><FaUserFriends/><div className='side-nav-notifications'>Follows</div></a>
                <NavLink title="Profile" className="side-navbar-link user-ico profile" exact to={`/users/${sessionUser.id}`}>{sessionUser?.profilePictureUrl ? <img className='profile-nav-bar' src={sessionUser?.profilePictureUrl} alt="profile"  /> : <CgProfile/>}<div className='side-nav-profile'>Profile</div></NavLink>
                
                
                <button title="Settings" className="side-navbar-link bars settings"><MoreButton user={sessionUser}/><div className='side-nav-more'>More</div></button>

            
            <div className='icons-for-links'>
                <a href="https://www.linkedin.com/in/andrea-cano-gisbert-4402151b8/" target="_blank" rel="noreferrer">
                    <i className="linkedin-icon"><AiFillLinkedin/></i>
                </a>
                <a href="https://github.com/andreacanog" target="_blank">
                    <i className="github-icon"><BsGithub/></i>
                </a>
            </div>
            </div>
        </div>
    ) : <></>;
};
    
export default SideNav;