import React, { useEffect } from "react";
import {RiUserFollowLine} from "react-icons/ri"; //follow 
import {RiUserUnfollowLine} from "react-icons/ri"; //unfollow
import { useSelector, useDispatch } from "react-redux";
import { deleteFollow, createFollow } from "../../store/follow";
import { useState } from "react";
import { fetchUser } from "../../store/user";
import "./follow.css"


const FollowFromSuggested = ({ user }) => {
    const currentUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const [followed, setFollowed] = useState(false);
    let temp;
    const handleClick = (e) => {
        e.preventDefault();
        if (followed) { 
            dispatch(deleteFollow(user.id, currentUser.id)); 
        } else {
            dispatch(createFollow(user.id,  currentUser.id));
        }
        setFollowed(!followed)
    }


    useEffect(() => {
        temp = dispatch(fetchUser(user.id))
    }, [])

    useEffect(() => {
        if (user.followerIds.includes(currentUser.id)) {
            setFollowed(true) 
        }
    }, )








    if (followed) {
        return (
            <div className="follow-button-container">
                <button className="follow-button" onClick={handleClick}>
                    <div className="follow-button-person follow">Following <RiUserFollowLine/></div>
                </button>
            </div>
        )
    } else {
        return (
            <div className="follow-button-container">
                <button className="follow-button" onClick={handleClick}>
                    <div className="follow-button-person unfollow">Follow <RiUserUnfollowLine/></div>
                </button>
            </div>
        )
    }
}

export default FollowFromSuggested;