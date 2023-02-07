import React from "react";


const follows = () => {
    const users = useSelector(state => state.users ? Object.values(state.users) : []);
    const sessionUser = useSelector((state) => state.session.user);

    return (
        <div className="modal-follows">
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
    )
}

export default follows