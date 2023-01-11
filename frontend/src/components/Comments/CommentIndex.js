import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./comment.css";
import { fetchComments } from "../../store/comment";
import CommentIndexItem from "./CommentIndexItem";
import { getPost } from "../../store/post";
import {getCommentsForPost} from '../../store/post'

const CommentIndex = ({postId}) => {
    const dispatch = useDispatch();
    const comments = useSelector((state) => getCommentsForPost(state, postId))
    const user = useSelector(state => state.session.user);
    const post = useSelector(getPost);  // post seems to be the function rather than the fetched posts from the store.
    console.log("comment inside commentIndex: ", comments);
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
