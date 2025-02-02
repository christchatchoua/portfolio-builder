import express from 'express';
import dotenv from 'dotenv';

dotenv.config()

const app = express ();

console.log(process.env.mongodb_uri);

app.get("/",(req,res)=>{
    res.send("Server is on!")
});

app.listen(5000,()=>{
    console.log("Server started at http://localhost:5000")
} );