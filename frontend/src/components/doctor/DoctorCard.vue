<template>
  <div class="doctor-card" @click="go_to_details" >
    <h3>{{doctor.doctor_name}}</h3>
    
    <p>
      <strong>Specialization</strong>
      {{doctor.specialization}}
    </p>

    <p>
      <strong>Expericence</strong>
      {{doctor.experience}} Years
    </p>

    <p>
      <strong>consultation Fee</strong>
      {{doctor.consultationFee}} rupees
    </p>
  </div>
</template>

<script setup>

import {useRouter} from 'vue-router'

const router=useRouter();

const go_to_details=()=>{
  router.push(`/doctors/${props.doctor._id}`)
}


const props=defineProps({
doctor:Object,
editable:Boolean,
index:Number
})

</script>

<style scoped>

.doctor-card{
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 15px;
}
</style>