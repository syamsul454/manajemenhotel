import axios from 'axios'
export const getRoom = () => {
    return {
      type: 'GET_ROOM',
      payload :axios.get('http://192.168.137.1:5000/api/v2/rooms')
    }
  }
  export const addRoom =(postData) => {
    return {
      type: 'POST_ROOM',
      postdata :axios.post('http://192.168.137.1:5000/api/v2/room',postData)
    }
  }

   // playload : axios.get( ` 'http://192.168.137.1:5000/api/v2/rooms`, { headers : {"Authorization" : `${token}`}})
