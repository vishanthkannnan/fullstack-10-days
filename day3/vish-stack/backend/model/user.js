import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  salary: Number,
})

const User = mongoose.model('users', userSchema);
export default User;