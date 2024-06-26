import React, { useState, useEffect } from "react"
import { useParams } from "react-router"
import { Link, useNavigate, Navigate } from "react-router-dom"
//navigate is a function, Link to is a tag, Navigate to is a tag for Route
import { useSelector, useDispatch } from "react-redux";
//app level state is a part of useSelector
//useDispath calls the setState functions saved in reducer imported above 

import { GoTriangleDown } from "react-icons/go";
import { FaPlus } from "react-icons/fa"
import { BsThreeDotsVertical } from "react-icons/bs";
import { GiRocketThruster } from "react-icons/gi";
import { IoCheckmarkCircleSharp } from "react-icons/io5";


import * as client from "./client"
import { setCurrentQuiz } from "./reducer"

export default function Quiz() {
	
	//const { quizes } = useSelector((state:any) => state.quizReducer) file deleted

	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { cid } = useParams() //RS101

	const [quizes, setQuiz] = useState<any[]>([])
	const [qid, setQuizId] = useState("100000000000")
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
	
	const fetchQuiz = async() => {
		const quizes = await client.findAllQuiz()
		setQuiz(quizes)
		//setQuizId(Date.now().toString())
		const copy = {...quizObject, quizId:Date.now().toString()}
		setQuizObject(copy)
	}

	const createQuiz = async() => {
		const currentQuiz = await client.createQuiz(quizObject)
		dispatch(setCurrentQuiz(currentQuiz))
		navigate(`/Kanbas/Courses/${cid}/Quizzes/${quizObject.quizId}`)
	}

	useEffect(() => {
		fetchQuiz()
		//setQuizId(Date.now().toString())
	},[])



	return(
		<div>
			<div id="input-and-buttons">
				<button className="float-end p-2 ms-1 rounded">
					<BsThreeDotsVertical/>
				</button>
				{/* When using Link this will append to ..RS101/Quizzes/...*/}
				<button className="float-end btn btn-danger"
					    onClick={createQuiz}>
						<FaPlus className="me-2 mt-1"/>
							<h6 className="float-end mt-1 me-2">
								Quiz
							</h6>
				</button>

				<input className="form-control float-start w-50 mt-2 p-2"
				       placeholder="Search for quiz"/>
			</div><br/><br/>
			<hr/>



			<div id="quizheader"
			     className="border-gray bg-secondary p-2 mt-2"
			     >
				<GoTriangleDown className = "float-start mt-3 ms-3"/>
					<h4 className= "ms-4 mt-2"
					    >
						Assignment Quizzes
					</h4>
			</div>
			
			<div id="quizcontent">
				<ul className = "list-group rounded-0">
				{
					quizes.filter((quiz:any) => (quiz.course === cid && quiz.published))      
					      .map((quiz: any) => (
						       <li className="list-group-item p-3 border">
						       		<div id="allcontentline">
						       			<Link to={`/Kanbas/Courses/${cid}/Quizzes/${quiz.quizId}`}
						       			      className="text-dark">
						       			<GiRocketThruster className="text-success me-3 mt-3 float-start"/>
						       			<div id="quizdescription" 
						       			     className="float-start">
						       			     <div className="row ms-2">
						       				 	<h5>{quiz.quizName?  quiz.quizName : "Unnamed Quiz"}</h5>
						       				 </div>	
						       				 <div className="row ms-2">
						       				 	{<h6><b>{quiz.available ? "Available: ": "Closed"}</b> {quiz.available} | <b>Due</b>: <span className="text-danger">{quiz.quizDue ? quiz.quizDue : "Multiple Dates"}</span> | {quiz.totalScore ? quiz.totalScore : 0} pts | {quiz.NumOfQuestions ? quiz.NumOfQuestions : 0} Questions</h6>}
						       				 </div>
						       			</div>
						       			<BsThreeDotsVertical className="text-success float-end mt-3 me-2"/>
						       			<IoCheckmarkCircleSharp className="text-success float-end mt-3 me-3"/>
						       			</Link>
						       		</div>
						       </li>
					       ))
				}
				</ul>
			</div>

			<hr />
			{/*<h1>Test</h1>*/}
			{/*JSON.stringify(quizes)*/}
			{/*use quiz will report error says quiz is not a react child*/}


		</div>
	)
}