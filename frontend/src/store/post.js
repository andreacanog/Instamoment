import { RECEIVE_USER } from "./user";
import csrfFetch from "./csrf";
import { RECEIVE_COMMENT, REMOVE_COMMENT } from "./comment";
import { RECEIVE_LIKE, REMOVE_LIKE } from "./like";

export const RECEIVE_POSTS = 'posts/RECEIVE_POSTS';
export const RECEIVE_POST = 'posts/RECEIVE_POST';
export const REMOVE_POST = 'posts/REMOVE_POST';
export const REMOVE_POSTS = 'posts/REMOVE_POSTS';


const receivePosts = (posts) => {
    return {
        type: RECEIVE_POSTS,    
        posts
    }
};

const receivePost = (post) => ({
    type: RECEIVE_POST,
    post
});

const removePost = (postId) => ({
    type: REMOVE_POST,
    postId
});

export const removePosts = () => ({
    type: REMOVE_POSTS,
    posts: {}
});


export const getPost = (postId) => (state) => {
    return state?.posts ? state.posts[postId] : null;
}

export const getPosts = (state) => {
    return state?.posts ? Object.values(state.posts) : [];
}

export const getCommentsForPost = (state, postId) => {
    let post = state?.posts[postId]
    return post.comments ? Object.values(post.comments) : [];
}


export const fetchPosts = () => async (dispatch) => {
    const res = await csrfFetch('/api/posts');
    if (res.ok) {
        const posts = await res.json();
        dispatch(receivePosts(posts));
    }
}

export const fetchPost = (postId) => async (dispatch) => {
    const res = await csrfFetch(`/api/posts/${postId}`);

    if (res.ok) {
        const post = await res.json();
        dispatch(receivePost(post));
    }
}

export const createPost = (post) => async (dispatch) => {
    const res = await fetch('/api/posts', { 
        method: 'POST',
        headers: {
            "X-CSRF-Token": sessionStorage.getItem("X-CSRF-Token")
        },
        body: post
    });

    if (res.ok) {
        const post = await res.json();
        dispatch(receivePost(post));
    }
}


export const updatePost = (post) => async (dispatch) => {
    const res = await csrfFetch(`/api/posts/${post.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    });

    if (res.ok) {
        const post = await res.json();
        dispatch(receivePost(post));
    }
}

export const deletePost = (postId) => async (dispatch) => {
    const res = await csrfFetch(`/api/posts/${postId}`, {
        method: 'DELETE'
    });

    if (res.ok) {
        dispatch(removePost(postId));
    }
}

const postReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = {...state};
    switch (action.type) {
        case RECEIVE_POSTS:
            return action.posts
        case RECEIVE_POST:
            return {...state, [action.post.post.id]: action.post.post}
        case REMOVE_POST:
            delete newState[action.postId];

            return newState;

        case REMOVE_POSTS:
            newState = {}
            
            return newState;

        case RECEIVE_COMMENT:
            let postId = action.comment.post_id === undefined ? action.comment.postId : action.comment.post_id
            let post = newState[postId]
            
            if (post.comments === undefined) {
                post.comments = [];
            }
            if (action.comment !== undefined) {
                post.comments[action.comment.id] = action.comment
            } 
        

            let commentPost = newState[action.comment.postId]
            commentPost.commentCount += 1
            return newState

        case REMOVE_COMMENT:

            let tempPost = newState[action.postId]
            delete tempPost.comments[action.commentId]
            tempPost.commentCount -= 1;
            return newState

        case RECEIVE_LIKE:
            const postLike = newState[action.like.postId]; 
            postLike.likes === undefined ? postLike.likes = 1 : postLike.likes += 1
            postLike.liked = true
            return newState

        case REMOVE_LIKE:
            const postUnLike = newState[action.likeId] 
            postUnLike.likes -= 1
            postUnLike.liked = false
            return newState

        case RECEIVE_USER:
            return action.user.posts;
        default:
            return state;
    }
}

export default postReducer;