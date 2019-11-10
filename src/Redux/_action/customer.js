import axios from 'axios'
import {api} from '../../constan/api'
export const getCustomer = () => {
    return {
      type: 'GET_CUSTOMER',
      payload : axios.get(api+'customers')
    }
  }
export const postCustomer = (postData) => {
    return {
      type: 'POST_CUSTOMER',
      Postcustomer :axios.post(api+'customer',postData)
    }
  }

export const editCustomer = (id,postData) => {
    return {
      type: 'EDIT_CUSTOMER',
      payload :  axios.put(api+`customer/${id}`,postData)
    }
  }
