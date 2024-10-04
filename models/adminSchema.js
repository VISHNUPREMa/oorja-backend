import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
   
   isAdmin:{
    type: Boolean,
    default: true, 
   },
    password: {
        type: String,
        required: true,
    },
    isSuperAdmin: {
        type: Boolean,
        default: false, 
    },
}, {
    timestamps: true,
});

const Admin = mongoose.model('Admin', adminSchema);
export default Admin;
