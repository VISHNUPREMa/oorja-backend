
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); 

const connectDB = async () => {
    try {
     
        console.log("a");
        
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1)
    }
};

export default connectDB;