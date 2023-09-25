import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, fetchUser } from "../../store/user";
import { createFollow } from "../../store/follow";
import { useEffect } from "react";
import "./SuggestedUser.css";
import FollowFromSuggested from "../Follow/FollowFromSuggested";
import { NavLink } from "react-router-dom";


const SuggestedUsers = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users ? Object.values(state.users) : []);
    const sessionUser = useSelector((state) => state.session.user);

    useEffect(() => {
        dispatch(fetchUsers("suggestions"))
    }, [dispatch])

    return sessionUser ? (
        <div className="suggested-user-container">
            <div className="suggested-user-header">
                <h3>Suggestions for you</h3>
                <br/>
            </div>
            <div className="suggested-user-list">
                {users && users.map(user => {
                    return user.id !== sessionUser.id && !user.followers.includes(sessionUser.id) ? (
                        <div className="suggested-user-item" key={user.id}>
                            <div className="suggested-user-item-left">
                                <NavLink className="user-show-profile-link" exact to={`/users/${user.id}`}>{user.profilePictureUrl ? <img src={user.profilePictureUrl} alt="profile"  /> : <></>}</NavLink>
                                <div className="suggested-user-item-left-info">
                                    <p>{ user.username }</p>
                                </div>
                                <div className="suggested-user-item-right">
                                    <br/>
                                    <FollowFromSuggested user={user}/>
                                </div>
                               
                            </div>
                        </div>
                       
                    ) : <></>
                })}
            </div>
        </div>
    ) : <></>
}
export default SuggestedUsers;


