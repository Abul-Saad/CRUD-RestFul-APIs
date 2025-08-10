import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import ItemRoutes from './routes/ItemRoutes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/items", ItemRoutes);

connectDB();
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});