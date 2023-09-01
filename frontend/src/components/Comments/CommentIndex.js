import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./comment.css";
import { fetchComments } from "../../store/comment";
import CommentIndexItem from "./CommentIndexItem";
import { getPost } from "../../store/post";



const CommentIndex = ({postId, comments}) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const post = useSelector(getPost);  
    
    useEffect(() => {
        dispatch(fetchComments(postId));
    }, [dispatch]);

    if (!comments) return null;

    return (
        <div>
            {comments.map((comment, idx) => (
                <CommentIndexItem key={idx} comment={comment} user={user} post={post} />
            ))}
        </div>
    )
}

export default CommentIndex;
