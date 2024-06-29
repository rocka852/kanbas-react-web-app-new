import {useState} from "react"
import {Link, useNavigate} from "react-router-dom"
import * as client from "./client"
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Signin() {
	const [error, setError] = useState("")
	const [credentials, setCredentials] = useState<any>({})
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const signin = async() =>{
		//try{
			const currentUser = await client.signin(credentials)
			dispatch(setCurrentUser(currentUser))
			navigate("/Kanbas/Account/Profile")
		//}
		//catch (err:any) {
			//setError(err.response.data.message)
		//}
		
	}

	return (
		<div>
      		<h1>Sign in</h1>
      		{error && <div className="alert alert-danger">
      		            {error}
      		          </div>}
      		<input onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        		   value={credentials.username} 
        		   className="form-control mb-2" 
        		   placeholder="username" />
      		<input onChange={(e) => setCredentials({ ...credentials, password: e.target.value }) }
        		   value={credentials.password} 
        		   className="form-control mb-2" 
        		   placeholder="password" 
        		   type="password" />

      		<button onClick={signin} 
      		        className="btn btn-primary w-100"
      		        > Sign in 
      		</button>
      		<br />
      		<Link to="/Kanbas/Account/Signup">Sign up</Link>
          <br/><br/><hr/>
          <div>
            <h3>Project Info</h3>
            <ul>
              <li >
                This is the final Project by <b>Abhyuday Sureka</b> 
              </li>
              <li>
                <a href="https://github.com/adisureka/kanbas-react-web-app">
                  Frontend Github Link
                </a>
              </li>
              <li>
                <a href="https://github.com/adisureka/kanbas-node-server-app">
                  Backend Github Link
                </a>
              </li>
            </ul>
          </div><br/>

          <div>
            
            <b>Here are sample Accounts in mongoDB might be helpful</b>
            <table className = "table">
              <thead className="">
                <tr className = "table-primary">
                  <th className="border">
                    User name
                  </th>
                  <th className="border">
                    User Password
                  </th>
                  <th className="border">
                    User type
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className = "table-warning">
                  <th className="border">
                    dark_knight
                  </th>
                  <th className="border">
                    wayne123
                  </th>
                  <th className="border">
                    STUDENT
                  </th>
                </tr>
                <tr className = "table-warning">
                  <th className="border">
                    strider
                  </th>
                  <th className="border">
                    aragorn123
                  </th>
                  <th className="border">
                    FACULTY
                  </th>
                </tr>
              </tbody>
            </table>
            <b>Please registered more at your own convenience</b>
          </div>
    	</div>

	)
}