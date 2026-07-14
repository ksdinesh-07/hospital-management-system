import mongoose from "mongoose"

const connect_db=async ()=>{
  try{
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("mongodb connected successfully")
  }
  catch (err){
    console.error("mongodb connection failed")
    console.error(err.message)
    process.exit(1);
  }
}

export default connect_db;