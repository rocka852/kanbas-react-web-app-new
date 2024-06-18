import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router";
import Dashboard from "./Dashboard";
import Inbox from "./Inbox"
import Courses from "./Courses";
import "./styles.css"
//import * as db from "./Database";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import AssignmentEditor from "./Courses/Assignments/Editor"
import Account from "./Account"

import * as client from "./Courses/client"
{/*Added from a5 
  if you have import after this comment it will report error import in body
*/}



export default function Kanbas() {
  
    {/*
	       const [courses, setCourses] = useState<any[]>(db.courses);
  	     
    */}
    const [course, setCourse] = useState<any>({
                _id: "1234", name: "New Course", number: "New Number",
                startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
         });

    const [courses, setCourses] = useState<any[]>([])

    {/*
  	const addNewCourse = () => {
    	setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
  	};
    
  	const deleteCourse = (courseId: any) => {
    	setCourses(courses.filter((course) => course._id !== courseId));
  	};
    
  	const updateCourse = () => {
    	setCourses(
      		courses.map((c) => {
        	if (c._id === course._id) {
          		return course;
       		} else {
          		return c;
        	}
      		})
    	);
  	};
    */}
    

{/* Added at A5 .........................................................*/}

    const fetchCourses = async() =>{
      const courses = await client.fetchAllCourses()
      setCourses(courses)
    }
    useEffect(()=>{
      fetchCourses()
    },[])

    const addNewCourse = async () => {
      const newCourse = await client.createCourse(course)
      setCourses([...courses, newCourse])
    }

    const deleteCourse = async (courseId: string) =>{
      await client.deleteCourse(courseId)
      setCourses(courses.filter(c=>c._id !== courseId))
      {/*this setCourses is for this page state variable, and client js is about
        communicated with the server
      */}
    }

    const updateCourse = async () => {
      await client.updateCourse(course)
      setCourses(
          courses.map(c=> {
              if (c._id === course._id) {
                  return course
              } else {
                return c
              }

          })
      )
    }



	return(
    <Provider store={store}>
	     <div id="wd-kanbas" className="h-100">
	       <div className="d-flex h-100">
	         <div className="d-none d-md-block bg-black">	
	         {/*default hide navigation bar
	            when screen reach coorespoding size show*/}        
	             <KanbasNavigation />
	         </div>
    
	         <div className="flex-fill p-4">	       
	             <Routes>
	               <Route path ="/" element={<Navigate to ="Dashboard" />} />
	               <Route path = "/Account/*" element = {<Account/>} />
	               <Route path = "Dashboard" 
	               	element={<Dashboard courses={courses}
	               						          course={course}
                  							      setCourse={setCourse}
                  							      addNewCourse={addNewCourse}
                  							      deleteCourse={deleteCourse}
                  							      updateCourse={updateCourse} />
	               						} />	 
                            
	              	<Route path = "Courses/:cid/*" 
	              		   element={<Courses courses={courses} />} />
                  <Route path = "Inbox" 
                         element = {<Inbox />} />
    
	       	  </Routes>
	         </div>	    
	       </div>
	     </div>
    </Provider>
	);
}