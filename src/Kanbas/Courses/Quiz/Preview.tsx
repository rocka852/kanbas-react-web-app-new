import { useState, useEffect} from "react"
import { useNavigate, useLocation, useParams } from "react-router"

import { PiFlagLight } from "react-icons/pi";
import * as client from "./client";
export default function Preview() {
	const { cid, qid } = useParams()
	const [ count, setCount] = useState(1)
	const [ loads, setLoads] = useState(false)
	const [ thisAnswer, setThisAnswer] = useState("")
	const [ isCorrect, setIsCorrect] = useState(true)
	const [ checkOnce, setCheckOnce] = useState(true)
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
		setCheckOnce(true)
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
		setCheckOnce(true)
	}

	const buttoncheck = () => {
		const temp = quizObject.questions[count-1]
		//alert(":" + JSON.stringify(temp))
				
		if (temp && thisAnswer == temp.qcorrect) {
			//alert("correct")
			setIsCorrect(true)
			setCheckOnce(false)
			setQuizObject({...quizObject, studentScore: quizObject.studentScore + temp.qscore})
		}
		else if(temp && thisAnswer != temp.qcorrect) {
			//alert("wrong")
			setIsCorrect(false)
			setCheckOnce(false)
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
						{	loads && quizObject.questions[count-1].qtype === "Multiple Choice" &&
							quizObject.questions[count-1].qanswers.map((item:any) => (
								<li className="list-group-item">
									<div className="form-check">
										<input className="form-check-input"
									           value={item}
									           type="radio"
									           name="gridRadios"
									           onClick={()=>setThisAnswer(item)}/>
									    <label className={`form-check-label`}>
										    <h5 className="ms-2 me-3">
										    	{item}
										    	
										    	<span className="ms-3 bg-success">
										    		{!checkOnce && isCorrect && item == thisAnswer? "Correct": ""}
										    	</span>
										    	<span className="ms-2 bg-danger">
										    		{!checkOnce && !isCorrect && item == thisAnswer? "Wrong": ""}
										    	</span>
										    	<span className="ms-3 bg-success">
										    		{!checkOnce && !isCorrect && item == quizObject.questions[count-1].qcorrect? "Correct": ""}
										    	</span>
										    	
										    </h5>
									    </label>
									</div>
								</li>
							)) 
						}
						{
							loads && quizObject.questions[count-1].qtype === "True false question" &&
							<div>
								<li className="list-group-item">
									<div className="form-check">
										<input className="form-check-input"
									           value="A"
									           type="checkbox"/>
									    <label className="form-check-label">
										    True
									    </label>
									</div>
								</li>
								<li className="list-group-item">
									<div className="form-check">
										<input className="form-check-input"
									           value="A"
									           type="checkbox"/>
									    <label className="form-check-label">
										    False
									    </label>
									</div>
								</li>
							</div> 
						}

						{
							loads && quizObject.questions[count-1].qtype === "Fill in blanks" && 
							<div>
								<textarea className="form-control mt-2"
				      				   placeholder="Please enter your answer"
				       				   />
							</div>
						}

						{
							!loads && <h4>No more data</h4>
						}
						</ul>
						<div>
							<button className="btn btn-light float-end mt-3"
				        		     onClick={buttonnext}
				        		     >
									 Next
							</button>
							<button className={`btn btn-success mt-3 ${checkOnce ? "" : "disabled"}`}
				        		     onClick={buttoncheck}
				        		     >
									 Check
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
			<div>
			{/*":"+JSON.stringify(quizObject.questions[count-1].qtype)*/}
			{"student:" + JSON.stringify(quizObject.studentScore)}
			</div>
		</div>
	)

}