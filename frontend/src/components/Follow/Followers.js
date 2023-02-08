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
        let modal = document.getElementById('modal-close-button-follow');
        modal.style.display = 'none';
    }

    return (
        <div className="modal-followers-users" id="follows-modal-followers">
            <div className="modal-followers-users-header">
            <h1>Users that you follow</h1>
            {user && user.followers.map(follower => {
                return follower.id !== sessionUser.id ? (
                    <div>
                        <NavLink className="follower-show-profile-link" exact to={`/users/${follower.id}`}>{follower.profilePictureUrl ? <img className="follower-show-profile-link" src={follower.profilePictureUrl} alt="profile"  /> : <></>}</NavLink>
                        <h2>{follower.username}</h2>
                    </div>
                ) : <></>
            })}
            <button id="modal-close-button-follow" className='modal-close-button' onClick={closeModalFollows}>Close Post</button>
            </div>
        </div>
    )
}

export default Followers;