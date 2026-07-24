import api from './api.js'

export const get_all_appointments=async()=>{
  const response=await api.get('/appointments')
  return response.data;
}