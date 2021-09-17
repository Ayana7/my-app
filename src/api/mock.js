import axios from 'axios'
export function login(params) {
  return axios({
    method: 'post',
    url: '/api/login',
    data: params
  });
}