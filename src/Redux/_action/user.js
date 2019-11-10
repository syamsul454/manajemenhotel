export const getUsers = (token, name) => {
    return {
      type: 'GET_USERS',
       tokenUser : token,
       name : name
    }
  }
  export const getUsersPending = () => {
    return {
      type: 'GET_USERS_PENDING'
    }
  }
