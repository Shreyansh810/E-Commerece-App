import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoutes.js';
import productRouter from './routes/productRoutes.js';
import cartRouter from './routes/cartRoutes.js';

const app = express();
const PORT = process.env.PORT || 5003;
connectDB();
connectCloudinary();

// middleware
app.use(express.json());
app.use(cors());

// api endpoints

app.use('/api/user', userRouter);

app.use('/api/product', productRouter);

app.use('/api/cart', cartRouter);

app.get('/', (req, res) => {
    res.send("API Working");
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})