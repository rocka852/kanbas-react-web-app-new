import { useLocation, useParams } from "react-router"
import { Link } from "react-router-dom"

import { BsThreeDotsVertical } from "react-icons/bs";
import { MdNotInterested } from "react-icons/md";

export default function QuestionEdit() {
	const { pathname } = useLocation();
	const { cid, qid } = useParams()
	const point = 0
	
	return(
		<div>
			<h1>Question Editor</h1>
			<div id="header">
				<button className="float-end p-2 ms-1 rounded border-0">
					<BsThreeDotsVertical/>
				</button>
				<button className="float-end btn me-2">
					<MdNotInterested/>
					Not Published
				</button>
				<h5 className="float-end mt-2 me-2">{`Point ${point}`}</h5>
			</div><br/><br/>
			<hr />

			<div>
				<ul className="nav nav-pills">
					<li className="nav-item">
						<Link to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/DetailEdit`} 
						className={`nav-link ${pathname.includes("DetailEdit") ? "active" : ""}`}>Details</Link>
						
					</li>
					<li className="nav-itme">
						<Link to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/Questions`} 
						className={`nav-link ${pathname.includes("Questions") ? "active" : ""}`}>Questions</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}