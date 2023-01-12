import React, { useEffect } from "react";
import {RiUserFollowLine} from "react-icons/ri"; //follow 
import {RiUserUnfollowLine} from "react-icons/ri"; //unfollow
import { useSelector, useDispatch } from "react-redux";
import { deleteFollow, createFollow } from "../../store/follow";
import { useState } from "react";


const FollowButton = ({ user }) => {
    const currentUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const [followed, setFollowed] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        if (followed) { 
            console.log('user follows this user')
            dispatch(deleteFollow(user.id)); 
        } else {
            console.log('user does not follow this user')
            dispatch(createFollow(user.id));
        }
        setFollowed(!followed);
    }

    useEffect(() => {
        if (user.followerIds.includes(currentUser.id)) {
            setFollowed(true) // if the post has likes, set the like button to be liked
        }
    }, [dispatch])



    if (followed) {
        return (
            <div className="follow-button-container">
                <button className="follow-button" onClick={handleClick}>
                    <div className="follow-button-person follow">Following<RiUserFollowLine/></div>
                </button>
            </div>
        )
    } else {
        return (
            <div className="follow-button-container">
                <button className="follow-button" onClick={handleClick}>
                    <div className="follow-button-person unfollow">Follow<RiUserUnfollowLine/></div>
                </button>
            </div>
        )
    }
}

export default FollowButton;