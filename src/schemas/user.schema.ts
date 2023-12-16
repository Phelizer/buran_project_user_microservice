import mongoose from 'mongoose';
import { ROLES } from '../models/role.model';
import { User } from 'src/models/user.model';

export const UserSchema = new mongoose.Schema<User>({
  id: String,
  first_name: String,
  last_name: String,
  email: String,
  registration_date: Date,
  age: Number,
  sex: {
    type: String,
    enum: ['male', 'female'],
  },
  roles: {
    type: [String],
    enum: Object.values(ROLES),
  },
});

export const USER_MODEL_NAME = 'User';
