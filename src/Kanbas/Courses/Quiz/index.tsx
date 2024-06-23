import { useSelector, useDispatch } from "react-redux"; 
//app level state
//useDispath calls the setState functions saved in reducer imported above 



import { GoTriangleDown } from "react-icons/go";

export default function Quiz() {
	
	const { quizes } = useSelector((state:any) => state.quizReducer)
	const cid = "RS101"
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


		</div>
	)
}