import express from "express"
import cors from 'cors'
import auth_route from "./routes/auth.routes.js"

const app=express()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=>{
  res.status(200).json({success:true,message:"Welcome to the Hospital Management System API"})
})

app.use("/api/v1/auth", auth_route);

export default app
