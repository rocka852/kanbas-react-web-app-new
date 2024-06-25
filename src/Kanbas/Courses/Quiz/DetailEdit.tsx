import { useState } from "react"
import { useLocation, useParams } from "react-router"
import { Link, useNavigate } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux";

import { BsThreeDotsVertical } from "react-icons/bs";
import { MdNotInterested } from "react-icons/md";

import { setCurrentQuiz, addQuiz } from "./reducer"
import * as client from "./client";

export default function DetailEdit() {
	const { pathname } = useLocation();
	const { cid, qid } = useParams()
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const point = 0
	/*
	const [ quizName, setQuizName ] = useState("Unnamed Quiz")
	const [ instructions, setInstructions ] = useState("")
	const [ quizType, setQuizType ] = useState("Graded Quiz")
	const [ assignmentGroup, setAssignmentGroup ] = useState("Quizzes")
	const [ quizTime, setQuizTime ] = useState("20")
	const [ quizDue, setDue ] = useState("2024-06-01")
	const [ available, setAvailable] = useState("2024-05-01")
	const [ until, setUntil] = useState("2024-06-01")
	const [ shuffleAnswers, setShuffleAnswers] = useState(true)
	const [ timeLimit, setTimeLimit] = useState(true)
	const [ allowMultiple, setAllowMultiple] = useState(false)*/
	const [ quizObject, setQuizObject] = useState<any>({
		quizId:qid,
		course:cid,
		quizName:"",
		instructions:"",
		quizType:"",
		assignmentGroup:"",
		totalScore:"",
		quizTime:"20",
		quizDue:"",
		available:"",
		until:"",
		shuffleAnswers:true,
		timeLimit:true,
		allowMultiple:false,
		published:false,
		viewResponses:"Always",
		showCorrectAnswers:"Immediately",
		oneQuestionAtATime:"Yes",
		requireRespondusLockDown:"No",
		browser:"",
		requireToViewQuizResults:"No",
		webCamRequired:"No",
		lockQuestionsAfterAnswering:"No",
		forEveryOne:"Everyone",
		questions:[]
	})

	const { stateQuiz } = useSelector((state:any) => state.quizReducer)

	const saveQuiz = async() => {
		const currentQuiz = await client.createQuiz(quizObject)
		dispatch(setCurrentQuiz(currentQuiz))
		navigate(`/Kanbas/Courses/${cid}/Quizzes/${quizObject.quizId}`)
	}

	const publishQuiz = async() => {
		quizObject.published = true
		const currentQuiz = await client.createQuiz(quizObject)
		dispatch(setCurrentQuiz(currentQuiz))
		navigate(`/Kanbas/Courses/${cid}/Quizzes/`)
    }

	return(
		<div>
			<h1>Detail Editor</h1>
			<div id="header">
				<button className="float-end p-2 ms-1 rounded border-0">
					<BsThreeDotsVertical/>
				</button>
				<button className="float-end btn me-2">
					<MdNotInterested/>
					Not Published
				</button>
				<h5 className="float-end mt-2 me-2">{`Point ${point}`}</h5>
			</div><br/><br/>
			<hr />

			<div id="navgation-tabs">
				<ul className="nav nav-tabs">
					<li className="nav-item">
						<Link to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/DetailEdit`}
						className={`nav-link ${pathname.includes("DetailEdit") ? "active" : ""}`}>Details</Link>

					</li>
					<li className="nav-item">
						<Link to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/Questions`}
						className={`text-danger nav-link ${pathname.includes("Questions") ? "active" : ""}`}>Questions</Link>
					</li>
				</ul>
			</div>
			<br/>

			<div id="body">
				<input className="form-control w-50"
				       placeholder="Unnamed Quize"
				       onChange={e=>setQuizObject({...quizObject, quizName:e.target.value})}/>
				<br/>
				Quiz Instructions:
				<textarea className="form-control"
				          onChange={e=>setQuizObject({...quizObject, instructions:e.target.value})}
				/>
				<br/>

				
				<div className="row mb-3">
					<label htmlFor="r1"
					       className="col-sm-3 col-form-label text-end">
					       Quiz Type
					</label>
					<div className="col-sm-6">
						<select className="form-select"
					      	    id="r1"
					      	    onChange={e=>setQuizObject({...quizObject, quizType:e.target.value})}>
					      	    <option value ="Graded Quiz" 
					      	            selected
					      	            >
					      	            Graded Quiz
					      	    </option>
					      	    <option value="Practice Quiz"
					      	            >
					      	            Practice Quize
					      	    </option>
					      	    <option value="Graded Survey"
					      	            >
					      	            Graded Survey
					      	    </option>
					      	    <option value="Ungraded Survey"
					      	            >
					      	            Ungraded Survey
					      	    </option>
					    </select>
					</div>
			    </div>

			    <div className="row mb-3">
					<label htmlFor="r=2"
					       className="col-sm-3 col-form-label text-end">
					       Assignment Group
					</label>
					<div className="col-sm-6">
						<select className="form-select"
					      	    id="r2"
					      	    onChange={e=>setQuizObject({...quizObject, assignmentGroup:e.target.value})}>
					      	    <option value ="Quizzes" 
					      	            selected
					      	            >
					      	            Quizzes
					      	    </option>
					      	    <option value="Exams"
					      	            >
					      	            Exams
					      	    </option>
					      	    <option value="Assignment"
					      	            >
					      	            Assignment
					      	    </option>
					      	    <option value="Project"
					      	            >
					      	            Project
					      	    </option>
					    </select>
					</div>
			    </div>

			    <div className = "row mb-3">
			    	<div className = "col-sm-3">
			    	</div>
			    	<div className = "col-sm-9">
			    		<h6><b> Options </b></h6>
			    		<div className="form-check mt-2">
			    			<input className="form-check-input"
			    		       	   type="checkbox"
			    		           defaultChecked={quizObject.shuffleAnswers}
			    		           onChange={(e)=>
			    		                         setQuizObject({...quizObject, shuffleAnswers: !quizObject.shuffleAnswers})}
			    		           id="checkbox1"/>
			    			<label className="form-check-label"
			    		           htmlFor="checkbox1"
			    		           >
			    		           Shuffle Answers
			    		    </label>
			    		</div>
			    		<div className="form-check mt-2">
			    			<input className="form-check-input"
			    		           type="checkbox"
			    		           value=""
			    		           defaultChecked={quizObject.timeLimit}
			    		           onChange={e=>setQuizObject({...quizObject, timeLimit: !quizObject.timeLimit})}
			    		           id="checkbox2"/>
			    			<label className="form-check-label"
			    		           htmlFor="checkbox2">
			    		           Time Limit
			    			</label>
			    			<input className="ms-5 me-2"
			    		           style={{width:"45px"}}
			    		           placeholder = {quizObject.quizTime}	
			    		           onChange= {e=> setQuizObject({...quizObject, quizTime:e.target.value})}/>
			    			<label >
			    			       Minutes
			    		    </label>
			    		    <div className="from-check mt-2">
			    		    	<input className="form-check-input"
			    		       	   type="checkbox"
			    		           value=""
			    		           defaultChecked={quizObject.allowMultiple}
			    		           onChange={e=>setQuizObject({...quizObject, allowMultiple: !quizObject.allowMultiple})}
			    		           id="checkbox3"/>
			    				<label className="form-check-label"
			    		           htmlFor="checkbox3">
			    		           Allow Multiple Attempts
			    		        </label>
			    		    </div>
			    		</div>
			    	</div>
			    </div>

			    <div className = "row mb-3">
			    	<label htmlFor="r1"
					       className="col-sm-3 col-form-label text-end mt-2">
					       Assign
					</label>
					<div className = "col-sm-9">
				    	<div className = "border mt-3 p-2">
				    		<h6 className = "pt-3"><b> Assign to </b></h6>				<div className="input-group mb-3">
	              				<span className="input-group-text">Everyone</span>
	              				<span className="input-group-text">x</span>
	              				<input type="text" className="form-control" />
	               			</div>
	
					        
					        <h6 className = "pt-3"><b> Due </b></h6>
				    		<input className="form-control"
				    		       type="date"
					       		   value={quizObject.quizDue}
					       		   onChange={e=>setQuizObject({...quizObject, quizDue:e.target.value})}/>
					        <div className="row">
	                			<div className="col-6">
	                				<label htmlFor="wd-available-from"
	                				       > 
	                				       Available from: 
	                				</label> 
	                				<input type="date" 
	                				       id="wd-available-from" 
	                				       className="form-control mb-2" 
	                				       value={quizObject.available} 
	                				       onChange={(e)=>setQuizObject({...quizObject, available:e.target.value})}/>
	                			</div>
	                			<div className="col-6">
	                				<label htmlFor="wd-available-from"
	                				       >
	                				       Until: 
	                				</label> 
	                				<input type="date" id="wd-available-from" 	className="form-control" value={quizObject.until} 	onChange={(e)=>setQuizObject({...quizObject, until:e.target.value})}/>
	                			</div>
	                		</div>			    		
			    		</div>
			    		<div id ="submit-buttons"
			    		     className = "mt-2 d-flex justify-content-center">
			    			 <button className="btn btn-light"
				        			 onClick={()=>navigate(`/Kanbas/Courses/${cid}/Quizzes/`)}
				        			 >
								     Cancle
							 </button>
							 <button className="btn btn-danger ms-3"
				        		     onClick={
				        		     saveQuiz}
				        		     >
									 Save
							</button>
							<button className="btn btn-primary ms-3"
				        		     onClick={publishQuiz}
				        		     >
									 Save & Publish
							</button>
			    		</div>
			    	</div>
			    	{<div>
			    		<h1> Test </h1>
			    		{quizObject.quizId}<br/>
			    		{quizObject.quizName}<br/>
			    		{quizObject.instructions}<br/>
			    		{quizObject.quizType}<br/>
			    		{quizObject.assignmentGroup}<br/>
			    		{quizObject.quizTime}<br/>
			    		{quizObject.quizDue}<br/>
			    		{quizObject.available}<br/>
			    		{quizObject.until}<br/>
			    		{JSON.stringify(quizObject.shuffleAnswers)}<br/>
			    		{JSON.stringify(quizObject.timeLimit)}<br/>
			    		{JSON.stringify(quizObject.allowMultiple)}<br/>
			    		
			    	 </div>}
			    </div>

			 


			</div>
		</div>
	)
}