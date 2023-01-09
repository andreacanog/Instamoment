import React from "react";
import { useDispatch } from "react-redux";
import { deleteComment, updateComment} from "../../store/comment";
import { useParams } from "react-router-dom";



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
        dispatch(updateComment(commentId));
        e.target.value = "";

    }

    return (
        <div className="post-index-item-comment" key={comment.id}>  
            <div className="post-index-item-comment-username">{comment.username}</div>
            <div className="post-index-item-comment-body">{comment.body}</div>
            { user.id === comment.user.id ? <button onClick={handleDelete} >Delete</button> : <></>}
            { user.id === comment.user.id ? <button onClick={handleUpdate} >Update</button> : <></>}
        </div>

    )
}

export default Comment;