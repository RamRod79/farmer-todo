import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
	query Query {
		users {
			username
			email
			_id
		}
	}
`;

export const QUERY_ME = gql`
	query Query {
  me {
    _id
    email
    todos {
      date
      detail
      _id
      title
    }
    username
  }
}
`;


