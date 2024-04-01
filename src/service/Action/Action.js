import axios from "axios";

const getReq = () => {
    return {
        type: "GETREQ"
    }
}

const getRes = (data) => {
    return {
        type: "GETRES",
        payload: data
    }
}

const getRej = () => {
    return {
        type: "GETREJ",
    }
}

export const UserGet = () => {
    return dispatch => {
        dispatch(getReq());
        axios.get(`http://localhost:3000/posts`)
            .then((res) => {
                dispatch(getRes(res.data));
            }).catch((err) => {
                dispatch(getRej(err));
            })
    }
}

const CreateUserReq = () => {
    return {
        type: "CREATEUSERREQ",
    }
}

const CreateUserRes = (data) => {
    return {
        type: "CREATEUSERRES",
        payload: data
    }
}

const CreateUserRej = () => {
    return {
        type: "CREATEUSERREJ",
    }
}

export const UserCreate = (data) => {
    return dispatch => {
        dispatch(CreateUserReq());
        axios.post(`http://localhost:3000/posts`, data)
            .then((res) => {
                dispatch(CreateUserRes(res.data));
                dispatch(UserGet());
            }).catch((err) => {
                dispatch(CreateUserRej(err));
            })
    }
}

const singleUserReq = () => {
    return {
        type: "SINGLEUSERREQ"
    }
}

const singleUserRes = (data) => {
    return {
        type: "SINGLEUSERRES",
        payload: data
    }
}

const singleUserRej = () => {
    return {
        type: "SINGLEUSERREJ",
    }
}

export const Usersingle = (id, data) => {

    return async dispatch => {

        dispatch(singleUserReq());
        await axios.get(`http://localhost:3000/posts/${id}`, data).then((res) => {
            dispatch(singleUserRes(res.data))
        }).catch((err) => {
            dispatch(singleUserRej(err));
        })

    }

}

const updateUserReq = () => {
    return {
        type: "UPDATEUSERREQ"
    }
}

const updateUserRes = (data) => {
    return {
        type: 'UPDATEUSERRES',
        payload: data
    }
}

const updateUserRej = () => {
    return {
        type: "UPDATEUSERREJ",
    }
}

export const updateUser = (id, data) => {

    return async dispatch => {
        dispatch(updateUserReq());
        await axios.put(`http://localhost:3000/posts/${id}`, data).then((res) => {
            dispatch(updateUserRes(res.data))
        }).catch((err) => {
            dispatch(updateUserRej());
        })
    }

}

// Inside Action.js

export const deleteUserReq = () => {
    return {
        type: "DELETEUSERREQ"
    }
}

export const deleteUserRes = (id) => {
    return {
        type: "DELETEUSERRES",
        payload: id
    }
}

export const deleteUserRej = () => {
    return {
        type: "DELETEUSERREJ",
    }
}

export const deleteUser = (id) => {
    return async dispatch => {
        dispatch(deleteUserReq());
        await axios.delete(`http://localhost:3000/posts/${id}`)
            .then(() => {
                dispatch(deleteUserRes(id));
            }).catch((err) => {
                dispatch(deleteUserRej(err));
            })
    }
}

