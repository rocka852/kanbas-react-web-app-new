import {Routes, Route, Navigate} from "react-router-dom"
import Signin from "./Signin"
import AccountNavigation from "./Navigation"
import {useSelector} from "react-redux"
import Profile from "./Profile"
import Signup from "./Signup"

export default function Account() {
	return(
		<div>
			<div className="d-flex">
				<div className="d-none d-md-block">
					<AccountNavigation/>
				</div>

				<div className = "flex-fill p-4 pt-0">
					<Routes>
						<Route path="/" 
						       element = {<Navigate to="/Kanbas/Account/Signin"/>} />
						<Route path="/Signin"
						       element = {<Signin/>}/>
						<Route path="/Signup"
						       element = {<Signup/>}/>
						<Route path="/Profile"
						       element = {<Profile/>}/>
					</Routes>
				</div>
			</div>
		</div>
	)
}