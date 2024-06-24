import React, { useState, useEffect } from "react"
import { useParams } from "react-router"
import { Link, useNavigate } from "react-router-dom"
//navigate is a function, Link to is a tag
import { useSelector, useDispatch } from "react-redux";
//app level state is a part of useSelector
//useDispath calls the setState functions saved in reducer imported above 



import { GoTriangleDown } from "react-icons/go";
import { FaPlus } from "react-icons/fa"
import * as client from "./client"

export default function Quiz() {
	
	//const { quizes } = useSelector((state:any) => state.quizReducer) file deleted

	const navigate = useNavigate()
	const { cid } = useParams() //RS101

	const [quizes, setQuiz] = useState<any[]>([])
	const [quizId, setQuizId] = useState("a")
	
	const fetchQuiz = async() => {
		const quizes = await client.findAllQuiz()
		setQuiz(quizes)
	}
	useEffect(() => {
		fetchQuiz()
		setQuizId(Date.now().toString())
	},[])

	return(
		<div>
			<div id="input-and-buttons">
				{/* When using Link this will append to ..RS101/Quizzes/...*/}
				<button className="float-end btn btn-danger"
					    onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes/${quizId}`)}>
						<FaPlus className="me-2 mt-1"/>
						<h5 className="float-end mt-1 me-2">Quiz</h5>
				</button>
				<input className="form-control float-start w-50 mt-2 p-2"
				       placeholder="Search for quiz"/>
			</div><br/><br/>
			<hr/>



			<div id="quizheader"
			     className="border-gray bg-secondary p-2 mt-2"
			     >
				<GoTriangleDown className = "float-start mt-3 ms-3"/>
				<h4 className= "ms-4 mt-2">Assignment Quizzes</h4>
			</div>
			
			<div id="quizcontent">
				<ul className = "list-group rounded-0">
				{
					quizes.filter((quiz:any) => quiz.course === cid)            //done
					      .map((quiz: any) => (
						       <li className="list-group-item p-3 border">
						       {"hello " + quiz.content}
						       </li>


					       ))
				}
				</ul>
			</div>

			<hr />
			<h1>Test</h1>
			{JSON.stringify(quizes)}
			{/*use quiz will report error says quiz is not a react child*/}


		</div>
	)
}