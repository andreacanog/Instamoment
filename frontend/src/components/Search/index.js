import React from "react";


const SearchUser = () => {

    return (
        <>
        <form>

        </form>
        <div className='search-user-container'>
            <img className="search-user-container-img" src={`${user.profilePhotoUrl}`}></img>
            <div className='search-user-container-username'>{user.username}</div>
        </div>
        </>
    )
}