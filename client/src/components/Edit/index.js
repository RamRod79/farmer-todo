import { from, useMutation } from "@apollo/client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { useLocation } from "react-router-dom";


// import './Todo.css';

import moment from 'moment'
import { TodoContext } from "../../TodoContext";
import { QUERY_ME } from "../../utils/queries";
import { UPDATE_TODO } from "../../utils/mutations";

function Edit(){
    const location= useLocation()
    const {_id} = location.state
    const [todoState,setTodoState]=useState(
        location.state
        
)
const [updateTodo] = useMutation(UPDATE_TODO)
  
        useEffect(()=>{window.scrollTo(0,0)},[])
    
    const onSubmit = event => {
        event.preventDefault();
        updateTodo({
            variables:{
                id:_id,
                title:todoState.title,
                detail:todoState.detail,
                date:moment(todoState.date).format("YYYY-MM-DD"),
            },
          
        })
        window.location.assign("/")
    }
    
    

return (
    <form className="form" onSubmit={onSubmit} >
        <div className="mb-3 form-group">
            <label>Title</label>
            <input type="text" className="form-control"  defaultValue={todoState.title} onChange={e =>setTodoState({...todoState,title:e.target.value})} />

        </div>
        <div className="mb-3">
            <label>Details</label>
            <input type="text" className="form-control"  defaultValue={todoState.detail } onChange={e =>setTodoState({...todoState,detail:e.target.value})}/>
        </div>
        <div className="mb-3">
            <label>Date</label>
            <input className="form-control"  defaultValue={moment(todoState.date).format("YYYY-MM-DD")} onChange={e =>setTodoState({...todoState,date:e.target.value})} />
        </div>
        <button type="submit" className="btn btn-success">Update</button>
    </form>
)
}

export default Edit