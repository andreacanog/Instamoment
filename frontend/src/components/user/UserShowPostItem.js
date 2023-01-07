import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


const UserShowPostItem= ({post}) => {
    const dispatch = useDispatch();
    console.log(post)
    return (
        <>
        <div>{post.title}</div>
        <img src={`${post.photoUrl}`}></img>
        </>
        

    )
}

export default UserShowPostItem;