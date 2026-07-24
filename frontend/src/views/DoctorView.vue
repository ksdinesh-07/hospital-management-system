<template>
  <div v-if="doctor">
    <h1>{{doctor.doctor_name}}</h1>
    <p>{{doctor.specialization}}</p>
    <p>{{doctor.experience}}</p>
    <p>{{doctor.consultationFee}}</p>
  </div>
</template>

<script setup>

  import {useRoute} from 'vue-router'
  import {ref,onMounted} from 'vue'
  import {get_doctor_by_id} from '../services/doctor.service.js';


  const route =useRoute();
  const doctor=ref(null);

  onMounted(async () =>{
    try{
      const response=await get_doctor_by_id(route.params.id)
      console.log(response)

      doctor.value=response.data;


    }catch(err){
      console.log(err.response?.data || err);
    }
  })



</script>
