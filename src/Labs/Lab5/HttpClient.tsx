import React, { useEffect, useState } from "react";
//import axios from "axios";
import * as client from "./client"
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function HttpClient() {
	const [welcomeOnClick, setWelcomeOnClick] = useState("")
	const [welcomeOnLoad, setWelcomeOnLoad] = useState("")
	 {/* old
	 const fetchWelcomeOnClick = async() =>{
	 	const response = await axios.get(`${REMOTE_SERVER}/lab5/welcome`)
	 	setWelcomeOnClick(response.data)
	 }*/}
	 {/*The fetchWelcomeOnClick function is tagged as async since it uses axios.get() to asynchronously send a request to the server, and returns the response from the server*/}

	 const fetchWelcomeOnClick = async() =>{
	 	const message = await client.fetchWelcomeMessage();
	 	setWelcomeOnClick(message)
	 }

	 const fetchWelcomeOnLoad = async()=> {
	 	const welcome = await client.fetchWelcomeMessage()
	 	setWelcomeOnLoad(welcome)
	 }
	 useEffect(()=>{fetchWelcomeOnLoad()}, []);
	 {/* Use React's useEffect hook function as shown below to invoke the fetchWelcomeOnLoad when a component or screen first loads.*/}
	 {/* cannot use ()=> fetchWelcomeOnLoad() or () =>(fetchWelcomeOnLoad())
	 because Type 'Promise<void>' is not assignable to type 'void | Destructor'.
	 this is not a return type*/
	 }
	 
	 return(
	 	<div>
	 	<hr/>
	 		<h3>HTTP Client</h3>
	 		<hr/>
	 		<h4>Requesting on Click</h4>
	 		<button className="btn btn-primary me-2"
	 		        onClick={fetchWelcomeOnClick}>
	 		    Fetch Welcome
	 		</button>
	 		<br/>
	 		Response from server: 
	 		<b>{welcomeOnClick}</b>
	 		<h4> Requesting on Load </h4>

	 		Response from server: <b>{welcomeOnLoad}</b>
	 	</div>
	 )
}

{/*Encountering CORS error
Servers and browsers limit JavaScript programs to only be able to communicate with the servers from where they are downloaded from. Since our React.js application is running locally from localhost:3000, then they would only be able to communicate back to a server running on localhost:3000, but our server is running on localhost:4000, so when our JavaScript components try to communicate with localhost:4000, the browser considers a different domain as a security risk, stops the communication and throws a CORS exception. CORS stands for Cross Origin Request Sharing,

*/}