import { useState, useEffect} from "react"
import { useNavigate, useLocation, useParams } from "react-router"
import { Link } from "react-router-dom"

import { BsThreeDotsVertical } from "react-icons/bs";
import { MdNotInterested } from "react-icons/md";
import { FaPlus } from "react-icons/fa"

import * as client from "./client";
import QuestionEditorWindow from "./QuestionEditorWindow"

export default function QuestionEdit() {
	const navigate = useNavigate()

	const { pathname } = useLocation();
	const { cid, qid } = useParams()
	const point = 0

	const [ quizObject, setQuizObject] = useState<any>({
		quizId:qid,
		course:cid,
		quizName:"",
		instructions:"",
		quizType:"",
		assignmentGroup:"",
		totalScore:0,
		NumOfQuestions:0,
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
		studentScore:0,
		questions:[]
	})

	const fetchQuizes = async() => {
		const quiz = await client.findQuizById(qid as string);
		if (quiz != undefined) setQuizObject(quiz)
	}
	useEffect(()=> {
	fetchQuizes()}, [])

	const saveQuestion = () => {

	}
	
	return(
		<div>
			<h1>Question Editor</h1>
			<div id="header">
				<h5 className="float-end mt-2 me-2">{`Point ${quizObject.totalScore}`}</h5>
			</div><br/><br/>
			

			<div>
				<ul className="nav nav-tabs mt-5">
					<li className="nav-item">
						<Link to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/DetailEdit`} 
						className={`nav-link ${pathname.includes("DetailEdit") ? "active" : ""}`}>Details</Link>
						
					</li>
					<li className="nav-item">
						<Link to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/Questions`} 
						className={`nav-link ${pathname.includes("Questions") ? "active" : ""}`}>Questions</Link>
					</li>
				</ul>
			</div>

			<div id="questionbody"
			     style={{"height":"100px"}}>
			     <div className="d-flex justify-content-center mt-5">
			     <Link to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/Questions/1`}
			           className = "btn text-nowrap text-danger">
			     	<button className="btn btn-light">
						<FaPlus className="me-2 mt-1"/>
						<h6 className="float-end mt-1 me-2">New Question</h6>
					</button>
				</Link>
				
				</div>
			</div>

			<hr/>
			<div id ="submit-buttons"
			    		     className = "mt-2 d-flex justify-content-center">
			    			 <button className="btn btn-light"
				        			 onClick={()=>navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}`)}
				        			 >
								     Cancle
							 </button>
							 <button className="btn btn-danger ms-3"
				        		     onClick={()=>navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}`)}
				        		     /*saveQuestion*/
				        		     >
									 Save
							</button>
			    		</div>
		</div>
	)
}