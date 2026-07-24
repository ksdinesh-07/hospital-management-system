import api from './api.js'

export const get_all_patients=async ()=>{
  const response =await api.get('/patients')
  return response.data;
}