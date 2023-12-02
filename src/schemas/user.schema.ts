import mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  login: String,
  id: String,
  roles: [String],
});

export const USER_MODEL_NAME = 'User';
