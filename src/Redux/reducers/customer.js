const initialState = { 
    isLoading: false,
    nama : '',
    DataCustomer : [],
    PostCustomer :[],
    EditCustomer : []
  }
  const customer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_CUSTOMER_FULFILLED':
        return {
          ...state,
          isLoading: false, 
          nama: 'syamsul',
          DataCustomer: action.payload.data.customer
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
          EditCustomer : action.payload.data
        }

      default:
        return state;
    }
  }
  export default customer;
