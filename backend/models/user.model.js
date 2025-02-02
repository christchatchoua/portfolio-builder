import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({

firstName:{
    type: String,
    required : true // the user must enter the name
},
lastName:{
    type: String,
    required : true // the user must entertheir last name
},
email:{
    type: String,
    required : true // user must enter their emails
},
country:{
   type: String,
   required : true // user must select their country
},
picture : {
    type: String,
    required : true 
},
}, 
{
    timestamps: true // Will display when the user was createdAt and UpdatedAt

});

const User = mongoose.model('User', userSchema);

export default User;