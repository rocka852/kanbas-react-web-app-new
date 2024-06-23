import axios from "axios";
export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const QUIZES_API = `${REMOTE_SERVER}/api/quizes`;

export const findAllQuiz = async () => {
	const response = await axios.get(QUIZES_API)
	return response.data
}