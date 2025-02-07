import mongoose from 'mongoose';
import User from '../models/user.model.js';
import {createSecretToken} from '../config/secretToken.js';

export const signup = async (req , res) => {
    const { firstName, lastName, email , country , picture , password } = req.body; // The content of the request body will be passed in a user variable

    if (!user.firstName || !user.lastName ||!user.email ||!user.country || !user.password) {
        return res.status(400).json({success: false , message: " ❌ Please fill out all fields! "})
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.json({ message: "User already exists " });
      }

    const newUser = new User (user)
     const user = await User.create({ firstName, lastName, email , country , picture , password });
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
      res.status(200).json({ success: true , message: "User profile deleted 🚽"}); // Need a dustbin emoji here
    } catch (error){
       console.error("User not deleted❌")
    }
};


export const login = async (req ,res) => {

}; 

export const logout = async (req ,res) => {
    
}; 