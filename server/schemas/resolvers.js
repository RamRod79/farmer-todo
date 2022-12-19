const { AuthenticationError } = require('apollo-server-express');
const { User, Todo } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
	Query: {
		users: async () => {
			return await User.find({}).select('-password');
		},
		me: async (parent, args, context) => {
			if (context.user) {
				const userData = await User.findOne({ _id: context.user._id }).populate("todos");

				return userData;
			}

			throw new AuthenticationError('Not logged in');
		},
		// getTodos: async (parent, args, context) => {
		// 	if (context.user) {
		// 		const todos = await Todo.find();
		// 		return todos;
		// 	}

		// 	throw new AuthenticationError('Please Login');


		// },
		// getTodo: async (root, args) => {
		// 	const todo = await Todo.findById(args.id);
		// 	return todo;
		// },
	},


	Mutation: {
		addUser: async (_, args) => {
			const user = await User.create(args);
			const token = signToken(user);

			return { token, user };
		},

		login: async (parent, { email, password }) => {
			const user = await User.findOne({ email });

			if (!user) {
				throw new AuthenticationError('No User with this email found!');
			}

			const correctPw = await user.isCorrectPassword(password);

			if (!correctPw) {
				throw new AuthenticationError('Incorrect password!');
			}

			const token = signToken(user);
			return { token, user };
		},


		addTodo: async (root, args, context) => {
			if (context.user) {
				const todo = await Todo.create(args);
				console.log(todo);
				const newTodo = await User.findByIdAndUpdate(
					{ _id: context.user._id },
					{ $push: { todos: todo._id } },
					{ new: true }
				);
				return newTodo


			}
			throw new AuthenticationError('Please Login to Add');

		},


		deleteTodo: async (root, args, context) => {
			if (context.user) {
				await Todo.findByIdAndDelete(args._id);
				await User.findOneAndUpdate(
					{ _id: context.user._id },
					{ $pull: { todos: args._id } },
					{ new: true }
				)
				return 'Your todo has been deleted sucessfully'
			}
			throw new AuthenticationError('Please Login to Delete');
		},
		// updateTodo: async (root, args, context) => {
		// 	if (context.user) {
		// 		const { id, title, detail, date } = args
		// 		const updatedTodo = {};

		// 		if (title != undefined) {
		// 			updatedTodo.title = title;
		// 		}
		// 		if (detail != undefined) {
		// 			updatedTodo.detail = detail;
		// 		}
		// 		if (date != undefined) {
		// 			updatedTodo.date = date;
		// 		}
		// 		const todo = await Todo.findByIdAndUpdate(id, updatedTodo, { new: true })
		// 		return todo;
		// 	}
		// 	throw new AuthenticationError('Please Login to Update');


	},

}



module.exports = resolvers;
