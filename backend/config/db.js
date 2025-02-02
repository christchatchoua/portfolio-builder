import mongoose from "mongoose";

export const connect_db= async ()=> {
    try{
        const conn = await mongoose.connect(process.env.mongodb_uri);
        
    }
    catch (error) {}
};