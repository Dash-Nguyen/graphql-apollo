import { Schema } from 'mongoose';

export const userSchema = new Schema({
	name: String,
	email: String,
	phoneNumber: String,
    address: String,
    createDate: String
});
