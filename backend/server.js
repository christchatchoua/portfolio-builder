import express from 'express';
import dotenv from 'dotenv';
import {connect_db} from "./config/db.js";
//import userRoute from "./routes/user.route.js";
import {errorHandler} from "./config/error-handler.js";// the error handling middleware to somehow handle all my errors

dotenv.config()

const app = express ();
const PORT = process.env.PORT || 5000 ;

app.use(express.json()); // allows JSON data to be accepted in the body 

app.use((req, res, next) => {
    console.log(`Request received: ${req.method} ${req.url}`);// Middleware for logging requests
    next();
  });

// Restful API to create a new user
app.post("/api/users", async (req,res) => {
    const user = req.body; // The content of the request body will be passed in a user variable

    if (!user.firstName || !user.lastName ||!user.email ||!user.country) {
        return res.status(400).json({success: false , message: " ❌ Please fill out all fields! "})
    }

    const newUser = new User (user)
    
    try{
        await newUser.save();
        res.status(201).json({ success: true, data: newUser});
    } catch (error) {
        console.error ("❌ Error in creating your profile", error.message);
    }
});

app.get("/",(req,res)=>{
    res.send("Server is on!")
});

app.listen(PORT,() => {
    connect_db();
    console.log("Server started at http://localhost:" + PORT );
} );