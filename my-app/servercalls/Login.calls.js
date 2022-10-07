
export const validateLogin = (email, password) => {

    //access to result by .json() method
     console.log("validateLogin", email, password)
     return fetch('http://172.26.160.1:3001/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin":"*",
        },
        body: JSON.stringify({email: email, password: password})
    });
}

export const signUp = (email, password) => {

    //access to result by .json() method

    return fetch('http://localhost:3001/signUp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: email, password: password})
    });
}

export const sendPasswordResetCode = (email) => {
    return fetch('http://localhost:3001/requestCode', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: email})
    });
}

export const validatePasswordResetCode = (email, code) => {
    return fetch('http://localhost:3001/confirmCode', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: email, code: code})
    });
}

export const changePassword = (email, password, newPassword) => {
    return fetch('http://localhost:3001/updatePassword', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: email, password: password, newPassword: newPassword})
    });
}
