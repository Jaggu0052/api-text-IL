import express, { Request, Response } from 'express';
import { connectDB } from './db';
import userRoutes from './router/user.router';
import dotenv from 'dotenv';

dotenv.config();

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


// Required for Vercel Serverless Export
connectDB();

export default app;
