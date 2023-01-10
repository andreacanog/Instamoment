import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getComments} from "../../store/comment";
import "./comment.css";
import { fetchComments } from "../../store/comment";
import CommentIndexItem from "./CommentIndexItem";
import { getPost } from "../../store/post";

const CommentIndex = ({postId}) => {
    const dispatch = useDispatch();
    const comments = useSelector(getComments);
    const user = useSelector(state => state.session.user);
    const post = useSelector(getPost);
   
    // console.log("post.id inside the component: ", postId);
    useEffect(() => {
        dispatch(fetchComments(postId));
    }, [dispatch]);

    if (!comments) return null;
    let postComments = comments.filter(comment => comment.postId === post.id);

    return (
        <div>
            {postComments.map(comment => (
                <CommentIndexItem key={comment.id} comment={comment} user={user} post={post}/>
            ))}
        </div>
    )
}

export default CommentIndex;
