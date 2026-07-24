import {createRouter,createWebHistory} from "vue-router"

import login_view from "../views/LoginView.vue"
import dashboard_view from "../views/DashboardView.vue"
import doctor_view from "../views/DoctorView.vue";
import patient_view from "../views/PatientView.vue";
import appointment_view from "../views/AppointmentView.vue";
import prescription_view from "../views/PrescriptionView.vue";
import add_doctor_view from '../views/AddDoctorView.vue'


const router=createRouter({
  history:createWebHistory(),

  routes:[
    {
      path:'/',
      redirect:'/login'
    },
    {
      path:'/login',
      name:'login',
      component:login_view
    },
    {
      path:'/dashboard',
      name:'dashboard',
      component:dashboard_view
    },
    {
      path:'/doctors/:id',
      name:'doctors-details',
      component:doctor_view
    },
    {
      path:'/patients',
      name:'patients',
      component:patient_view
    },
    {
      path:'/appointments',
      name:'appointments',
      component:appointment_view
    },
    {
      path:'/prescription',
      name:'prescription',
      component:prescription_view
    },
    {
      path:'/doctors/add',
      name:"add-doctor",
      component:add_doctor_view
    }
  ]
})

export default router;