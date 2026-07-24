<template>
  <div class="login-container">
    <div class="login-card">
      <h1>Hospital Management System</h1>
      <form @submit.prevent='login'>

        <div class="form-group">
          <label>Email</label>
          <input type='email' v-model="email" placeholder="enter your email" />
        </div>

        <div class="form-group">
          <label>Password</label>
          <input type='password' v-model="password" placeholder="enter your password" />
        </div>

        <button type="submit" >login</button>

      </form>
    </div>
  </div>
</template>

<script setup>

import {ref} from "vue";
import {login_user} from '../services/auth.service.js'
import {use_auth_store} from '../stores/auth.store.js'
import {useRouter} from 'vue-router';



const auth_store=use_auth_store();
const email=ref('')
const password=ref('')
const router=useRouter()

const login=async ()=>{
  try{

    console.log("a")

    const response=await login_user({
      email:email.value,
      password:password.value
    })


    console.log('b',response);


    auth_store.login(response.data.user,response.data.token);
    router.push('/dashboard');

    console.log("c   User after login:", auth_store.user);
    console.log("d   Token after login:", auth_store.token);
    console.log("e   Store state:", auth_store.$state);

    console.log("Login completed successfully");
  }catch(err){
    console.log("ERROR :",err.response?.data || err);
  }
}

</script>


<style scoped>
  .login-container{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f5f5f5;
  }

  .login-card{
    width: 400px;
    background: white;
    padding:30px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,.2);
  }
  .login-card h1{
    text-align:center;
    margin-bottom:20px;
  }

  .form-group{
    margin-bottom:20px;
  }

  label{
    display:block;
    margin-bottom:8px;
  }

  input{
    width:100%;
    padding:10px;
    border:1px solid #ccc;
    border-radius:5px;
    box-sizing:border-box;
  }

  button{
    width:100%;
    padding:12px;
    border:none;
    border-radius:5px;
    background:#1976d2;
    color:white;
    font-size:16px;
    cursor:pointer;
  }

  button:hover{
    background:#1565c0;
  }


</style>