import React from "react";
import { useDispatch } from "react-redux";
import './posts.css'


const PostIndexItem = ({ post, user }) => {
  const dispatch = useDispatch();

  return (
    <div className="post-index-item">
        <div className="item-top-line">
        </div>
        

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
        <div className="post-icons-container">
            <div className="post-icons-left">
                <div><i className="fa-regular fa-heart"></i></div>
                <div><i className="fa-regular fa-comment"></i></div>
                <div><i className="fa-regular fa-paper-plane"></i></div>
            </div>
            <div className="post-icons-right">
                <div><i className="fa-regular fa-bookmark"></i></div>
                
            </div>
        </div>

        <div className="post-index-item__caption">
            {/* <div className="post-index-item__caption__username">
                {post.user ? post.user
                    .username : "Anonymous"}
            </div> */}
            <div className="post-index-item-caption-container">
                <div className="post-caption-username">{post.username}</div>
                <div className="post-caption-title">{post.title}</div>  
            </div>
        </div>
        <div className="item-bottom-line">
        </div>
        
    </div>


    );
}

export default PostIndexItem;
