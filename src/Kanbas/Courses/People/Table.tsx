import React, {useState, useEffect} from "react"
import * as client from "./client"

export default function PeopleTable() {
	const [users, setUsers] = useState<any[]>([])

	const fetchUsers = async() => {
		const users = await client.findAllUsers()
		setUsers(users)
	}
	useEffect(()=>{
		fetchUsers()
	}, [])

	return (
		<div id="wd-people-tatle">
		  <table className="table table-striped">
			<thead>
				<tr>
					<th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th>
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