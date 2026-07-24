<template>
  <div>
    <h1>Dashboard</h1>
      <div class="stats">
        <StatCard title="Doctors" :value="doctors.length" />

        <StatCard title="Patients" :value="patients.length" />

        <StatCard title="Appointments" :value="appointments.length" />

        <StatCard title="Prescriptions" :value="prescriptions.length" />


      </div>

      <DoctorCard v-for='doctor in doctors' :key="doctor._id" :doctor='doctor' />
  </div>
</template>

<script setup>
  import {onMounted,ref } from 'vue';
  import {get_all_doctors} from '@/services/doctor.service';
  import {get_all_patients} from '@/services/patient.service'
  import {get_all_appointments} from '@/services/appointment.service'
  import {get_all_prescriptions} from '@/services/prescription.service'
  import DoctorCard from "@/components/doctor/DoctorCard.vue"
  import StatCard from '@/components/dashboard/StatsCard.vue'

  const doctors=ref([]);
  const patients=ref([]);
  const appointments=ref([]);
  const prescriptions=ref([]);

  onMounted(async ()=>{
    try{
      const doctor_response=await get_all_doctors();
      doctors.value=doctor_response.data.data;


      const patient_response=await get_all_patients();
      patients.value=patient_response.data.data;

      const appointment_response=await get_all_appointments();
      appointments.value=appointment_response.details?.data;

      const prescriptions_response=await get_all_prescriptions();
      prescriptions.value=prescriptions_response.data.data;

    }catch(err){
      console.log(err.response?.data || err)
    }

  })
</script>

<style scoped>

.stats{
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
}

</style>