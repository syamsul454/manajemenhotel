import axios from 'axios'
const initialState = {
    isLoading: false,
    DataRoom : [],
    PostRoom : []
  }
  const room = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_ROOM_FULFILLED':
        return {
          ...state,
          isLoading: false,
          DataRoom: action.payload.data,
        }
      case 'GET_ROOM_PENDING':
        return {
          ...state,
          isLoading: true
        }
        case 'POST_ROOM':
          return {
            ...state,
            isLoading: false,
            PostRoom: action.payload,
          }
      default:
        return state;
    }
  }
  export default room;
