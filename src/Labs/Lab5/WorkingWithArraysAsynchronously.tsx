import React, { useState, useEffect } from "react";
import * as client from "./client";
import { FaTrash, FaPlusCircle } from "react-icons/fa";
export default function WorkingWithArraysAsynchronously() {
	const [todos, setTodos] = useState<any[]>([]);
  	
  	const fetchTodos = async () => {
    	const todos = await client.fetchTodos();
    	setTodos(todos);
    };

    useEffect(() => {
    		fetchTodos();
  			}, []);
  	const removeTodo = async(todo:any)=>{
  		const updateTodos = await client.removeTodo(todo)
  		setTodos(todos)
  	}
  	const createTodo = async()=>{
  		const todos= await client.createTodo()
  		setTodos(todos)
  	}
  	

  	return(
  		<div id="wd-asynchronous-arrays">
      		<h3>Working with Arrays Asynchronously</h3>
      		<h4>
      			Todos
      			<FaPlusCircle onClick={createTodo}
      			              className="text-success float-end fs-3"
      			              id="wd-create-todo"
      			              />

      		</h4>
      		<ul className="list-group">
      		{
      			todos.map(todo=>{
      				return(
      				<li key={todo.id}
      				    className="list-group-item">
      				    <FaTrash onClick={()=>removeTodo(todo)}
      				             className="text-danger float-end mt-1"
      				             id = "wd-remove-todo"
      				    		 />
      				    <input type="checkbox"
      				           className="form-check-input me-2"
      				           defaultChecked={todo.completed}
      				    />
      				    <span style = {{textDecoration:todo.completed ? "line-through": "none"}}
      				          >
      				          {todo.title}
      				    </span>
      				</li>
      				)
      			})
	      	}
	      	</ul>
	      	{/*
	      		arrow function with {} will crush only () accepted
	      		()=>() may means return
	      		(a)=>(b)   -> (a)=>{return(b)} they omitted return keyword
	      		(a) => b should be single line, since we have multiple lines
	      		TS2322: Type 'void[]' is not assignable to type 'ReactNode'.
  					Type 'void[]' is not assignable to type 'Iterable<ReactNode>'.
    				The types returned by '[Symbol.iterator]().next(...)' are incompatible between these types.
      				Type 'IteratorResult<void, any>' is not assignable to type 'IteratorResult<ReactNode, any>'.
        			Type 'IteratorYieldResult<void>' is not assignable to type 'IteratorResult<ReactNode, any>'.
          			Type 'IteratorYieldResult<void>' is not assignable to type 'IteratorYieldResult<ReactNode>'.
            		Type 'void' is not assignable to type 'ReactNode'.
	      	*/}
	      	
	      	<hr/>



      	</div>
  	)
}