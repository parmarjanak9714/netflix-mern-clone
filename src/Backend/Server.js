import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './Config/Db.js';

//new route file import
import AuthRoute from './routes/AuthRoute.js';

import AdminRoute from './routes/AdminRoute.js';

dotenv.config();

const app = express();

// --- MIDDLEWARES ---
app.use(cors());
app.use(express.json());

// --- DATABASE CONNECTION ---
connectDB();

// ---  ૨. API ROUTES ACTIVATION ---

app.use('/api/auth', AuthRoute);

app.use('/api/admin', AdminRoute);

// --- BASIC API TESTING ROUTE ---
app.get('/', (req, res) => {
  res.send('API is running successfully...');
});

// --- SERVER LISTENING PORT ---
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running beautifully on port ${PORT}`);
});
