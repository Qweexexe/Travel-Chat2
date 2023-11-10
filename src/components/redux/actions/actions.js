
export const closeWindow = () => {
    return {
        type: "CLOSE"
    }
}

export const Signup = (data) => {
    return {
        type : "SIGN_UP",
        payload : data
    }
}

export const setPhoto = (data) => {
    return {
        type : 'SET_PHOTO',
        payload : data
    }
}

export const setAuthInfo = (data) => {
    return {
        type : 'SET_AUTH',
        payload : data
    }
}