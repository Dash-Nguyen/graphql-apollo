import mongoose from 'mongoose';
import { userSchema } from './mongooseSchemas';

export const User = mongoose.model('User', userSchema);
