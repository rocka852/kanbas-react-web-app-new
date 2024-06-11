import React, { useEffect, useState } from "react";
import * as client from "./client";

export default function WorkingWithObjectsAsynchronously() {
	//const [assignment, setAssignment] = useState({})
	{/*this cause error
	Property 'title' does not exist on type '{}'.
	Property 'description' does not exist on type '{}'.
	Property 'due' does not exist on type '{}'.
	Property 'completed' does not exist on type '{}'.
	*/}
	const [assignment, setAssignment] = useState<any>({})
	const fetchAssignment = async() => {
		const assignment = await client.fetchAssignment()
		setAssignment(assignment)
	}
	useEffect(()=>{fetchAssignment()}, [])


	{/*UPDATE PART*/}
	const updateTitle = async(title:string) => {
		const updatedAssignment = await client.updateTitle(title)
		setAssignment(updatedAssignment)
	}
	{/*previously we have all empty () so i didn't realize the type*/}

	return (
		<div id= "wd-asynchronous-object">
			<h3>Working with Objects Asynchronously</h3>
      		<h4>Assignment</h4>
      		<input defaultValue={assignment.title} 
      		       className="form-control mb-2"
        			onChange={(e) => setAssignment({ ...assignment, title: e.target.value }) } />
      		<textarea defaultValue={assignment.description} 
      		          className="form-control mb-2"
        			  onChange={(e) => setAssignment({ ...assignment, description: e.target.value }) }/>
            {/*textarea is a input but larger than input*/}
      		<input type="date" 
      		       className="form-control mb-2" 
      		       defaultValue={assignment.due}
        			onChange={(e) => setAssignment({ ...assignment, due: e.target.value })} />
      		
      		<div className="form-check form-switch">
        		<input className="form-check-input" 
        		       type="checkbox" 
        		       id="wd-completed"
               		   defaultChecked={assignment.completed}
          				onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked }) } />
        		<label className="form-check-label" 
        		       htmlFor="wd-completed"
        		       > 
        			   Completed 
        	    </label>
      		</div>
      		<button className="btn btn-primary me-2" 
      		        onClick={() => updateTitle(assignment.title)} 
      		        >
        			Update Title
      		</button>

      		<pre>{JSON.stringify(assignment, null, 2)}</pre>
      		{/*this gives you a prelook*/}
      		<hr />


		</div>
	)
}