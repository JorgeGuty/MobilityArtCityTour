
export const signUp = (email, password) => {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        ok:true
      })
    }, 333)
  })
}


export const validateLogin = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        ok:true
      })
    }, 333)
  })
}

export const sendPasswordResetCode = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        ok:true
      })
    }, 333)
  })
}

export const validatePasswordResetCode = (code) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          ok:true
        })
      }, 333)
  })
}

export const changePassword = (email, newPassword) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          ok:true
        })
      }, 333)
  })
}
