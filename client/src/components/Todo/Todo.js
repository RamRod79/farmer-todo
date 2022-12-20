import React from "react";
import moment from "moment";
import { GET_TODOS, QUERY_ME } from "../../utils/queries";
import AddTodos from "../../components/Todo/AddTodos";
import { useMutation } from "@apollo/client";
import { DELETE_TODO ,UPDATE_TODO } from "../../utils/mutations";
import "./Todo.css";
import { Link } from "react-router-dom";

const Todo = ({ _id, title, date, detail }) => {
  const [deleteTodo] = useMutation(DELETE_TODO);

  const removeTodo = (_id) => {
    deleteTodo({
      variables: {
        id: _id,
      },
      refetchQueries: [QUERY_ME],
    });
    window.location.reload();
  };
    
  return (
           <div
          className='list-group-item list-group-item-action'
          aria-current='true'
        >
          <div className= "w-100 justify-content-between">
            <h5 className="mb-1">{title}</h5>
            <small>{moment(date).format("MMMM DD YYYY")}</small>
          </div>
          <p className="mb-1">{detail}</p>
          <small>
            <i
              onClick={() => removeTodo(_id)}
              className="fa-solid fa-trash-can"
            ></i>{""}
            <Link to={`/edit/${_id}`} state={{ _id, title, detail, date }} className="fa-solid fa-pencil"></Link>
          </small>
        </div>
    );
  };

export default Todo;
