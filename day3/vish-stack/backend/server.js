import { connectDB } from './db.js'; // Import the connectDB function
import express from 'express';

import User from './model/user.js'; // Import the User model 
const app = express();           

connectDB(); // <-- ✅ Call the function to initiate the connection


app.get('/get', async (req, res) => {
  const user = await User.find()
  res.json(user);
})



app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});
