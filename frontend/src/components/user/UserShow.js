import React from "react";
import { useParams } from "react-router-dom";
import UserShowPostItem from "./UserShowPostItem";
import { useSelector} from "react-redux";
import { fetchUser, getUser } from "../../store/user";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const UserShow = () => {
  const dispatch = useDispatch();
  let {userId} = useParams();
  const user = useSelector(getUser(userId));

  useEffect(() => {
    dispatch(fetchUser(userId));
  }, [dispatch, userId]);

  return (
    <div className="user-show-container">

      <div className="user-show-header">
        <div className="user-profile-pic">
          <img src={user.id ? user.profilePhotoUrl : ""} alt="profile" />
        </div>

        <div className="user-username">
          {user.username ? user.username : "Anonymous"}
        </div>

        <div className="edit-button">
          <button>Edit Profile</button>
        </div>

        <div className="setting-button">
          <button>Settings</button>
        </div>

        <div className="posts-number"><span>Posts</span></div>
        <div className="followers-number"><span>Followers</span></div>
        <div className="following-number"><span>Following</span></div>

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
            {user.posts.map(post => (<UserShowPostItem key={post.id} post={post} user={user} />))}
          </div>

        </div>
      </div>

    </div>
  );
}

export default UserShow;