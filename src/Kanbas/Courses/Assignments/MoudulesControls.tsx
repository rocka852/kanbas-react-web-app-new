import { FaPlus } from "react-icons/fa6";
import AssignmentEditor from "./Editor"
import { Routes, Route, Navigate,useParams, useLocation } from "react-router";
import { Link} from "react-router-dom";
export default function ModulesControls(
{assignmentName}:{assignmentName:string}

) 
{
	//const { cid } = useParams()
	const { aid } = useParams()
	console.log("In /Assignment/MoudulesControls cid="+" aid="+aid)
	return(
		<div>
			<Link key="mylink" to={`${assignmentName}`}>
					                        
			<button id="wd-add-module-btn" 
					className="btn btn-lg btn-danger me-1 float-end">

			<FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
			Assignment
			</button>
			</Link>
			<button id="wd-add-module-btn" className="btn btn-lg btn-secondary me-1 float-end">
			<FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
			Group
			</button>

			<div>
			
			<input id="wd-search-assignment" placeholder="&#128269; Search..." className="input form-control-lg float-left input-sm w-50"
		    /> 
			</div>
			
		<br />
		
		</div>

	);
}