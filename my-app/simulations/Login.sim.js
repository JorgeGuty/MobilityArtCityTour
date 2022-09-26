
export const validateLogin = (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true)
      }, 333)
    })
}

export const sendPasswordResetCode = (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true)
      }, 333)
    })
}

export const validatePasswordResetCode = (code) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(true)
        }, 333)
    })
}

export const changePassword = (email, newPassword) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(true)
        }, 333)
    })
}