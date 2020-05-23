import { User } from '../../models/User';

export default {
	Query: {
		getUserByID: (_, { id }) => {
			return User.findById(id, (err, user) => {
				return user;
			});
		},
		getAllUser: () => {
			return User.find({}, (err, users) => {
				return users;
			});
		}
	},
	Mutation: {
		createUser: async (_, { input: { name, email, phoneNumber, address } }) => {
			const createDate = new Date();
			const user = new User({ name, email, phoneNumber, address, createDate });
			await user.save();
			return user;
		}
	}
};
