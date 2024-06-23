import { useSelector, useDispatch } from "react-redux"; 
import React, { useState, useEffect } from "react"
//app level state
//useDispath calls the setState functions saved in reducer imported above 



import { GoTriangleDown } from "react-icons/go";
import * as client from "./client"

export default function Quiz() {
	
	//const { quizes } = useSelector((state:any) => state.quizReducer) file deleted
	const cid = "RS101"

	const [quizes, setQuiz] = useState<any[]>([])

	
	const fetchQuiz = async() => {
		const quizes = await client.findAllQuiz()
		setQuiz(quizes)
	}
	useEffect(() => {
		fetchQuiz()
	},[])

	return(
		<div>
			<hr />
			<div id="quizheader"
			     className="border-gray bg-secondary p-2"
			     >
				<GoTriangleDown className = "float-start mt-3 ms-3"/>
				<h4 className= "ms-4 mt-2">Assignment Quizzes</h4>
			</div>
			
			<div id="quizcontent">
				<ul className = "list-group rounded-0">
				{
					quizes.filter((quiz:any) => quiz.course === cid)
					      .map((quiz: any) => (
						       <li className="list-group-item p-3 border">
						       {quiz.content}
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