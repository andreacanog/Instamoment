import csrfFetch from "./csrf";
import { fetchPosts } from "./post";
import { fetchUser } from "./user";

export const RECEIVE_FOllOW = 'follows/RECEIVE_FOLLOW';
export const RECEIVE_FOLLOWS = 'follows/RECEIVE_FOLLOWS';
export const REMOVE_FOLLOW = 'follows/REMOVE_FOLLOW';

const receiveFollow = (follow) => ({
    type: RECEIVE_FOllOW,
    follow
});

const receiveFollows = (follows) => ({
    type: RECEIVE_FOLLOWS,  
    follows
});

const removeFollow = (followId) => ({
    type: REMOVE_FOLLOW,
    followId
});

export const getFollow = (followId) => (state) => {
    return state?.follows ? state.follows[followId] : null;
}

export const getFollows = (state) => {
    return state?.follows ? Object.values(state.follows) : [];
}

export const fetchFollows = () => async (dispatch) => {
    const res = await csrfFetch ('/api/follows');

    if (res.ok) {
        const follows = await res.json();
        dispatch(receiveFollows(follows));
    }
}

export const fetchFollow = (followId) => async (dispatch) => {
    const res = await csrfFetch(`/api/follows/${followId}`);

    if (res.ok) {
        const follow = await res.json();
        dispatch(receiveFollow(follow));
    }
}

export const createFollow = (followeeId, currentUserId) => async (dispatch) => {
    const follow = {
            followeeId
    }
    const res = await csrfFetch('/api/follows', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({follow})
    });

    if (res.ok) {
        const follow = await res.json();
        dispatch(receiveFollow(follow));
        dispatch(fetchPosts());
        dispatch(fetchUser(currentUserId))
    }
}


export const deleteFollow = (followeeId, currentUserId) => async (dispatch) => {
    const res = await csrfFetch(`/api/follows/${followeeId}`, {
        method: 'DELETE'
    });

    if (res.ok) {
        dispatch(removeFollow(followeeId));
        dispatch(fetchUser(currentUserId))
    }
}


const followReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = {...state};
    switch (action.type) {
        case RECEIVE_FOLLOWS:
            return {...state, ...action.follows}
        case RECEIVE_FOllOW:
            return {...state, [action.follow.follow.id]: action.follow}
        case REMOVE_FOLLOW:
            delete newState[action.followId];
            return newState;
        default:
            return state;
    }
}

export default followReducer;




