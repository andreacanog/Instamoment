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

    useEffect(() => {
        if (post.liked) {
            setLiked(true) 
        } 
    }, [post]) 


    const handleClick = (e) => {
        e.preventDefault();
        if (liked) {
            dispatch(deleteLike(post.id)); 
            setLiked(false)
        } else {
            dispatch(createLike(post.id));
            setLiked(true)
        }
    }

    if (liked) {
        return (
            <div className="like-button-container">
                <button className="like-button" onClick={handleClick}>
                    <div className="heart-icon liked" ><AiFillHeart/></div>
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