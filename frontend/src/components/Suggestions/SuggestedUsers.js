import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../store/user";
import { createFollow } from "../../store/follow";
import { useEffect } from "react";
import "./SuggestedUser.css";
import FollowButton from "../Follow";
import { NavLink } from "react-router-dom";


const SuggestedUsers = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users ? Object.values(state.users) : []);
    const sessionUser = useSelector((state) => state.session.user);

    const handleFollow = (e) => {
        e.preventDefault();
        const follow = { followerId: sessionUser.id, followedId: e.target.value }
        dispatch(createFollow(follow))
    }

    useEffect(() => {
        dispatch(fetchUsers("suggestions"))
    }, [dispatch])

    return (
        <div className="suggested-user-container">
            <div className="suggested-user-header">
                <h3>Suggestions for you</h3>
                <br/>
                {/* <p>See All</p> */}
            </div>
            <div className="suggested-user-list">
                {users && users.map(user => {
                    return (
                        <div className="suggested-user-item" key={user.id}>
                            <div className="suggested-user-item-left">
                                <NavLink className="user-show-profile-link" exact to={`/users/${user.id}`}>{user.profilePictureUrl ? <img src={user.profilePictureUrl} alt="profile"  /> : <></>}</NavLink>
                                {/* <img src={user.profilePictureUrl} alt="user-profile-pic" className="profile-pic-suggestions"/> */}
                                <div className="suggested-user-item-left-info">
                                    <p>{user !== sessionUser ? user.username : <></>}</p>
                                </div>
                                <div className="suggested-user-item-right">
                                    <br/>
                                    <FollowButton user={user}  />
                                </div>
                               
                            </div>
                        </div>
                       
                    )
                })}
            </div>
        </div>
    )
}
export default SuggestedUsers;


