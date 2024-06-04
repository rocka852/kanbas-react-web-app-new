import { useSelector, useDispatch } from "react-redux";
export default function Inbox() {
	//const { todos } = useSelector((state: any) => state.todosReducer);
	const { modules } = useSelector((state: any) => state.modulesReducer);
	const dispatch = useDispatch();
	console.log("===inInbox" + JSON.stringify(modules))
	return(
	<>
		<h3>This is for test purpose at this moment</h3>
		<br/>

		<h6>At this inbox locaction I can call state of modules</h6>
		<hr/>
		<ul id="wd-modules" className="list-group rounded-0">
			{modules.map((module: any) => (
          		<li className="list-group-item" key={module._id}>
            		{module.name}
          		</li>
            ))}

        </ul>
        <br/>
        <h6>At this inbox locaction I can call state of modules</h6>
        <hr/>
     </>
	)
}