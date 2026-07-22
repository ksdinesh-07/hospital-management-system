import express from "express"
import cors from 'cors'
import auth_route from "./routes/auth.routes.js"
import test_route from "./routes/test.routes.js"
import doctor_route from "./routes/doctor.routes.js"
import patient_route from "./routes/patient.routes.js"
import appointment_route from "./routes/appointment.routes.js"
import dashboard_routes from "./routes/dashboard.routes.js"
import error_handler from "./middleware/error.middleware.js"
import not_found from "./middleware/not_found.middleware.js"
import morgan from "morgan";
import prescription_route from './routes/prescription.routes.js'

const app=express()

app.use(morgan("dev"))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get('/',(req,res)=>{
  res.status(200).json({success:true,message:"Welcome to the Hospital Management System API"})
})

//authentication
app.use("/api/v1/auth", auth_route);
app.use("/api/v1/test",test_route);

//doctor
app.use("/api/v1/doctors",doctor_route);

//patient
app.use("/api/v1/patients",patient_route);

//appointment
app.use("/api/v1/appointments",appointment_route);

//dashboard
app.use("/api/v1/dashboard",dashboard_routes);

//prescription
app.use("/api/v1/prescriptions",prescription_route)

//express extended query parser
app.set("query parser","extended");
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(not_found)
app.use(error_handler)

export default app;
