import React from "react";
import { useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import { getUser } from "../../store/user";
import "./follow.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../store/user";


const Followers = () => {
    let {userId} = useParams();
    let user = useSelector(getUser(userId));
    let sessionUser = useSelector(state => state.session.user);
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUser(userId))
    }, [])

    const closeModalFollows = (e) => {
        e.preventDefault();
        let modal = document.getElementById('follows-modal-followers');
        modal.style.display = 'none';
    }

    return (
        <div className="modal-followers-users" id="follows-modal-followers">
            <div className="modal-followers-users-header">
            <h1 className="followees-title">Users that follow you</h1>
            {user && user.followers.map(follower => {
                return (
                    <div className="followees-container">
                        <img className="followee-show-profile-link" src={follower.profilePictureUrl} alt="profile"  /> 
                        <h2 className="followee-username">{follower.username}</h2>
                    </div>
                ) 
            })}
            <button id="modal-close-button-follow" className='modal-close-button-followees' onClick={closeModalFollows}>Close Post</button>
            </div>
        </div>
    )
}

export default Followers;