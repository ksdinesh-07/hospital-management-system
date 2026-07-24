export const save_token= (token)=>{
  localStorage.setItem("token",token)
}

export const get_token=() =>{
  return localStorage.getItem("token")
}

export const remove_token=() =>{
  localStorage.removeItem()
}

