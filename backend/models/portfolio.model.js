import mongoose from 'mongoose';

const portfolioSchema = new mongoose.Schema({
 aboutMe :{
    type: String,
    required : true
 },
});
