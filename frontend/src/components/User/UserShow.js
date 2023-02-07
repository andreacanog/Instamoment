import React from "react";
import { Redirect, useParams, Route } from "react-router-dom";
import UserShowPostItem from "./UserShowPostItem";
import { useSelector} from "react-redux";
import { fetchUser, getUser } from "../../store/user";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import './UserShowPost.css'
import { getPosts } from "../../store/post";
import {CgProfile} from "react-icons/cg"
import {RiUserUnfollowLine} from "react-icons/ri"
import { NavLink } from "react-router-dom";
import {FiSettings} from "react-icons/fi"
import FollowButton from "../Follow";


const UserShow = () => {
  const dispatch = useDispatch();
  let {userId} = useParams();
  let user = useSelector(getUser(userId));
  let currentUser = useSelector(state => state.session.user);
  let posts = useSelector(getPosts);

  
  useEffect(() => {
    dispatch(fetchUser(userId)); 
  }, [dispatch, user]);
  
  if (!user) return null;

 
  
  return currentUser ? (
    <div className="user-show-container">

      <div className="user-show-header">

        <div className="user-profile-pic">
        {user.profilePictureUrl ? <img src={user.profilePictureUrl} alt="profile"  /> : <i className="fa-regular fa-user cg-profile"></i>}
        </div>
        
        <div className="user-info-rows-container">

          <div className="first-row">
            <div className="user-username">
              {user.username ? user.username : "Anonymous"}
            </div>

            <div className="edit-follow-button-user">
              {currentUser.id !== user.id ? <FollowButton user={user}/> : <></>}
            </div>

            {/* <div className="setting-button-user">
            {currentUser.id === user.id ?  <button className="settings-profile-button"><FiSettings/></button> : <button className="more-profile-button"><i className="fa-solid fa-ellipsis"></i></button>}
            </div> */}

          </div>

          <div className="second-row">
            <div className="numbers-second-row">{user.postIds.length}</div><div className="names-second-row"> Posts</div>
            <div className="numbers-second-row">{user.followerIds.length}</div><div className="names-second-row"> Followers</div>
            <div className="numbers-second-row">{user.followeeIds.length}</div><div className="names-second-row"> Following</div>
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

      {/* <div className="line"></div> */}

      <div>
        <div className="user-show-body"> 

          <div className="user-show-photos-container">
            {posts.map(post => (<UserShowPostItem key={post.id} post={post}/>))}
          </div>

        </div>
      </div>

    </div>
    ) : (<Redirect to="/login" ></Redirect>);

}

export default UserShow;