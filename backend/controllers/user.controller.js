import mongoose from 'mongoose';
import User from '../models/user.model.js';

export const createUser = async (req , res) => {
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
};

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
      await User.findByIdAndDelete(id);
      res.status(200).json({ success: true , message: "User profile deleted ✅"}); // Need a dustbin emoji here
    } catch (error){
       console.error("User not deleted❌")
    }
};