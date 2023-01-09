export const RECEIVE_COMMENT = 'comments/RECEIVE_COMMENT';
export const RECEIVE_COMMENTS = 'comments/RECEIVE_COMMENTS';
export const REMOVE_COMMENT = 'comments/REMOVE_COMMENT';

const receiveComment = (comment) => ({
    type: RECEIVE_COMMENT,
    comment
});

const receiveComments = (comments) => ({ 
    type: RECEIVE_COMMENTS,
    comments
});

const removeComment = (commentId) => ({
    type: REMOVE_COMMENT,
    commentId
});

export const getComment = (commentId) => (state) => {
    return state?.comments ? state.comments[commentId] : null;
}

export const getComments = (state) => {
    return state?.comments ? Object.values(state.comments) : [];
}

export const fetchComments = () => async (dispatch) => {
    const res = await fetch('/api/comments');

    if (res.ok) {
        const comments = await res.json();
        dispatch(receiveComments(comments));
    }
}

export const fetchComment = (commentId) => async (dispatch) => {
    const res = await fetch(`/api/comments/${commentId}`);

    if (res.ok) {
        const comment = await res.json();
        dispatch(receiveComment(comment));
    }
}

export const createComment = (comment) => async (dispatch) => {
    console.log("comment in thunk: ", comment);
    const res = await fetch('/api/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
    });

    if (res.ok) {
        const comment = await res.json();
        dispatch(receiveComment(comment));
    }
}

export const updateComment = (comment) => async (dispatch) => {
    const res = await fetch(`/api/comments/${comment.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
    });

    if (res.ok) {
        const comment = await res.json();
        dispatch(receiveComment(comment));
    }
}

export const deleteComment = (commentId) => async (dispatch) => {
    const res = await fetch(`/api/comments/${commentId}`, {
        method: 'DELETE'
    });

    if (res.ok) {
        dispatch(removeComment(commentId));
    }
}


const commententReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = {...state};

    switch (action.type) {
        case RECEIVE_COMMENTS:
            return {...state, ...action.comments}
        case RECEIVE_COMMENT:
            return {...state, [action.comment.id]: action.coment}
        case REMOVE_COMMENT:
            delete newState[action.comentId];
            return newState;
        default:
            return state;
    }
}

export default commententReducer