import axios from "axios";
export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const QUIZES_API = `${REMOTE_SERVER}/api/quizzes`;

export const findAllQuiz = async () => {
	const response = await axios.get(QUIZES_API)
	return response.data
}

export const createQuiz = async (quiz: any) => {
	const response = await axios.post(`${QUIZES_API}`, quiz)
	return response.data
}

export const findQuizById = async (id: string) => {
	const response = await axios.get(`${QUIZES_API}/${id}`)
	return response.data
}

export const updateQuizById = async (quiz: any) => {
	console.log("===in quiz client should print the new one: " + JSON.stringify(quiz))
	const response = await axios.put(`${QUIZES_API}/${quiz.quizId}`, quiz)
	return response.data
}
