import { useState, useEffect} from "react"
import { useNavigate, useLocation, useParams } from "react-router"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";

import * as client from "./client";
import { setCurrentQuiz, addQuiz } from "./reducer"
export default function QuestionEditorWindow() {
	const { cid, qid } = useParams()
	const { pathname } = useLocation();
	const navigate = useNavigate()
	const dispatch = useDispatch()

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

	const [quizType, setQuizType] = useState("Multiple Choice")
	const [singleScore, setSingleScore] = useState(4)
	const [quizDescription, setQuizDescription] = useState("Description")
	const [quizTitle, setQuizTitle] = useState("Simple Question")
	const [answer1, setAnswer1] = useState("")
	const [answer2, setAnswer2] = useState("")
	const [answer3, setAnswer3] = useState("")
	const [answer4, setAnswer4] = useState("")

	const fetchQuizes = async() => {
		const quiz = await client.findQuizById(qid as string);
		if (quiz != undefined) setQuizObject(quiz)
	}
	
	useEffect(()=> {
	fetchQuizes()
	}, [])

	const updateQuestion =async () => {
		const tempQuiz = {
			qtitle:quizTitle,
			qtype:quizType,
			qscore:singleScore,
			qdescription:quizDescription,
			qcorrect: answer1,
			qanswers: [answer1, answer2, answer3, answer4]
		}

		const copy = {...quizObject, questions: [...quizObject.questions, tempQuiz], NumOfQuestions: quizObject.NumOfQuestions + 1,
		totalScore: quizObject.totalScore + tempQuiz.qscore};
		//professor didn't use setter, because setter is delayer, instead he create a //new one then use setter, no matter it delayed ,database will update

		//console.log("Copy " + JSON.stringify(copy))
		
		await client.updateQuizById(copy)
		
		/*setQuizObject((quizObject:any) => ({...quizObject, questions: [...quizObject.questions, tempQuiz], NumOfQuestions: quizObject.NumOfQuestions + 1,
		totalScore: quizObject.totalScore + tempQuiz.qscore}))*/
		//this is the old code doesn't work

		setQuizObject(copy)
		navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/Questions`)

	}

	return (
		<div>
			<h1>Question Editor Window</h1>
			
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

			<div id="questionbody">
			    <div className="row mt-3"
			         id="questionheader">
			     	<input className="col-sm-5 ms-3"
				           placeholder={quizTitle}
				           onChange={e=>setQuizTitle(e.target.value)}/>
				    
					<select className="form-select w-25 ms-2 col-sm-5"
					      	
					      	onChange={e=>setQuizType(e.target.value)}>
					      	
					      	<option value ="Multiple Choice" 
					      	            selected
					      	            >
					      	            Multiple Choice
					      	</option>
					      	<option value="True false question"
					      	            >
					      	            True false question
					      	</option>
					      	<option value="Fill in blanks"
					      	            >
					      	            Fill in blanks
					      	</option>
					</select>	
					<label className="col-sm-1 ms-5">pts:</label>
					
					<input className="col-sm-1"
			    		           style={{width:"45px"}}
			    		           placeholder = {String(singleScore)}	
			    		           onChange= {e=> setSingleScore(Number(e.target.value))}/>				
			    </div>
			    

			    <div id="body">
			    	<p className="mt-3">
			    		Enter your question and multiple answers, then select the one correct answer
			    	</p>
			    	<h4 > Question: </h4>
			    	<textarea className="form-control mt-3"
			    		  placeholder = {quizDescription}
				          onChange={e=>setQuizDescription(e.target.value)}
					/>

				</div>
				<div id="answer" className="mt-3">
				    <h4> Answers: </h4>
				    {quizType === "Multiple Choice" && <div id="answerlist">
				    	<div className="row">
				    		<label htmlFor="r1"
					       		   className="col-sm-3 col-form-label text-end text-danger">
					               Correct Answer: 
							</label>
							<input id="r1"
								   className="col-sm-5 form-control w-50"
			    		           placeholder = {answer1}	
			    		           onChange= {e=> setAnswer1(e.target.value)}/>	
				    	</div>
				    	<div className="row mt-2">
				    		<label htmlFor="r2"
					       		   className="col-sm-3 col-form-label text-end">
					               Possilble Answer: 
							</label>
							<input id="r2"
								   className="col-sm-5 form-control w-50"
			    		           placeholder = {answer2}	
			    		           onChange= {e=> setAnswer2(e.target.value)}/>	
				    	</div>
				    	<div className="row mt-2">
				    		<label htmlFor="r3"
					       		   className="col-sm-3 col-form-label text-end">
					               Possilble Answer: 
							</label>
							<input id="r3"
								   className="col-sm-5 form-control w-50"
			    		           placeholder = {answer3}	
			    		           onChange= {e=> setAnswer3(e.target.value)}/>	
				    	</div>
				    	<div className="row mt-2">
				    		<label htmlFor="r4"
					       		   className="col-sm-3 col-form-label text-end">
					               Possilble Answer: 
							</label>
							<input id="r4"
								   className="col-sm-5 form-control w-50"
			    		           placeholder = {answer4}	
			    		           onChange= {e=> setAnswer4(e.target.value)}/>	
				    	</div>
				    </div>}

				    {quizType === "True false question" && <div id="answerlist"
				                                                className="">
				    	<div className="row">
				    		
							<input id="r5"
								   className="col-sm-2"
								   type="radio"
								   name="gridRadios"
			    		           value = {"true"}
			    		           	
			    		           onChange= {e=> setAnswer1(e.target.value)
			    		           }/>	
			    		    <label htmlFor="r5"
					       		   className="col-sm-3 col-form-label">
					               True 
							</label>
				    	</div>
				    	
				    	<div className="row mt-2">
				    		<input id="r5"
								   className="col-sm-2"
								   type="radio"
								   name="gridRadios"
			    		           value = {"false"}
			    		           checked	
			    		           onChange= {e=> setAnswer1(e.target.value)}/>	
			    		    <label htmlFor="r5"
					       		   className="col-sm-3 col-form-label">
					               False
							</label>
				    	</div>
				    	
				    </div>}

				    {quizType === "Fill in blanks" && <div id="answerlist">
				    	<div className="row">
				    		<label htmlFor="r1"
					       		   className="col-sm-3 col-form-label text-end text-danger">
					               Correct Answer: 
							</label>
							<input id="r1"
								   className="col-sm-5 form-control w-50"
			    		           placeholder = {answer1}	
			    		           onChange= {e=> setAnswer1(e.target.value)}/>	
				    	</div>
				    	<div className="row mt-2">
				    		<label htmlFor="r2"
					       		   className="col-sm-3 col-form-label text-end">
					               Possilble Answer: 
							</label>
							<input id="r2"
								   className="col-sm-5 form-control w-50"
			    		           placeholder = {answer2}	
			    		           onChange= {e=> setAnswer2(e.target.value)}/>	
				    	</div>
				    	<div className="row mt-2">
				    		<label htmlFor="r3"
					       		   className="col-sm-3 col-form-label text-end">
					               Possilble Answer: 
							</label>
							<input id="r3"
								   className="col-sm-5 form-control w-50"
			    		           placeholder = {answer3}	
			    		           onChange= {e=> setAnswer3(e.target.value)}/>	
				    	</div>
				    	<div className="row mt-2">
				    		<label htmlFor="r4"
					       		   className="col-sm-3 col-form-label text-end">
					               Possilble Answer: 
							</label>
							<input id="r4"
								   className="col-sm-5 form-control w-50"
			    		           placeholder = {answer4}	
			    		           onChange= {e=> setAnswer4(e.target.value)}/>	
				    	</div>
				    </div>}

				</div>
				<div id="buttons"
				     className="mt-5">
					<div id ="submit-buttons"
			    		     className = "mt-2 d-flex ">
			    			 <button className="btn btn-light"
				        			 onClick={()=>navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/Questions`)}
				        			 >
								     Cancle
							 </button>
							 <button className="btn btn-danger ms-3"
				        		     onClick={
				        		     updateQuestion}
				        		     >
									 Update Question
							</button>
			    		</div>
				</div>
				
			</div>
			<div id="test">
				<h1>Test</h1>
				{JSON.stringify(quizType)}<br/>
				{JSON.stringify(quizTitle)}<br/>
				{JSON.stringify(quizDescription)}<br/>
				{JSON.stringify(singleScore)}<br/>
				{JSON.stringify(answer1)}<br/>
				{JSON.stringify(answer2)}<br/>
				{JSON.stringify(answer3)}<br/>
				{JSON.stringify(answer4)}<br/>
				{/*JSON.stringify(quizObject)*/}<br/>
			</div>

			
		</div>
	)
}