import React from 'react';



const UserShowPostItem= ({post}) => {
    return (
        <div className='user-show-photos-container-item'>
            <img className="user-show-photos-container-item-img" src={`${post.photoUrl}`}></img>
        </div>
    )
}

export default UserShowPostItem;