import api from './api.js'

export const get_all_prescriptions=async()=>{
  const response=await api.get('/prescriptions')
  return response.data
}