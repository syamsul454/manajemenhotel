import axios from 'axios'
export const getCheckin = () => {
    return {
      type: 'GET_CHECKIN',
      payload :axios.get('http://192.168.137.1:5000/api/v2/checkins')
    }
  }
  export const postCheckin = (postData) => {
    return {
      type: 'POST_CHECKIN',
      postCheckin : axios.post('http://192.168.137.1:5000/api/v2/checkin',postData)
    }
  }

export const checkout = (id,postData) => {
      return {
        type: 'CHECKOUT',
        Checkout :  axios.put(`http://192.168.137.1:5000/api/v2/checkout/${id}`,postData)
      }
    }
