import axios from "axios"

export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const USERS_API = `${REMOTE_SERVER}/api/users`;

export const findAllUsers = async () => {
  const response = await axios.get(USERS_API);
  return response.data;
};

export const findUsersByRole = async(role: string)=>{
	const response = await axios.get(`${USERS_API}?role=${role}`)
	return response.data
}

export const findUserByPartialName = async(name: string) => {
	const response = await axios.get(`${USERS_API}?name=${name}`)
	return response.data
}

export const findUserById = async(id: string) => {
	const response = await axios.get(`${USERS_API}/${id}`)
	return response.data
} 
export const deleteUser = async(userId: string) =>{
	const response = await axios.delete(`${USERS_API}/${userId}`)
	return response.data
}

export const updateUser = async (user: any) => {
	console.log("=========in client: " + JSON.stringify(user))
	//const response = await axios.put(`${USERS_API}/${user._id}`, user)
	const response = await axios.put(`${USERS_API}/${user._id}`, user);

	//console.log("STATUS: ")

	return response.data
}

export const createUser = async(user: any) => {
	const response = await axios.post(`${USERS_API}`, user)
	return response.data
}