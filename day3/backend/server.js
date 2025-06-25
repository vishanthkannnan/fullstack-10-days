import { connectDB } from './db.js';
import express from 'express';
import User from './model/user.js';
import  cors from 'cors';
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file
const app = express();           

app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded());

// const method= (req,res,next)=>{
//   if(req.method === 'DELETE'){
//     res.send('DELETE METHOD NOT ALLOWED');
//   } else {
//     next();
//   }
// }
// app.use(method);
connectDB(); 

app.get('/get', async (req, res) => {
  const users = await User.find({});
  res.json(users);
})

app.post('/post', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    res.status(401).json(error);
  }
})

app.put('/put/:id', async (req, res) => {
  try {
    const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ msg: 'User updated successfully', updated });
  } catch (error) {
    res.json(error)
    }
})
// app.delete('/delete/:id', async (req, res) => {
//   try {
//     const deleted = await User.findByIdAndDelete(req.params.id);
//     res.json({msg: 'User deleted successfully', deleted});
//   } catch (error) {
//     res.json(error)
//   }
// })


app.listen(4000, () => {
  console.log('Server is running at http://localhost:4000');
}); 
