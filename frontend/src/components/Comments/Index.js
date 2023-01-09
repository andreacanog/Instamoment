import React from "react";
import { useDispatch } from "react-redux";
import { deleteComment, updateComment} from "../../store/comment";
// import { useParams } from "react-router-dom";
import "./comment.css";



const Comment = ({comment, user, postId}) => {
    const commentId = comment.id;

    const dispatch = useDispatch();

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteComment(commentId));
        e.target.value = "";

    }

    const handleUpdate = (e) => {
        e.preventDefault();
        const commentToUpdate = {comment: {userId: user.id, body: comment, postId: postId}}
        dispatch(updateComment(comment));
        e.target.value = "";

    }

    return (
        <div className="post-index-item-comment" key={comment.id}>  
            <div className="post-index-item-comment-username">{comment.username}</div>
            <div className="post-index-item-comment-body">{comment.body}</div>
            <div className="button-container-update-delete">
                { user.id === comment.user.id ? <button className="delete-botton" onClick={handleDelete} >Delete</button> : <></>}
                { user.id === comment.user.id ? <button className="update-button" onClick={handleUpdate} >Update</button> : <></>}
            </div>
        </div>

    )
}

export default Comment;