import axios from 'axios'
export const getCustomer = () => {
    return {
      type: 'GET_CUSTOMER',
      payload : axios.get('http://192.168.137.1:5000/api/v2/customers')
    }
  }
export const postCustomer = (postData) => {
    return {
      type: 'POST_CUSTOMER',
      Postcustomer :axios.post('http://192.168.137.1:5000/api/v2/customer', postData)
    }
  }

export const editCustomer = (id,postData) => {
    return {
      type: 'EDIT_CUSTOMER',
      EditCustomer :  axios.put(`http://192.168.137.1:5000/api/v2/customer/${id}`,postData)
    }
  }
