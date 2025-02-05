import express from 'express';
import dotenv from 'dotenv';
import {connect_db} from "./config/db.js";
import userRoute from "./routes/user.route.js";


//import {errorHandler} from "./config/error-handler.js";// the error handling middleware to somehow handle all my errors

dotenv.config()

const app = express ();
const PORT = process.env.PORT || 5000 ;

app.use(express.json()); // allows JSON data to be accepted in the body 


app.use("/api/users",userRoute );


app.get("/",(req,res)=>{
    res.send("Server is on! ✅")
});

app.listen(PORT,() => {
    connect_db();
    console.log("Server started at http://localhost:" + PORT );
} );