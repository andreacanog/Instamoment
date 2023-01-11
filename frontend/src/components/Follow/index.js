import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createLike, deleteLike } from "../../store/like";
import "./Like.css";
import {RiUserFollowLine} from "react-icons/ri"; //follow 
import {RiUserUnfollowLine} from "react-icons/ri"; //unfollow


const FollowButton = ({ post, user }) => {
    const dispatch = useDispatch();
    const [followed, setFollowed] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        if (followed) {
            dispatch(deleteFollow(post.id)); 
        } else {
            dispatch(createFollow(post.id));
        }
        setLiked(!followed);
    }

    useEffect(() => {
        if (post.followed) {
            setFollowed(true) // if the post has likes, set the like button to be liked
        }
    }, [dispatch]) // if the post has likes, set the like button to be liked



    if (followed) {
        return (
            <div className="follow-button-container">
                <button className="follow-button" onClick={handleClick}>
                    <div className="follow-button-person follow" ><RiUserFollowLine/></div>
                </button>
            </div>
        )
    } else {
        return (
            <div className="follow-button-container">
                <button className="follow-button" onClick={handleClick}>
                    <div className="follow-button-person unfollow"><RiUserUnfollowLine/></div>
                </button>
            </div>
        )
    }
}

export default FollowButton;