import api from "./api";

export const get_all_doctors=async()=>{
  const response=await api.get("/doctors");
  return response.data;
}

export const get_doctor_by_id=async(id)=>{
  const response=await api.get(`/doctors/${id}`);
  return response.data;
}