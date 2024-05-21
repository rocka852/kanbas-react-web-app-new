import "./index.css"
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons"
import ModulesControls from "./MoudulesControls"
import { LuBook } from "react-icons/lu";
export default function Assignments() {

	return ( 

	<div id="wd-assignments"> 
		{/*<div id="wd-float-divs">
		<div className="wd-float-left wd-dimension-portrait">
		<input id="wd-search-assignment" placeholder="Search for Assignments" /> 
		</div>
		<div className="wd-float-right ">
		<button id="wd-add-assignment-group" className="btn btn-alert wd-color1">+Group</button> 
		</div>
		<div className="wd-float-right ">
		<button id="wd-add-assignment" className="btn btn-primary">+Assignment</button> 
		</div>
		</div>*/}
	<ModulesControls />
	<br /><br />	
	
	{/*-------------------------------------------------------------------*/}




	<ul id="wd-modules1" className="list-group rounded-0 border" >		
		<li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
			<div className="wd-title p-4 ps-1 bg-secondary">
				<div className = "row">
				<div className = "col-1">
				 <BsGripVertical className="me-2 fs-3 float-left" />  
				</div>
				<div className = "col-7">
				 ASSIGNMENTS 
				</div>
				<div className = "col-2 border-gray rounded-5">
				 40% of Total 
				</div>
				<div className = "col-sm">
				 + 
				</div>
				<div className = "col-sm">
				 <LessonControlButtons  />
				</div>
				</div>  
			</div>

			
			<ul id="wd-assignment-list" className="wd-lessons list-group rounded-0">

	  			<li className="wd-lesson list-group-item p-3 ps-1">
	  				<div className="row">
	  					<div className = "col-sm">
	  						<BsGripVertical className="me-2 fs-3 float-left" /> 
	  					</div>
	  					<div className = "col-sm">
	  						<LuBook className="float-left"/>
	  					</div>
	  					<div className = "col-9">
	  						<a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">A1</a>	  				
	  						<p> <span style={{color:"red"}}> 
	  						    Multiple Modules
	  						    </span> | <b> Notavailable until</b> May 6 at 12:00am | <b>Due</b> May 13 at 11:59pm | 100pts</p>	   	
	   					</div>
	   					<div className = "col-1">
	   					<LessonControlButtons  />
	   					</div>
	   				</div>
    			</li>

    			<li className="wd-lesson list-group-item p-3 ps-1">
	  				<div className="row">
	  					<div className = "col-sm">
	  						<BsGripVertical className="me-2 fs-3 float-left" /> 
	  					</div>
	  					<div className = "col-sm">
	  						<LuBook className="float-left"/>
	  					</div>
	  					<div className = "col-9">
	  						<a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">A2</a>	  				
	  						<p> <span style={{color:"red"}}> 
	  						    Multiple Modules
	  						    </span> | <b> Notavailable until</b> May 6 at 12:00am | <b>Due</b> May 13 at 11:59pm | 100pts</p>	   	
	   					</div>
	   					<div className = "col-1">
	   					<LessonControlButtons  />
	   					</div>
	   				</div>
    			</li>

    			<li className="wd-lesson list-group-item p-3 ps-1">
	  				<div className="row">
	  					<div className = "col-sm">
	  						<BsGripVertical className="me-2 fs-3 float-left" /> 
	  					</div>
	  					<div className = "col-sm">
	  						<LuBook className="float-left"/>
	  					</div>
	  					<div className = "col-9">
	  						<a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">A3</a>	  				
	  						<p> <span style={{color:"red"}}> 
	  						    Multiple Modules
	  						    </span> | <b> Notavailable until</b> May 6 at 12:00am | <b>Due</b> May 13 at 11:59pm | 100pts</p>	   	
	   					</div>
	   					<div className = "col-1">
	   					<LessonControlButtons  />
	   					</div>
	   				</div>
    			</li>







    		

    		
		</ul> 
		</li>
	</ul> 	
      

    {/* Complete On Your Own */}  </div>

    );
}