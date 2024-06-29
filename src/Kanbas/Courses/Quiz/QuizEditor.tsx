import {useState, useEffect} from "react"
import { useParams } from "react-router"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";

import { TiPencil } from "react-icons/ti";

import { setCurrentQuiz } from "./reducer"
import * as client from "./client";
import * as userclient from "../../Account/client"

export default function QuizEditor() {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const { cid, qid } = useParams()
	const [ quizPreview, setQuizPreview] = useState(false)
	const [users, setUsers] = useState<any>({})
	const [ quizObject, setQuizObject] = useState<any>({
		quizId:qid,
		quizName:"",
		instructions:"",
		course:cid,
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

	const { reducerQuiz } = useSelector((state: any) => state.quizReducer) 
	//setQuizObject(reducerQuiz)
	const fetchQuizes = async() => {
		//console.log("-+-----" + JSON.stringify(quizObject.quizId))
		const quiz = await client.findQuizById(qid as string);
		//console.log("-------qid " + qid)
		if (quiz != undefined) setQuizObject(quiz)
		//console.log("-----+--" + JSON.stringify(quiz.quizId))
		//console.log("-----+--" + JSON.stringify(quizObject.quizId))
		//console.log("------+-" + JSON.stringify(quiz))
		//console.log("------+-" + JSON.stringify(quizObject))

		 const users = await userclient.profile()
		 setUsers(users)
	}
	useEffect(()=> {
	fetchQuizes()}, [])

	const preview = () => {
		
		if (!quizObject.quizTime) {
			console.log("previewbutoon" + JSON.stringify(quizObject))
			setQuizPreview(true)
		}
		else {
			navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/Preview`)
		}
	}

	return (
		<div>
			{/*<h1> Quiz Editor </h1>
			{"This pages qid = " + qid}<br/>
			{"QID from object = " + quizObject.quizId}*/}
			<hr />
			<div>
			{quizPreview && <div className="alert alert-success">
			This quiz is not set yet, please edit it</div>}
			</div>
			<div>
				{users.role != "FACULTY" && <div className="alert alert-success">
				Only FACULTY can Edit the quiz</div>}
			</div>
			<div id="two buttons"
			     className="d-flex justify-content-center">
				<button className="btn btn-light"
				        onClick={preview}>
					Preview
				</button>
				<button className={`btn btn-light ms-3 ${users.role != "FACULTY" ? "disabled": ""}`}
				        onClick={()=>navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/DetailEdit`)}>
					<TiPencil/>
					Edit
				</button>
			</div>
			<hr />

			<div id="quizinfo">
				<h1>{quizObject.quizName}</h1><br/>
				<div className="row mt-5">
					<label className="col-sm-5 text-end">
						<b>Quiz Type:</b>
					</label>
					<label className="col-sm-6">
						{quizObject.quizType}
					</label>
				</div>
				<div className="row mt-1">
					<label className="col-sm-5 text-end">
						<b>Points:</b>
					</label>
					<label className="col-sm-6">
						{quizObject.totalScore}
					</label>
				</div>
				<div className="row mt-1">
					<label className="col-sm-5 text-end">
						<b>Assignment Group:</b>
					</label>
					<label className="col-sm-6">
						{quizObject.assignmentGroup}
					</label>
				</div>
				<div className="row mt-1">
					<label className="col-sm-5 text-end">
						<b>Shuffle Answers:</b>
					</label>
					<label className="col-sm-6">
						{quizObject.shuffleAnswers ? "Yes" : "No"}
					</label>
				</div>
				<div className="row mt-1">
					<label className="col-sm-5 text-end">
						<b>Time Limit:</b>
					</label>
					<label className="col-sm-6">
						{`${quizObject.quizTime} Minutes`}
					</label>
				</div>
				<div className="row mt-1">
					<label className="col-sm-5 text-end">
						<b>View Responses:</b>
					</label>
					<label className="col-sm-6">
						{quizObject.viewResponses}
					</label>
				</div>
				<div className="row mt-1">
					<label className="col-sm-5 text-end">
						<b>Show Correct Answers:</b>
					</label>
					<label className="col-sm-6">
						{quizObject.showCorrectAnswers}
					</label>
				</div>
				<div className="row mt-1">
					<label className="col-sm-5 text-end">
						<b>One Question at a Time:</b>
					</label>
					<label className="col-sm-6">
						{quizObject.oneQuestionAtATime}
					</label>
				</div>
				<div className="row mt-1">
					<label className="col-sm-5 text-end">
						<b>Require Respondus Lock Down:</b>
					</label>
					<label className="col-sm-6">
						{quizObject.requireRespondusLockDown}
					</label>
				</div>
				<div className="row mt-1">
					<label className="col-sm-5 text-end">
						<b>Browser:</b>
					</label>
					<label className="col-sm-6">
						{quizObject.browser}
					</label>
				</div>
				<div className="row mt-1">
					<label className="col-sm-5 text-end">
						<b>Required to View Quiz Results:</b>
					</label>
					<label className="col-sm-6">
						{quizObject.requireToViewQuizResults}
					</label>
				</div>
				<div className="row mt-1">
					<label className="col-sm-5 text-end">
						<b>Webcam Required:</b>
					</label>
					<label className="col-sm-6">
						{quizObject.webCamRequired}
					</label>
				</div>
				<div className="row mt-1">
					<label className="col-sm-5 text-end">
						<b>Lock Questions After Answering:</b>
					</label>
					<label className="col-sm-6">
						{quizObject.lockQuestionsAfterAnswering}
					</label>
				</div>
			</div>
			<br />

			<div id="bottom">
				<div className="row border-bottom mt-3 pb-2">
					<label className="col-sm-3 mt-2">
						<b>Due</b>
					</label>
					<label className="col-sm-3 mt-2">
						<b>For</b>
					</label>
					<label className="col-sm-3 mt-2">
						<b>Available from</b>
					</label>
					<label className="col-sm-3 mt-2">
						<b>Until</b>
					</label>
				</div>
				<div className="row border-bottom mt-3 pb-2">
					<label className="col-sm-3 mt-2">
						{quizObject.quizDue}
					</label>
					<label className="col-sm-3 mt-2">
						{quizObject.forEveryOne}
					</label>
					<label className="col-sm-3 mt-2">
						{quizObject.available}
					</label>
					<label className="col-sm-3 mt-2">
						{quizObject.until}
					</label>
				</div>
			</div>
			
		</div>
	)
}