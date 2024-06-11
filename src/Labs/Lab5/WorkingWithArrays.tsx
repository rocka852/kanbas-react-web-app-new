import React, {useState} from "react"
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;


export default function WorkingWithArrays() {
	const API = `${REMOTE_SERVER}/lab5/todos`;
	const [todo, setTodo] = useState(
		{
			id: "1",
			title: "NodeJS Assignment",
			description:"Create a NodeJS server with ExpressJS",
			due: "2021-09-09",
			completed: false
		})
{/*line 10-14 added from 3.4.6 updating data on a server, because the original
   one only has {id:'1'} is not enough for this task
   the original one is a lazy version
*/}

	return(
		<div id="wd-working-with-arrays">
      		<h3>Working with Arrays</h3>
      		<h4>Retrieving Arrays</h4>
      		<a id="wd-retrieve-todos" 
      		   className="btn btn-primary" 
      		   href={API}>
        		Get Todos 
        	</a>
        	<hr/>

        	<h4>Retrieving an Item from an Array by ID</h4>
        	<a id ="wd-retrieve-todo-by-id"
        	   className="btn btn-primary float-end"
        	   href={`${API}/${todo.id}`}>
        	   Get Todo by ID
        	</a>
        	<input id="wd-todo-id" 
        	       value={todo.id}
        	       className="form-control w-50"
        	       onChange={e=>setTodo({...todo, id:e.target.value})}/>
        	<hr/>

        	<h3> Filtering Array Items</h3>
        	<a id="wd-retrieve-completed-todos"
        	   className="btn btn-primary"
        	   href={`${API}?completed=true`}>
        	   Get Completed Todos
        	</a>
        	<hr/>

        	<h3>Creating new Items in an Array</h3>
        	<a id="wd-retrieve-completed-todos"
        	   className="btn btn-primary"
        	   href={`${API}/create`}
        	   /*If you miss that $, you will go back to the main because that link fails*/
        	   /*comment in tag should not have {} */
        	   >
        	   Create Todo
        	   {/*If you miss that $, you will go back to the main because that link fails*/}
        	</a>
        	<hr/>

        	<h3>Deleting from an Array</h3>
        	<a id= "wd-retrieve-completed-todos-delete"
        	   className= "btn btn-primary float-end"
        	   href={`${API}/${todo.id}/delete`}>
        	   Delete Todo with ID = {todo.id} 
        	</a>
        	<input value={todo.id}
        	       className="form-control w-50"
        	       onChange={e=>setTodo({...todo, id:e.target.value})}/>
        	<hr/>

        	<h3>Updating an Item in an Array</h3>
        	<a className="btn btn-primary float-end"
        	   href={`${API}/${todo.id}/title/${todo.title}`}>
        	   Update Todo
        	</a>
        	<input value={todo.id}
        	       className="form-control w-25 float-start me-2"
        	       onChange={e=> setTodo({...todo, id: e.target.value})}/>
        	<input value={todo.title}
        	       className="form-control w-50"
        	       onChange={e=> setTodo({...todo, title: e.target.value})}/>
        	<br/><br/><hr/>

        	<h3>Updating Description in an Array</h3>
        	<a className="btn btn-primary float-end"
        	   href={`${API}/${todo.id}/description/${todo.description}`}>
        	   Update Description
        	</a>
        	<input value={todo.id}
        	       className="form-control w-25 float-start me-2"
        	       onChange={e=> setTodo({...todo, id: e.target.value})}/>
        	<input value={todo.description}
        	       className="form-control w-50"
        	       onChange={e=> setTodo({...todo, description: e.target.value})}/>
        	<br/><br/><hr/>

        	<h3>Updating completed in an Array</h3>
        	<a className="btn btn-primary float-end"
        	   href={`${API}/${todo.id}/completed/${todo.completed}`}>
        	   Update Complete
        	</a>
        	<input className="form-check-input "
			       id="wd-todos-complete"
			       value= "true"
			       type="checkbox"
			       onChange={e=>setTodo({...todo, completed:e.target.value=="true"})}/>	
			<label htmlFor="wd-todos-complete"
			       className="form-check-label"> Complete </label>	
			<input className="form-check-input"
			       id="wd-todos-not-complete"
			       value= "false"
			       type="checkbox"
			       onChange={e=>setTodo({...todo, completed:e.target.value=="true"})}/>	
			<label htmlFor="wd-todos-not-complete"
			       className="form-check-label"> Not Complete </label>
			<input value={todo.id}
			       className="form-control w-25 float-start me-5"
			       onChange={e=>setTodo({...todo, id:e.target.value})}/>

    	</div>

	)
}