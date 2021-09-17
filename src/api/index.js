import axios from 'axios'

export function requestLogin(data){
  axios({
    method: 'post',
    url: '/login',
    data: data
  })
}