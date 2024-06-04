import * as db from "../../Database"
import { Routes, Route, Navigate,useParams, useLocation } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment } from "./reducer";
import React, { useState } from "react";
import { Link} from "react-router-dom";
export default function AssignmentEditor(

) {
  const { aid,cid } = useParams()
  console.log("Assignment Editor aid = " + aid)
  const assignments1 = db.assignments
  let newPage = (aid == "New Assignment")
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);

  const [aName, setAName] = useState(aid)
  const [aDes, setADes] = useState("New description")
  const [aPoint, setAPoint] = useState("100")
  const [aDue, setADue] = useState("2024-05-13")
  const [ava, setAva] = useState("2024-05-06")
  const [aun, setAun] = useState("2024-06-24")
  const dispatch = useDispatch();
  return ( 
      
      <div id="wd-assignments-editor">
      {
        
          assignments1.filter((assignment)=>assignment._id === aid)
                 .map((assignment)=> (

         

          <div className="mb-3">
            <label htmlFor="wd-name" className="form-label">Assignment Name</label>

       
            <input id="wd-name" className ="form-control" value={`${assignment._id}`} />      
            <br />

            <textarea id="wd-description" className="form-control" rows={7}> 
      
              {assignment.title}
      
              </textarea> 
           </div>))
   
      }
      

      {
          newPage &&
          <div className="mb-3">
            <label htmlFor="wd-name" className="form-label">Assignment Name</label>

       
            <input id="wd-name" className ="form-control" value={aName} 
                   onChange={(e)=>setAName(e.target.value)}/>      
            <br />

            <textarea id="wd-description" className="form-control" rows={7} value={aDes} onChange={(e)=>setADes(e.target.value)}> 
      
              {aDes}
      
              </textarea> 
           </div>        
        
      } 
      


      <br /> 

        <div className="mb-3 row">
         
           
                <label htmlFor="wd-points" className="col-sm-2 col-form-label">Points
             </label> 
           
            <div className="col-sm-10">
              <input id="wd-points" type="text" className="form-control" value={aPoint} 
               onChange = {(e)=>setAPoint(e.target.value)}/>
            </div> 
        </div>

        <div className="mb-3 row">
         
           
                <label htmlFor="wd-points" className="col-sm-2 col-form-label">Assignment Group
             </label> 
           
            <div className="col-sm-10">
              <select className = "form-select">
                <option selected>Assignment</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div> 
        </div>

        <div className="mb-3 row">
        

        <div className="mb-3 row">
         
           
                <label htmlFor="wd-points" className="col-sm-2 col-form-label">Display Grade as
             </label> 
           
            <div className="col-sm-10">
              <select className = "form-select">
                <option selected>Percentage</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div> 
        </div>
         
           
                <label htmlFor="wd-points" className="col-sm-2 col-form-label">Submission Type
             </label> 
           
            <div className="col-sm-10">
                  <br />
                  <select className = "form-select">
                    <option selected>Online</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <h5>Online Entry Options</h5>
                  </select>
                  <br />
                  
                    <h5>Online Entry Options</h5>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" 
                        id="switch1" />
                        <label className="form-check-label" htmlFor="switch1">
                        Text Entry
                        </label>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" 
                        id="switch1" />
                        <label className="form-check-label" htmlFor="switch1">
                        Website URL
                        </label>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" 
                        id="switch1" />
                        <label className="form-check-label" htmlFor="switch1">
                        Media Recordings
                        </label>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" 
                        id="switch1" />
                        <label className="form-check-label" htmlFor="switch1">
                        Student Annotation
                        </label>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" 
                        id="switch1" />
                        <label className="form-check-label" htmlFor="switch1">
                        File Uploads
                        </label>
                    </div>
              
            </div> 





            <br />
            
            <div className="mb-3 row">
         
           
                <label htmlFor="wd-points" className="col-sm-2 col-form-label">Assign
                </label> 
           
            <div className="col-sm-10">
              <br />
              <h5>Assign to</h5>
              <div className="input-group mb-3">
              <span className="input-group-text">Everyone</span>
              <span className="input-group-text">x</span>
              <input type="text" className="form-control" />
               </div>

              <h5>Due</h5>
              <input type="date" className="form-control" value={aDue} 
               onChange={(e)=>setADue(e.target.value)}/>


              <div className="row">
                <div className="col-6">
                <label htmlFor="wd-available-from"> Available from: </label> 
                <input type="date" id="wd-available-from" className="form-control" value={ava} onChange={(e)=>setAva(e.target.value)}/>
                </div>
                <div className="col-6">
                <label htmlFor="wd-available-from">Until: </label> 
                <input type="date" id="wd-available-from" className="form-control" value={aun} onChange={(e)=>setAun(e.target.value)}/>
                </div>
              </div>
              <Link key="mylink" to={"/Kanbas/Courses/RS101/Assignments"}>
              <button id="wd-all-good"  className = "btn btn-primary me-1 float-end" 
                      onClick={()=> {
                            dispatch(addAssignment({ _id: aName, course:cid, title:aDes, points:aPoint}))

                            alert("your file is updated\n" + "Point: " + aPoint + "\nDue: " + aDue + "\nAvailable: " + ava + "\nUntil: " + aun)
                      }}
              > Save </button>
              </Link>

              <Link key="mylink" to={"/Kanbas/Courses/RS101/Assignments"}>
              <button id="wd-all-good"  className = "btn btn-primary me-1 float-end" 
              > Cancel </button>
              </Link>
            </div> 
        </div>

        </div>
        
        
        {/* Complete on your own */} 
        
        



      
      </div>

  );
}