import dotenv from "dotenv";
import app from "./app.js";
import connect_db from "./config/db.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const start_server=async()=>{
    try{
        await connect_db()
        app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`) });
    }

    catch(err){
        console.error(err);
        process.exit(1)
    }
};
start_server();
