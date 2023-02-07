import React from "react";
import "./follow.css"


const follows = () => {
    const users = useSelector(state => state.users ? Object.values(state.users) : []);
    const sessionUser = useSelector((state) => state.session.user);

    return (
        <div className="modal-following-users" id="follows-modal">
            <div className="modal-following-users-header">
            <h1>Users that you follow</h1>
            {users.map(user => {
                return user.id !== sessionUser.id ? (
                    <div>
                        <NavLink className="user-show-profile-link" exact to={`/users/${user.id}`}>{user.profilePictureUrl ? <img src={user.profilePictureUrl} alt="profile"  /> : <></>}</NavLink>
                        <h2>{user.username}</h2>
                    </div>
                ) : <></>
            })}
            </div>
        </div>
    )
}

export default follows