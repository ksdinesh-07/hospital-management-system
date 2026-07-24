import {defineStore} from "pinia";
import { save_token,remove_token } from "@/utils/token.js";


export const use_auth_store=defineStore("auth",{
  state:()=>({
    user:null,
    token:null,
    is_authentication:false
  }),
  actions:{
    login(user,token){
      this.user=user;
      this.token=token;
      this.is_authentication=true;

      save_token(token)

      console.log("Login function completed");
    },
    logout(){
      this.user=null;
      this.token=null;
      this.is_authentication=false;
    
      remove_token()
    }
  }
})