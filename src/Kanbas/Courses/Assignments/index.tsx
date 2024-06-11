import "./index.css"
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons"
import ModulesControls from "./MoudulesControls"
import { LuBook } from "react-icons/lu";
import { Routes, Route, Navigate,useParams, useLocation } from "react-router";
import * as db from "../../Database"
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, editAssignment, updateAssignment, deleteAssignment, setAssignment } from "./reducer";
import AssignmentEditor from "./Editor"
import * as client from "./client"


export default function Assignments() {

	const { cid } = useParams()
	
	
	const [assignmentName, setAssignmentName] = useState("New Assignment")
	const [assignmentTitle, setAssignmentTitle] = useState("New Assignment Description")
	const [assignmentPoints, setAssignmentPoints] = useState("100")
	
	const { assignments } = useSelector((state: any) => state.assignmentsReducer)
	const dispatch = useDispatch();
	
	console.log("In Assignment")
	console.log("In /Assignment:Assignments aid = " + cid)
	console.log("In /Assignment:Assignments is:" + JSON.stringify(assignments))
	

	const fetchAssignment = async () => {
       const modules = await client.findModulesForCourse(cid as string)
       dispatch(setAssignment(modules))
    }
    useEffect(() => {
      fetchAssignment()
    },[])

    const createAssignment = async (module:any) =>{
      const newModule = await client.createModule(cid as string, module)
      dispatch(addAssignment(newModule))
    }

    const removeAssignment = async (moduleId:string) =>{
      await client.deleteModule(moduleId)
      dispatch(deleteAssignment(moduleId))
    }

    const saveAssignment = async (module:any) => {
      const status = await client.updateModule(module)
      dispatch(updateAssignment(module))
    }
	

	return ( 

	<div id="wd-assignments"> 
		
		<ModulesControls assignmentName={assignmentName}/>

		<br /><br />	
	
			
		<ul id="wd-modules1" className="list-group rounded-0 border" >	
			
			<li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
				<div className="wd-title p-4 ps-1 bg-secondary">
					<div className = "row">
					<div className = "col-1">
					 <BsGripVertical className="me-2 fs-3 float-left" />  
					</div>
					<div className = "col-7">
					 ASSIGNMENTS 
					</div>
					<div className = "col-2 border-gray rounded-5">
					 40% of Total 
					</div>
					<div className = "col-sm">
					 + 
					</div>
					<div className = "col-sm">
					 <LessonControlButtons 
assignmentId={"none"} 
                                              /*deleteAssignment= {(assignmentId) => {
                                                              dispatch(deleteAssignment(assignmentId));
                                                            }
                                                  }*/
                                              deleteAssignment={(moduleId)=>removeAssignment(moduleId)}

                                              editAssignment= {(assignmentId) => 
                                                  dispatch(editAssignment(assignmentId))
                                                  }
					  />
					</div>
					</div>  
				</div>
			
			
			

				<ul id="wd-assignment-list" className="wd-lessons list-group rounded-0">				
				{
					assignments.filter((assignment:any)=>assignment.course===cid)
					.map( (assignment:any) => (
								
								<li className="wd-lesson list-group-item p-3 ps-1">
									<div className="row">
										<div className = "col-sm">
	  										<BsGripVertical className="me-2 	fs-3 float-left" /> 
	  									</div>
	  									<div className = "col-sm">
	  										<LuBook className="float-left"/>
	  									</div>
	  									<div className = "col-9">
	  									
	  									




	  									{/*	
	  										<a className = "wd-assignment-link" 
	  										   href={`#/Kanbas/Courses/${assignment.course}	/Assign		ments/${assignment._id}`}>
	  										   {assignment._id}-{assignment.title}</a>
	  									*/}
	  									{ !assignment.editing && assignment.title}
	  									{ assignment.editing && (
	  										<input className="form-control 2-50 d-inline-block"
	  											   onChange={e=>saveAssignment({...assignment, title:e.target.value})
	  											   }
	  											   onKeyDown={e=>{
	  											   		if(e.key === "Enter"){
	  											   			saveAssignment({...assignment, editing:false})
	  											   		}
	  											   }}
	  											   value={assignment.title}
	  											   />
	  									)
	  									}



	  										
	  										<p> <span style={{color:"red"}}> 
	  									    Multiple Modules
	  									    </span> | <b> Notavailable until</b> May6 at 	12:00am 			| <b>Due</b> May13 at 	11:59pm | {100}pts</p>
	  								    
			
	  									</div>
			
	  									<div className = "col-1">
	   									<LessonControlButtons 
assignmentId={assignment._id} 
                                              /*deleteAssignment= {(assignmentId) => {
                                                              dispatch(deleteAssignment(assignmentId));
                                                            }
                                                  }*/
                                              deleteAssignment={(moduleId)=>removeAssignment(moduleId)}

                                              editAssignment= {(assignmentId) => 
                                                  dispatch(editAssignment(assignmentId))
                                                  }
	   									 />
	   									</div>
									</div>
     							</li>
     							))
				}    			
				</ul> 
		

			</li>
		</ul> 	

		



    </div>

);}