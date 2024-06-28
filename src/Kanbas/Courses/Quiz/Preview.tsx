import { useState, useEffect} from "react"
import { useNavigate, useLocation, useParams } from "react-router"

import { PiFlagLight } from "react-icons/pi";
import * as client from "./client";
export default function Preview() {
	const { cid, qid } = useParams()
	const [ count, setCount] = useState(1)
	const [ loads, setLoads] = useState(false)
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
		if (quiz != undefined) {
			setQuizObject(quiz)
			//setLoads(true)
		}
		if (quiz.questions.length != 0){
			setLoads(true)
		}
		
		else {
			console.log("quiz has error")
		}
	}

	const buttonnext = () => {
		if (quizObject.questions.length == 0) {
			alert("data loads error")
		}
		else if (count < quizObject.questions.length) {
			setCount(count => count + 1)
			console.log(count)
		}
		else {
			console.log("in else" + count)
			setLoads(false)
		}
	}
	
	useEffect(()=> {
	fetchQuizes()
	}, [])
	return (
		<div>

			<h1>Preview</h1>
			<h2>{quizObject.quizName}</h2>
			<br/>
			<h4>Quiz Instructions</h4>
			<hr/>
			<div id="questionbody"
			     className="row">
			     	<h3 className="col-sm-1 text-end ms-3">
						<PiFlagLight className="text-success mt-5"/>
					</h3>	
					<div className="col-sm-9">
				 		<div className ="border-gray bg-secondary p-2 mt-2">				
							<h4 className= "ms-4 mt-2"
					    	>
							{`Question ${count}`}
							</h4>
						</div>
						<div className="border p-3" 
							style={{"height":"100px"}}>
							{loads ? quizObject.questions[count-1].qdescription : "No More Data"}
						</div>

						<ul className = "list-group rounded-0">
						{	loads ?
							quizObject.questions[count-1].qanswers.map((item:any) => (
								<li className="list-group-item">
									<div className="form-check">
										<input className="form-check-input"
									           value="A"
									           type="checkbox"/>
									    <label className="form-check-label">
										    {item}
									    </label>
									</div>
								</li>
							)) : "No More Data"
						}
						</ul>
						<div>
							<button className="btn btn-light float-end mt-3"
				        		     onClick={buttonnext}
				        		     >
									 Next
							</button>
						</div>
				</div>
			</div>
			{/*
			<div>
				<h1>Test</h1>
				{JSON.stringify(quizObject.quizId)}<br/>
				{JSON.stringify(quizObject.questions)}<br/>
			</div>*/}
		</div>
	)

}