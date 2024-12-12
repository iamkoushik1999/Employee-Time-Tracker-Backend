// Packages
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import cookieParser from 'cookie-parser';
import compression from 'compression';
// Database
import connectDB from './config/dbConfig.js';
connectDB();
// Middleware
import { errorHandler } from './middlewares/errorMiddleware.js';

// Routes

// App
const app = express();
// Use
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
app.use(compression());

// Routes

// Error Handler
app.use(errorHandler);

export default app;
