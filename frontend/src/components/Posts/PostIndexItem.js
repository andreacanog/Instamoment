import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './posts.css'
import { NavLink } from "react-router-dom";
import { createComment } from "../../store/comment";
import {useState} from "react";
import {CgProfile} from "react-icons/cg";
import {AiOutlineHeart} from "react-icons/ai";
import { createLike } from "../../store/like";
import {FaRegComment} from "react-icons/fa";
import {BiBookmark} from "react-icons/bi";
import LikeButton from "../Like";
import CommentIndex from "../Comments/CommentIndex";
import {deletePost, updatePost} from '../../store/post'
import FollowButton from "../Follow";
import { getCommentsForPost } from "../../store/post";





const PostIndexItem = ({ post, user }) => {
    const dispatch = useDispatch();
    const [comment, setComment] = useState("");
    const [showMenu, setShowMenu] = useState(false);
    const [updatedTitle, setUpdatedTitle] = useState(post.title);
    const [updatingPostTitle, setUpdatingPostTitle] = useState(false);

    const comments = useSelector((state) => getCommentsForPost(state, post.id))
    
    const handleUpdatePost = (e) => {
        e.preventDefault();
        const postToUpdate = {post: {userId: user.id, title: updatedTitle}, id: post.id}
        dispatch(updatePost(postToUpdate));
        setUpdatingPostTitle(false);
        e.target.value = "";
    };
  
    const handleShowUpdatetitle = (e) => {
        e.preventDefault();
        setUpdatingPostTitle(true);
    }

    const handleCancelTitle = (e) => {
        e.preventDefault();
        setUpdatingPostTitle(false);
    }

    const handleShowMore = () => {
      if (showMenu) return;
      setShowMenu(true);
    };

    
    useEffect(() => {
        if (!showMenu) return;
  
        const closeMenu = () => {
            setShowMenu(false);
        };
        document.addEventListener('click', closeMenu);
        return () => document.removeEventListener("click", closeMenu);

    }, [showMenu]);


  
    const handleDeletePost = (e) => {
        e.preventDefault();
        dispatch(deletePost(post.id));
      };
   
   
    const handleSubmitWithEnter = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            const newComment = {comment: {userId: user.id, body: comment, postId: post.id}}
            dispatch(createComment(newComment));
            e.target.value = "";
            setComment("");
        }
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newComment = {comment: {userId: user.id, body: comment, postId: post.id}}

        dispatch(createComment(newComment));
        e.target.value = "";
        setComment("");
    };
   

  return (
    <div className="post-index-item">
        <div className="item-top-line">
        </div>
        
        <div className="post-index-item-user">
                
            <div className="post-index-item-user-info">
                <div className="user-post-profile-pic"> 
                    <NavLink className="user-show-profile-link" exact to={`/users/${post.userId}`}>{post.userProfilePic ? <img src={post.user.profilePictureUrl} alt="profile"  /> : <CgProfile/>}</NavLink>
                </div>
                
                <div className="post-index-item-user-info-username">
                    {post.username ? post.username : "Anonymous"}
                </div>  
    
            </div>

            <div className="post-index-item-dots-container">
                <button onClick={handleShowMore}><i className="fa-solid fa-ellipsis"></i></button>
                <div className="post-index-item-dots">
                    {showMenu && (
                        <ul className="post-dropdown">
                            <li className="post-dropdown">
                                { (user.id === post.user.id|| user.id === post.userId) ? <button className="update-buttom-post" onClick={handleShowUpdatetitle}>Edit</button> : <></>}
                                { (user.id === post.user.id || user.id === post.userId) ? <button className="delete-buttom-post" onClick={handleDeletePost}>Delete</button> : <></>}
                            </li>
                        </ul>
                    )}
                </div>
            </div>

        </div>

        <div className="post-index-item-image-container">
            <img className="post-index-item-image" src={post.photoUrl
                ? post.photoUrl
                : "https://i.imgur.com/8Q9QY7C.png"} alt="post" />
        </div>
        
        <div className="post-index-item__caption">
            <div className="post-icons-container">

                <div className="post-icons-left">
                    <LikeButton post={post} user={user}/>
                    {/* <div><FaRegComment/></div> */}
                </div>

                {/* <div className="post-icons-right">
                    <div><BiBookmark/></div>
                </div> */}
    
            </div>
            <div className="post-count-likes-comments">
                <div className="likes-count"><p>{(post.likes === 0 || post.likes === undefined) ? "" : post.likes + "  likes"}</p></div>
                <p className="comments-count">{(comments.length === 0) ? "" : comments.length + "  comments"}</p>
                
            </div>
            <div className="post-index-item__caption">
                {/* <div className="post-index-item__caption__username">
                    {post.user ? post.user
                        .username : "Anonymous"}
                </div> */}
                <div className="post-index-item-caption-container">
                    <div className="post-caption-username">{post.username}</div>
                    <div className="post-caption-title" style={{display: !updatingPostTitle ? "block" : "none"}} >{post.title}</div> 
                        <div className="update-post-container" style={{display: updatingPostTitle ? "block" : "none"}}>
                            <input type="text" className="comment-post-input" placeholder="Edit title" onChange={(e) => setUpdatedTitle(e.target.value)} value={updatedTitle} name=""/>
                            <button className="update-post-button" onClick={handleUpdatePost}>Save</button>
                            <button className="update-post-button cancel-button-title" onClick={handleCancelTitle}>Cancel</button>
                        </div>
                </div>
            </div>

            <div className="post-index-item-comments">
                    <CommentIndex postId={post.id} comments={comments}/>
                    {/* {comments.map(comment => <p>{comment.body}</p>)} */}
                
                <div className="comment-container-button">
                    <input className='create-comment-input' onKeyDown={handleSubmitWithEnter} onChange={(e) => setComment(e.target.value)} value={comment} type="text" placeholder="Add a comment..." />
                    <button className="post-button" onClick={handleSubmit}>Post</button>
                </div>

            </div>

            <div className="item-bottom-line">
            </div>
        </div>
    </div>

    );
}

export default PostIndexItem;
