const initialState = {
    isLoading: false,
    DataCustomer : [],
    PostCustomer :[],
    EditCustomer :[]
  }
  const customer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_CUSTOMER_FULFILLED':
        return {
          ...state,
          isLoading: false,
          DataCustomer: action.payload.data,
        }
      case 'GET_CUSTOMER_PENDING':
        return {
          ...state,
          isLoading: true
      }
      case 'POST_CUSTOMER':
        return {
          ...state,
          isLoading: false,
          PostCustomer : action.postCustomer
        }

      case 'EDIT_CUSTOMER':
        return {
          ...state,
          isLoading: false,
          EditCustomer : action.editCustomer
        }


      default:
        return state;
    }
  }
  export default customer;
