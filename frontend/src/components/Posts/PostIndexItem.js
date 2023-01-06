import React from "react";
import { useDispatch } from "react-redux";
import './posts.css'


const PostIndexItem = ({ post, user }) => {
  const dispatch = useDispatch();

  return (
    <div className="post-index-item">

        <div className="post-index-item__user">
            {/* <img src={post.user
                ? post.user.profilePhotoUrl
                : ""} alt="profile" /> */}
            <div className="post-index-item__user__info">
                <div className="post-index-item__user__info__username">
                    {post.username ? post.username : "Anonymous"}
                </div>  
                {/* <div className="post-index-item__user__info__location">
                    {post?.location}
                </div> */}
            </div>
        </div>

        <div className="post-index-item-image-container">
            <img className="post-index-item-image" src={post.photoUrl
                ? post.photoUrl
                : "https://i.imgur.com/8Q9QY7C.png"} alt="post" />
        </div>

        <div className="post-index-item__caption">
            {/* <div className="post-index-item__caption__username">
                {post.user ? post.user
                    .username : "Anonymous"}
            </div> */}
            <div className="post-index-item__caption__text">
                {post.title}
            </div>
        </div>
    </div>

    );
}

export default PostIndexItem;
