import "./index.css"
import React, { ReactNode } from "react";

import { Navigate, Route, Routes, useParams, useLocation } from "react-router";

export default function CoursesNavigation({a}:{a:ReactNode}) {
    {/*This one grab the item link to you but don't create that link
    const { cid } = useParams();
    console.log("navigation cid is: " +cid)
    */}


    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades"];
    let temp = false
    const { id } = useParams();
    console.log("in test id= " + id)

	return (
		<div id="wd-courses-navigation" className="list-group fs-5 rounded-0">

		
		
		
		{
			links.map(x => (
				<a id="wd-course-home-link" 
				   href = {`#/Kanbas/Courses/${a}/${x}`}
				   className = {`list-group-item border border-0 ${x=="Home"? "active": "text-danger"}`}>
				{x}</a>
			))
		}

		</div>
		
);}