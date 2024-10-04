import express from 'express';
const app = express();
import cors from 'cors';
import connectDB from './config/db.js'; 
// import userRoutes from './routes/userRoutes.js';
import adminRoutes from './routes/adminRoutes.js'

app.use(express.json())
app.use(cors());
connectDB();
app.get('/', (req, res) => {
    res.send("Hello World");
});

// app.use('/', userRoutes);
app.use('/admin', adminRoutes);

app.listen(3000, () => {
    console.log('Server running on port 3000');
  });