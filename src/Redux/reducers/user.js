const initialState = {
    isLoading: false,
    NameUser: '',
    tokenUser: '',
    emailUser : ''
  }

  const user = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_USERS':
        return {
          ...state,
          isLoading: false,
          tokenUser: action.tokenUser,
          NameUser: action.name
        }
      case 'GET_USERS_PENDING':
        return {
          ...state,
          isLoading: true
        }
      default:
        return state;
    }
  }
  export default user;
