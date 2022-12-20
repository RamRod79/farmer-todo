const { gql } = require('apollo-server-express');

const typeDefs = gql`
	scalar Date
	type User {
		_id: ID
		username: String
		email: String
		todos:[Todo]
	}

	type Auth {
		token: ID!
		user: User
	}

	type Query {
		users: [User]
		me: User
		
	}
	type Todo {
		_id:ID
		title:String
		detail:String
	    date:Date
	}

	type Mutation {
		addUser(username: String!, email: String!, password: String!): Auth
		login(email: String!, password: String!): Auth
		deleteTodo(_id:ID):User
		addTodo(title:String,detail:String,date:Date):User
		updateTodo(_id:ID,title:String,detail:String,date:Date):User

		
	}
`;

module.exports = typeDefs;


// deleteTodo(_id:ID):String
// 		updateTodo(_id:ID,title:String,detail:String,date:Date):Todo