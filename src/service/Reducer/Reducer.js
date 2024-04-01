const initialState = {
    users: [],
    user: null,
    isLoading: false,
    err: null
}

export const UserReducer = (state = initialState, action) => {
    switch (action.type) {

        case "GETREQ":
        case "CREATEUSERREQ":
            return {
                ...state,
                isLoading: true,
            }

        case "GETRES":
            return {
                ...state,
                isLoading: false,
                users: action.payload
            }

        case "GETREJ":
        case "CREATEUSERREJ":
            return {
                ...state,
                isLoading: false,
                error: "Something went wrong",
            }

        case "SINGLEUSERREQ":
            return {
                ...state,
                isLoading: true,
            }
        case "SINGLEUSERRES":
            return {
                ...state,
                isLoading: false,
                user: action.payload
            }

        case "SINGLEUSERREJ":
            return {
                ...state,
                isLoading: false,
                err: "somethings went wrong .."
            }

        case "UPDATEUSERREQ":
            return {
                ...state,
                isLoading: true,
            }
        case "UPDATEUSERRES":
            return {
                ...state,
                isLoading: false,
                user: action.payload
            }

        case "UPDATEUSERREJ":
            return {
                ...state,
                isLoading: false,
                err: "somethings went wrong .."
            }

        case "DELETEUSERREQ":
            return {
                ...state,
                isLoading: true,
            }
        case "DELETEUSERRES":
            return {
                ...state,
                isLoading: false,
                users: state.users.filter(user => user.id !== action.payload)
            }
        case "DELETEUSERREJ":
            return {
                ...state,
                isLoading: false,
                err: "Something went wrong while deleting the user",
            }

        default:
            return state;
    }
}