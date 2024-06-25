import { createSlice } from "@reduxjs/toolkit";

/*delete later 
//quiz removed from frontend database
const initialState = {
	quizes: quizes
}
delete later*/


const initialState = {
	quizes: []
}
// quizes is [state]



const quizSlice = createSlice({
	name: "quiz",
	initialState,

	reducers: {
		setCurrentQuiz: (state, action) => {
			state.quizes = action.payload;
		},
		
		addQuiz: (state, action) => {
			const newQuiz: any = {
				quizId:action.payload.quizId,
				quizName:action.payload.quizName,
				/*instructions:quiz.instructions,
				quizType:quiz.quizType,
				assignmentGroup:quiz.assignmentGroup,
				totalScore:quiz.totalScore,
				quizTime:quiz.quizTime,
				quizDue:quiz.quizDue,
				available:quiz.available,
				until:quiz.until,
				shuffleAnswers:quiz.shuffleAnswers,
				timeLimit:quiz.timeLimit,
				allowMultiple:quiz.allowMultiple,
				viewResponses:quiz.viewResponses,
				showCorrectAnswers:quiz.showCorrectAnswers,
				oneQuestionAtATime:quiz.oneQuestionAtATime,
				requireRespondusLockDown:quiz.requireRespondusLockDown,
				browser:quiz.browser,
				requireToViewQuizResults:quiz.requireToViewQuizResults,
				webCamRequired:quiz.webCamRequired,
				lockQuestionsAfterAnswering:quiz.lockQuestionsAfterAnswering,
				forEveryOne:quiz.forEveryOne,
				questions:quiz.questions*/
			}
			const test = {id: "hello", value: "world"}
			state.quizes = [...state.quizes, test] as any;
		},
	},
});
// reducer saves functions [, actions], 

export const { setCurrentQuiz, addQuiz } = quizSlice.actions;
export default quizSlice.reducer;