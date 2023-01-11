import React from "react";
import { useDispatch } from "react-redux";
import { deleteComment, updateComment} from "../../store/comment";
import "./comment.css";
import { useState } from "react";



const CommentIndexItem = ({comment, user, post}) => {
    const commentId = comment.id;
    const postId = comment.postId === undefined ? comment.post_id : comment.postId;


    console.log("comment inside", comment)
    // console.log('postId ', postId)
    const [updatedComment, setUpdatedComment] = useState(comment.body);
    const [updatingComment, setUpdatingComment] = useState(false);

    
    const dispatch = useDispatch();
    
    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteComment(commentId, postId));
        e.target.value = "";
    }

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        const commentToUpdate = {comment: {userId: user.id, body: updatedComment, postId: post.id, commentId: comment.id}}
        dispatch(updateComment(commentToUpdate));
        setUpdatingComment(false);
        e.target.value = "";

    }

    const handleShowUpdateField = (e) => {
        e.preventDefault();
        setUpdatingComment(true);
    }


    return (
        <div className="post-index-item-comment" key={comment.id}>  
            <div className="comment-info-container">
                <div className="post-index-item-comment-profile-pic">{/* <img src={post.user
                ? post.user.profilePhotoUrl
                : ""} alt="profile" /> */}
                </div>
                <div className="post-index-item-comment-username">{comment.user !== undefined ? comment.user.username : "user"}</div>
                <div className="post-index-item-comment-body">{comment.body}</div>
            </div>
            <div className="button-container-update-delete">
                { (user.id === comment.user_id || user.id === comment.userId) ? <button className="delete-botton" onClick={handleDelete} >Delete</button> : <></>}
                { (user.id === comment.user_id || user.id === comment.userId) ? <button className="update-button" onClick={handleShowUpdateField} >Edit
                </button> : <></>}
            </div>
            <div className="update-comment-container" style={{display: updatingComment ? "block" : "none"}}>
                <input type="text" className="comment-update-input" placeholder="Update Comment" onChange={(e) => setUpdatedComment(e.target.value)} value={updatedComment} name=""/>
                <button className="update-comment-button" onClick={handleUpdateSubmit}>Edit comment</button>
            </div>
        </div>

    )
}

export default CommentIndexItem;