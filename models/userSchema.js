import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true, 
        trim: true,
    },
    emailId: {
        type: String,
        required: true,
        unique: true, 
        trim: true,
    },
    role: {
        type: [String], 
        required: true,
        enum: ['digital-advisor','farm-advisor','both'], 
    },
    assetAssigned: {
        type: [String], 
        default: [], 
    },
    status: {
        type: String,
        enum: ['onboarder', 'pending'], 
       
    },
    password:{
        type: String,
        required:true
    },
}, {
    timestamps: true, 
});


const User = mongoose.model('User', userSchema);
export default User;
