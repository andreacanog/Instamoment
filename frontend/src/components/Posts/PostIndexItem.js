import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import './posts.css'
import ProfileButton from "../SideNavBar/ProfileButton";
import { NavLink } from "react-router-dom";
import { createComment } from "../../store/comment";
import {useState} from "react";
import Comment from "../Comments/Index";



const PostIndexItem = ({ post, user }) => {
    let sessionUser = user;

    const dispatch = useDispatch();
    const [comment, setComment] = useState("");

    const [postComments, setPostComments] = useState([]);

    // useEffect(() => {
    //     console.log("post.comments inside useEffect: ", post.comments);
    //     let tempComments = Object.entries(post.comments);
    //     setPostComments(tempComments);
    //     }, [post])
    // let comments = Object.entries(post.comments);
    console.log("post.comments: ", post.comments);
    let tempComments = [];

    if (post.comments !== undefined) {
        // tempComments = Object.entries(post.comments);
        tempComments = [];
        for (let key in post.comments) {
            tempComments.push(post.comments[key]);
        }
        
        console.log("tempComments: ", tempComments);
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

  return (
    <div className="post-index-item">
        <div className="item-top-line">
        </div>
        

        <div className="post-index-item-user">
                
            <div className="post-index-item-user-info">
                <div className="user-post-username"> 
                    <NavLink exact to="/"><ProfileButton user={sessionUser} /></NavLink>
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
                <div><i className="fa-regular fa-heart"></i></div>
                <div><i className="fa-regular fa-comment"></i></div>
                <div><i className="fa-regular fa-paper-plane"></i></div>
            </div>
            <div className="post-icons-right">
                <div><i className="fa-regular fa-bookmark"></i></div>
                
            </div>
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
             { tempComments.map(comment => (
                <Comment comment={comment} user={user} postId={post.id}/>
             )) }
            <input onKeyDown={handleSubmitWithEnter} onChange={(e) => setComment(e.target.value)} value={comment} type="text" name="" placeholder="Add a comment..." />
        </div>

        <div className="item-bottom-line">
        </div>
        
    </div>


    );
}

export default PostIndexItem;
