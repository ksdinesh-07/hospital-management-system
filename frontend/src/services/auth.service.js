import api from './api'

export const login_user=async (data)=>{
  const response=await api.post('/auth/login',data);
  return response.data
}

