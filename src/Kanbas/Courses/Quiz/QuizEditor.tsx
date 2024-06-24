import { useParams } from "react-router"
import { useNavigate } from "react-router-dom"

import { TiPencil } from "react-icons/ti";

export default function QuizEditor() {
	const { cid, qid } = useParams()
	const navigate = useNavigate()
	return (
		<div>
			<h1> Quiz Editor </h1>
			{"This pages qid = " + qid}
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
		</div>
	)
}