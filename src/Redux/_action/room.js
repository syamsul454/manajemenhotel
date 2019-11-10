import axios from 'axios'
import {api} from '../../constan/api'
export const getRoom = () => {
    return {
      type: 'GET_ROOM',
      payload :axios.get(api+'rooms')
    }
  }
  export const addRoom =(postData) => {
    return {
      type: 'POST_ROOM',
      postdata :axios.post(api+'room',postData)
    }
  }

   // playload : axios.get( ` 'http://192.168.137.1:5000/api/v2/rooms`, { headers : {"Authorization" : `${token}`}})
