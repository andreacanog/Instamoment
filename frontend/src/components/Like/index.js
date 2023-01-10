import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createLike, deleteLike } from "../../store/like";
import "./Like.css";
import {AiFillHeart} from "react-icons/ai";
import {AiOutlineHeart} from "react-icons/ai";
import { useState } from "react";


const LikeButton = ({ post, user }) => {
    const dispatch = useDispatch();
    const [liked, setLiked] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        if (liked) {
            dispatch(deleteLike(post.ownLikeId));
        } else {
            dispatch(createLike(post.id));
        }
        setLiked(!liked);
    }

    useEffect(() => {
        if (post.liked) {
            setLiked(true) // if the post has likes, set the like button to be liked
        }
    }, [dispatch]) // if the post has likes, set the like button to be liked



    if (liked) {
        return (
            <div className="like-button-container">
                <button className="like-button" onClick={handleClick}>
                    <div className="liked" ><AiFillHeart/></div>
                </button>
            </div>
        )
    } else {
        return (
            <div className="like-button-container">
                <button className="like-button" onClick={handleClick}>
                    <div className="heart-icon unliked"><AiOutlineHeart/></div>
                </button>
            </div>
        )
    }
}

export default LikeButton;