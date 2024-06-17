
import React, {useState, useEffect} from "react"
import * as client from "./client"
import Details from "./Details"
import {Link} from "react-router-dom"
import {useParams} from "react-router"
import {FaUserCircle} from "react-icons/fa"

export default function PeopleTable() {
	const {cid, uid} = useParams()
	const [users, setUsers] = useState<any[]>([])
	const [role, setRole] = useState("")
	const [name, setName] = useState("")

	const filterUsersByRole = async(role:string)=> {
		setRole(role)
		if(role){
			const users = await client.findUsersByRole(role)
			setUsers(users)
		}
		else {
			fetchUsers()
		}
	}

	const filterUsersByName = async(name:string)=> {
		setName(name)
		if(name) {
			const users = await client.findUserByPartialName(name)
			setUsers(users)
		}
		else {
			fetchUsers()
		}
	}

	const fetchUsers = async() => {
		const users = await client.findAllUsers()
		setUsers(users)
	}
	useEffect(()=>{
		fetchUsers()
	}, [])

	return (
		<div id="wd-people-tatle">
			<input onChange={e=>filterUsersByName(e.target.value)}
		  	       placeholder="Search people"
		  	       className="form-control float-start w-25 me-2"/>
		  	<select value={role}
		  	        onChange={e=>filterUsersByRole(e.target.value)}
		  	        className="form-select float-start w-25">
		  	    <option value="">All Roles</option>
		  	    <option value="STUDENT">Students</option>
		  	    <option value="ASSISTANT">Assistants</option>
		  	    <option value="FACULTY">Faculty</option>
		  	</select>

		  	<Details fetchUsers={fetchUsers}/>

		  	


		 	<table className="table table-striped">
				<thead>
					<tr>
						<th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>	Last Activity</th><th>Total Activity</th>
          			</tr>
				</thead>

				<tbody>
					{users.map((user:any) => (
						<tr key= {user._id}>
							<td className="text-nowrap text-danger"
								> 

								<Link to={`/Kanbas/Courses/${cid}/People/${user._id}`}
								      className="btn text-nowrap text-danger">
								{/*if you use uid here, uid will be undefined and node will crush*/}

								<FaUserCircle className="text-secondary me-2 fs-1"/>
								{user.firstName} {user.lastName}
								</Link>
								
							</td>
							<td>{user.username}</td>
							<td>{user.section || "RS101"}</td>
							<td>{user.role}</td>
							<td>{user.lastActivity|| "2020-10-01T00:00:00.000Z"}</td>
							<td>{user.totalActivity || user.dob}</td>
	
						</tr>
					))}
				</tbody>
		    </table>
		</div>
	)
}