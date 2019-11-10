import axios from 'axios'
import {api} from '../../constan/api'
export const getCheckin = () => {
    return {
      type: 'GET_CHECKIN',
      payload :axios.get(api+'checkins')
    }
  }
  export const postCheckin = (postData) => {
    return {
      type: 'POST_CHECKIN',
      payload : axios.post(api+'checkin',postData)
    }
  }

export const checkout = (id,postData) => {
      return {
        type: 'CHECKOUT',
        payload : axios.put(api+`checkout/${id}`,postData)
      }
    }
