import React from "react";

const UserShow = () => {
  return (
    <div className="user-show-container">

      <div className="user-show-header">
        <div className="user-profile-pic">
          <img src={user.id ? user.profilePhotoUrl : ""} alt="profile" />
        </div>

        <div className="user-username">
          {user.username ? user.username : "Anonymous"}
        </div>

        <div className="posts-number"><span>Posts</span></div>
        <div className="followers-number"><span>Followers</span></div>
        <div className="following-number"><span>Following</span></div>

        <div className="edit-button">
          <button>Edit Profile</button>
        </div>

        <div className="setting-button">
          <button>Settings</button>
          </div>

        <div className="user-name">
          {user.name ? user.name : "Anonymous"}
        </div>

        <div className="user-bio">
          {user.bio ? user.bio : "Anonymous"}
        </div>

      </div>

      <div></div>

      <div>
        <div className="user-show-body"> 

          <div className="post-index-item-image-container">
              <img className="post-index-item-image" src={user.posts.photoUrl ? user.posts.photoUrl : "https://i.imgur.com/8Q9QY7C.png"} alt="post" />
          </div>

        </div>
      </div>

    </div>
  );
}