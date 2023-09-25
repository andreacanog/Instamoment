import React from "react";
import { Redirect, useParams, Route } from "react-router-dom";
import UserShowPostItem from "./UserShowPostItem";
import { useSelector} from "react-redux";
import { fetchUser, getUser } from "../../store/user";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import './UserShowPost.css'
import { getPosts } from "../../store/post";
import FollowButton from "../Follow";


const UserShow = () => {
  const dispatch = useDispatch();
  let {userId} = useParams();
  let user = useSelector(getUser(userId));
  let currentUser = useSelector(state => state.session.user);
  let posts = useSelector(getPosts);

  
  useEffect(() => {
    dispatch(fetchUser(userId)); 
  },[dispatch, user]);


  const handleClick = (e) => {
    e.preventDefault();

    if (e.target.name === 'followers') {
      let modal = document.getElementById('follows-modal-followers');
      modal.style.display = 'flex';
    } else if (e.target.name === 'following') {

      let modal = document.getElementById('follows-modal-followees');
      modal.style.display = 'flex';
  
    }
  }
  
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

          </div>

          <div className="second-row">
            <div className="numbers-second-row">{user.postIds.length}</div><div className="names-second-row"> Posts</div>
            <div className="numbers-second-row">{user.followerIds.length}</div><div className="names-second-row "><button className="follow-button-usershow" onClick={handleClick} name="followers"> Followers</button></div>
            <div className="numbers-second-row">{user.followeeIds.length}</div><div className="names-second-row "><button className="follow-button-usershow" onClick={handleClick} name="following"> Following</button></div>
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