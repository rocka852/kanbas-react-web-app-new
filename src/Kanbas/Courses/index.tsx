
import { FaAlignJustify } from "react-icons/fa6";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";


import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home"
import Grades from "./Grades"
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";


export default function Courses({courses}:{courses:any[];}) { 
   
   console.log("hello world")
   const { cid } = useParams();
   console.log({cid})
   const course = courses.find((course) => course._id === cid)
   console.log(course)
   const { pathname } = useLocation();
   
   

   return ( 
      <div id="wd-courses"> 
         <h2 className="text-danger">
            <FaAlignJustify className="me-4 fs-4 mb-1" />
            {course && course.name} &gt; {pathname.split("/")[4]}

         </h2> 
         <hr />
 			
         <div className="d-flex">
            <div className="d-none d-md-block">
	           <CoursesNavigation a={cid} />
	        </div>
	        
	        <div className="flex-fill">	  
	           <Routes>
	           <Route path="/" element={<Navigate to="Home" />} />
	           <Route path="Home" element={<Home />} />
	           <Route path="Modules" element={<Modules />} />
	           <Route path="Assignments" element={<Assignments />} />
	           <Route path="Assignments/:aid" element={<AssignmentEditor />} />
	           <Route path="Grades" element = {<Grades />} />
	           </Routes>
	        </div>
	     </div>


		   
      </div> 
);}