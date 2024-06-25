import {useState} from "react"
import { useParams } from "react-router"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";

import { TiPencil } from "react-icons/ti";

import { setCurrentQuiz } from "./reducer"

export default function QuizEditor() {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const { cid, qid } = useParams()
	const [ quizObject, setQuizObject] = useState<any>({
		quizId:qid,
		quizName:"",
		instructions:"",
		quizType:"",
		assignmentGroup:"",
		totalScore:"",
		quizTime:"",
		quizDue:"",
		available:"",
		until:"",
		shuffleAnswers:true,
		timeLimit:true,
		allowMultiple:false,
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


	return (
		<div>
			<h1> Quiz Editor </h1>
			{"This pages qid = " + qid}<br/>
			{"QID from object = " + quizObject.quizId}
			<hr />
			<div id="two buttons"
			     className="d-flex justify-content-center">
				<button className="btn btn-light"
				        onClick={()=>navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/Preview`)}>
					Preview
				</button>
				<button className="btn btn-light ms-3"
				        onClick={()=>navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/DetailEdit`)}>
					<TiPencil/>
					Edit
				</button>
			</div>
			<hr />

			<div id="quizinfo">

			</div>
		</div>
	)
}