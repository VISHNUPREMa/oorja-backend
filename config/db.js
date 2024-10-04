
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); 

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://vishnu:h6MZk3PIOFETLFcS@oorja.p1ahd.mongodb.net/?retryWrites=true&w=majority&appName=oorja")
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1)
    }
};

export default connectDB;