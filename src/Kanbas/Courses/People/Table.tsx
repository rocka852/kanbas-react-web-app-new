import React, {useState, useEffect} from "react"
import * as client from "./client"

export default function PeopleTable() {
	//const {cid} = useParams()
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
		  	    <option value="USER">Assistants</option>
		  	    <option value="FACULTY">Faculty</option>
		  	</select>

		  	


		 	<table className="table table-striped">
				<thead>
					<tr>
						<th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>	Last Activity</th><th>Total Activity</th>
          			</tr>
				</thead>

				<tbody>
					{users.map((user:any) => (
						<tr key= {user._id}>
							<td className="text-nowrap"> {user.firstName} {user.lastName}
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