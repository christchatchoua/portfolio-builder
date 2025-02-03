import mongoose from "mongoose";

export const connect_db = async ()=> {
    try{
        const conn = await mongoose.connect(process.env.mongodb_uri);
        console.log(`✅ MongoDB Connected : ${conn.connection.host}`);
        
    }
    catch (error) {
        console.error(`Error : ${error.message}`);
        process.exit(1); // process code 1 means exit with failure , 0 means success
    }
};