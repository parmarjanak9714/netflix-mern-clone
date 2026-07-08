import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique:true 
    },
    password:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    role:{
        type: String,
        enum: ['User', 'Admin'], // 🎯 ઓરિજિનલ કેપિટલ અક્ષરો
        default: 'User'  
    },
    status:{
        type: String,
        enum: ['Active', 'Deactivated'], // 🎯 ઓરિજિનલ કેપિટલ અક્ષરો
        default: 'Active'
    },
    LastLoginAt:{
        type: String,
        default: null 
    }
},
{
     timestamps: true 
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
