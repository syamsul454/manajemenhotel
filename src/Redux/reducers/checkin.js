const initialState = {
    isLoading: false,
    DataCheckins : [],
    postCheckin : [],
    Checkout : []
  }
  const checkin = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_CHECKIN_FULFILLED':
        return {
          ...state,
          isLoading: false,
          DataCheckins: action.payload.data,
        }
      case 'GET_CHECKIN_PENDING':
        return {
          ...state,
          isLoading: true
        }

        case 'POST_CHECKIN':
          return {
            ...state,
            isLoading: false,
            postCheckin : action.payload.data
          }

          case 'CHECKOUT':
            return {
              ...state,
              isLoading: false,
              Checkout : action.payload.data
            }
      default:
        return state;
    }
  }
  export default checkin;
