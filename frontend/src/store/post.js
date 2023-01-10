import { RECEIVE_USER } from "./user";
import csrfFetch from "./csrf";

export const RECEIVE_POSTS = 'posts/RECEIVE_POSTS';
export const RECEIVE_POST = 'posts/RECEIVE_POST';
export const REMOVE_POST = 'posts/REMOVE_POST';

const receivePosts = (posts) => ({
    type: RECEIVE_POSTS,    
    posts
});

const receivePost = (post) => ({
    type: RECEIVE_POST,
    post
});

const removePost = (postId) => ({
    type: REMOVE_POST,
    postId
});


export const getPost = (postId) => (state) => {
    return state?.posts ? state.posts[postId] : null;
}

export const getPosts = (state) => {
    return state?.posts ? Object.values(state.posts) : [];
}



export const fetchPosts = () => async (dispatch) => {
    const res = await csrfFetch('/api/posts');

    if (res.ok) {
        const posts = await res.json();
        // debugger
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
    const res = await csrfFetch('/api/posts', {
        method: 'POST',
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
            return {...state, ...action.posts}
        case RECEIVE_POST:
            return {...state, [action.post.id]: action.post}
        case REMOVE_POST:
            delete newState[action.postId];
            return newState;
        case RECEIVE_USER:
            return {...state, ...action.user.posts}
        default:
            return state;
    }
}

export default postReducer;