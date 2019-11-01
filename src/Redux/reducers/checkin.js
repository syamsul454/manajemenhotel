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
            postCheckin : action.postCheckin
          }

          case 'CHECKOUT':
            return {
              ...state,
              Checkout : action.Checkout
            }
      default:
        return state;
    }
  }
  export default checkin;
