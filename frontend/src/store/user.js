import csrfFetch from "./csrf";

export const RECEIVE_USER = 'users/RECEIVE_USER';
export const RECEIVE_USERS = 'users/RECEIVE_USERS';
export const REMOVE_USER = 'users/REMOVE_USER';

const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
});

const receiveUsers = (users) => ({
    type: RECEIVE_USERS,
    users
});

const removeUser = (userId) => ({
    type: REMOVE_USER,
    userId
});



export const getUsers = (state) => {
    return state?.users ? Object.values(state.users) : [];
}


export const getUser = (userId) => (state) => {
    return state?.users ? state.users[userId] : null;   
}




//         dispatch(receiveUsers(users));
//     }
// }

export const fetchUsers = (type) => async dispatch => {
    const res = await csrfFetch(`/api/users?type=${type}`);
    if(res.ok) {
      const users = await res.json();
      dispatch(receiveUsers(users));
    }
}

export const fetchUser = (userId) => async (dispatch) => {
    const res = await csrfFetch(`/api/users/${userId}`);
    if (res.ok) {
        const user = await res.json();
       
        dispatch(receiveUser(user));
    }
}


export const createUser = (user) => async (dispatch) => {
    const res = await csrfFetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });

    if (res.ok) {
        const user = await res.json();
        dispatch(receiveUser(user));
    }
}

export const updateUser = (user) => async (dispatch) => {
    const res = await csrfFetch(`/api/users/${user.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });

    if (res.ok) {
        const user = await res.json();
        dispatch(receiveUser(user));
    }
}

export const deleteUser = (userId) => async (dispatch) => {
    const res = await csrfFetch(`/api/users/${userId}`, {
        method: 'DELETE'
    });

    if (res.ok) {
        dispatch(removeUser(userId));
    }
}

const userReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = {...state};
   
    switch (action.type) {

        case RECEIVE_USER:
            return {...state, [action.user.user.id]: action.user.user}
        case RECEIVE_USERS:
            return {...state, ...action.users}
        case REMOVE_USER:
            delete newState[action.userId];
            return newState;
        default:
            return state;
    }
}


export default userReducer;
