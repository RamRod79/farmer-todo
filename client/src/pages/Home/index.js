import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import totoro from "./images/Totoro-Background.jpeg";
import { TodoContext } from '../../TodoContext';
import Auth from '../../utils/auth'

import AddTodos from '../../components/Todo/AddTodos';
import Todo from '../../components/Todo/Todo';
import { useState } from 'react';
import './home.css';

function Home() {
	// const [selectedId, setSelectedId] = useState(0);
	const { loading, error, data } = useQuery(QUERY_ME);
	if (loading) return <p>Loading.........</p>
	// if (error) return <h2>{error.message}</h2>
	// console.log(data);
	const todos = data?.me || [];
	console.log(todos);
	return (
		<div>
			{Auth.loggedIn()?(
				<main className="bg_image"
				style={{
					backgroundImage: `url(${totoro})`,
					backgroundSize: "cover",
					height: "100vh",
					color: "#F5F5F5",
					flex: "center"
				}}>
 <div style={{height: '100%'}}>
	{todos && (
		<div className='container todobox'>
				<AddTodos />
				<div className="list-group mt-4">
					{todos.todos.map(todo => (

						<Todo key={todo._id}
							_id={todo._id}
							title={todo.title}
							detail={todo.detail}
							date={todo.date}
						/>
					))}
				</div>
			</div>
	)}
	</div>
</main>
			):(
				window.location.assign("/login")
			)}
		
		</div>
	);
}

export default Home;