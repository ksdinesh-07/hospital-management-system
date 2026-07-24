<template>
  <div>
    <h1>Add Doctor</h1>
    <form @submit.prevent='addDoctor'>
      <input v-model="doctor.doctor_name" placeholder="Doctor name" />
      <input v-model="doctor.specialization" placeholder="Specialization" />
      <button type="submit" >Add Doctor</button>
    </form>
  </div>
</template>


<script setup>

import { reactive } from "vue";

const doctor=reactive({
  doctor_name:'',
  specialization:''
});

const addDoctor=()=>{
  console.log(doctor)
}

</script>
