import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import './posts.css'
import MoreButton from "../SideNavBar/MoreButton";
import { NavLink } from "react-router-dom";
import { createComment } from "../../store/comment";
import {useState} from "react";
import Comment from "../Comments/Index";
import {CgProfile} from "react-icons/cg";
import {AiOutlineHeart} from "react-icons/ai";
import { createLike } from "../../store/like";
import {FaRegComment} from "react-icons/fa";
import {BiBookmark} from "react-icons/bi";



const PostIndexItem = ({ post, user }) => {
    let sessionUser = user;

    const dispatch = useDispatch();
    const [comment, setComment] = useState("");

    const [postComments, setPostComments] = useState([]);
    const [like, setLike] = useState(false)

    let tempComments = [];

    if (post.comments !== undefined) {
        // tempComments = Object.entries(post.comments);
        tempComments = [];
        for (let key in post.comments) {
            tempComments.push(post.comments[key]);
        }
    }


    const handleSubmitWithEnter = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            const newComment = {comment: {userId: user.id, body: comment, postId: post.id}}
            dispatch(createComment(newComment));
            e.target.value = "";
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("post: ", post);
        const newComment = {comment: {userId: user.id, body: comment, postId: post.id}}
        dispatch(createComment(newComment));
        e.target.value = "";
    };

    const handleClick = (e) => {
        e.preventDefault();
        const newLike = {like: {userId: user.id, postId: post.id}}
        dispatch(createLike(newLike));
        e.target.value = "";
    };

  return (
    <div className="post-index-item">
        <div className="item-top-line">
        </div>
        

        <div className="post-index-item-user">
                
            <div className="post-index-item-user-info">
                <div className="user-post-username"> 
                    <NavLink className="user-show-profile-link" exact to="/users/:userId"><CgProfile/></NavLink>
                    {/* <img src={post.user
                ? post.user.profilePhotoUrl
                : ""} alt="profile" /> */}
                </div>
                <div className="post-index-item-user-info-username">
                    {post.username ? post.username : "Anonymous"}
                </div>  
                {/* <div className="post-index-item__user__info__location">
                    {post?.location}
                </div> */}
            </div>

            <div className="post-index-item-dots-container">
                <i className="fa-solid fa-ellipsis"></i>
            </div>

        </div>

        <div className="post-index-item-image-container">
            <img className="post-index-item-image" src={post.photoUrl
                ? post.photoUrl
                : "https://i.imgur.com/8Q9QY7C.png"} alt="post" />
        </div>
        <div className="post-icons-container">
            <div className="post-icons-left">
                <div className="heart-icon" onClick={handleClick}><AiOutlineHeart/></div>
                <div><FaRegComment/></div>
                {/* <div><i className="fa-regular fa-paper-plane"></i></div> */}
            </div>
            <div className="post-icons-right">
                <div><BiBookmark/></div>
            </div>
        </div>
        <div>
            {/* <p>{post.likeIds.count} likes</p>
            <p>{post.commentIds.count} comments</p> */}
        </div>
        <div className="post-index-item__caption">
            {/* <div className="post-index-item__caption__username">
                {post.user ? post.user
                    .username : "Anonymous"}
            </div> */}
            <div className="post-index-item-caption-container">
                <div className="post-caption-username">{post.username}</div>
                <div className="post-caption-title">{post.title}</div>  
            </div>
        </div>

        <div className="post-index-item-comments">
            <div className="view-comments">View all comments</div>

             { tempComments.map(comment => (
                <Comment comment={comment} user={user} postId={post.id}/>
             )) }
             <div className="comment-container-button">
                <input className='delete-comment'onKeyDown={handleSubmitWithEnter} onChange={(e) => setComment(e.target.value)} value={comment} type="text" name="" placeholder="Add a comment..." />
                <button className="post-button" onClick={handleSubmit}>Post</button>
            </div>
        </div>

        <div className="item-bottom-line">
        </div>
        
    </div>


    );
}

export default PostIndexItem;
