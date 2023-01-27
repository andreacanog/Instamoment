import csrfFetch from "./csrf";
import { fetchPost } from "./post";

export const RECEIVE_LIKE = 'comments/RECEIVE_LIKE';
export const RECEIVE_LIKES = 'comments/RECEIVE_LIKES';
export const REMOVE_LIKE = 'comments/REMOVE_LIKE';

const receiveLike = (like) => ({
    type: RECEIVE_LIKE,
    like
});

const receiveLikes = (likes) => ({
    type: RECEIVE_LIKES,
    likes
});

const removeLike = (likeId) => ({
    type: REMOVE_LIKE,
    likeId
});

export const getLike = (likeId) => (state) => {
    return state?.likes ? state.likes[likeId] : null;
}

export const getLikes = (state) => {
    return state?.likes ? Object.values(state.likes) : [];
}

export const fetchLikes = () => async (dispatch) => {
    const res = await csrfFetch ('/api/likes');

    if (res.ok) {
        const likes = await res.json();
        dispatch(receiveLikes(likes));
    }
}

export const fetchLike = (likeId) => async (dispatch) => {
    const res = await csrfFetch(`/api/likes/${likeId}`);

    if (res.ok) {
        const like = await res.json();
        dispatch(receiveLike(like));
    }
}

export const createLike = (postID) => async (dispatch) => {
    let newBody = {like: {postID: postID}}
    const res = await csrfFetch('/api/likes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newBody)
    });

    if (res.ok) {
        const like = await res.json();
        dispatch(receiveLike(like));
        // dispatch(fetchPost(postID));
    }
}

export const deleteLike = (postId) => async (dispatch) => {
    const res = await csrfFetch(`/api/likes/${postId}`, {
        method: 'DELETE',
    });

    if (res.ok) {
        dispatch(removeLike(postId));
        // dispatch(fetchPost(postId));
    }
}


const likeReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = {...state};

    switch (action.type) {
        case RECEIVE_LIKES:
            return {...state, ...action.likes}
        case RECEIVE_LIKE:
            return {...state, [action.like.id]: action.like}
        case REMOVE_LIKE:
            delete newState[action.liketId];
            return newState;
        default:
            return state;
    }
}

export default likeReducer
