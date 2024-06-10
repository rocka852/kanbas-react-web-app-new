import EnvironmentVariables from "./EnvironmentVariables"
import PathParameters from "./PathParameters"
import QueryParameters from "./QueryParameters"
import WorkingWithObjects from "./WorkingWithObjects"
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function Lab5() {
	return (
		<div id="wd-lab5">
			<h2>Lab 5</h2>
			<div className = "list-group">				
				<a href={`${REMOTE_SERVER}/lab5/welcome`} 
				   className="list-group-item">
				   Welcome(t)
				</a>
			</div><hr/>
			<EnvironmentVariables/>
			<PathParameters/>
			<QueryParameters/>
			<WorkingWithObjects/>
		</div>
	)
}

{/*Error on line9 if use <a href=`${REMOTE_SERVER}/lab5/welcome` 
Missing {} for text
JSX value should be either an expression or a quoted JSX text. (9:12)
9 to 12 starting at 9, tag end at 12
*/}