import React from "react";
import { useParams } from "react-router-dom";
import UserShowPostItem from "./UserShowPostItem";
import { useSelector} from "react-redux";
import { fetchUser, getUser } from "../../store/user";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import './UserShowPost.css'
import { getPosts } from "../../store/post";
import {CgProfile} from "react-icons/cg"

const UserShow = () => {
  const dispatch = useDispatch();
  let {userId} = useParams();
  let user = useSelector(getUser(userId));
  let posts = useSelector(getPosts);
  console.log("posts: ", posts);
  
  useEffect(() => {
    dispatch(fetchUser(userId));
  }, [dispatch, userId]);
  
  if (!user) return null;
  console.log("user inside component: ", user);
  return (
    <div className="user-show-container">

      <div className="user-show-header">
        <div className="user-profile-pic">
        {user.profilePhotoUrl ? <img src={user.profilePhotoUrl} alt="profile"  /> : <i className="fa-regular fa-user cg-profile"></i>}
          {/* {user.profilePhotoUrl ? <img src={user.profilePhotoUrl} alt="profile"  /> : <CgProfile className="cg-profile"/>} */}
          {/* <img src={user.profilePhotoUrl ? user.profilePhotoUrl : } /> */}
        </div>
        
        <div className="user-info-rows-container">
          <div className="first-row">
            <div className="user-username">
              {user.username ? user.username : "Anonymous"}
            </div>

            <div className="edit-button-user">
              <button>Edit Profile</button>
            </div>

            <div className="setting-button-user">
              <button>Settings</button>
            </div>
          </div>

          <div className="second-row">
            <div className="posts-number"><span>Posts</span></div>
            <div className="followers-number"><span>Followers</span></div>
            <div className="following-number"><span>Following</span></div>
          </div>

          <div className="third-row">
            <div className="user-name">
              {user.name ? user.name : "Anonymous"}
            </div>

            <div className="user-bio">
              {user.bio ? user.bio : ""}
            </div>
          </div>
        </div>

      </div>

      <div className="line"></div>

      <div>
        <div className="user-show-body"> 

          <div className="user-show-photos-container">
            {posts.map(post => (<UserShowPostItem key={post.id} post={post}/>))}
          </div>

        </div>
      </div>

    </div>
  );
}

export default UserShow;