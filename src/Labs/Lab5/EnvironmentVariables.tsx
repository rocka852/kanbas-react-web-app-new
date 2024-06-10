const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER
{/*when declare .env file, don't add space, quote and need restart*/}

export default function EnvironmentVariables(){
	return(
		<div id = "wd-environment-variables">
			<h3>Environment Variables</h3>
			<p>Remote Server: {REMOTE_SERVER}</p><hr/>
		</div>
	)
}