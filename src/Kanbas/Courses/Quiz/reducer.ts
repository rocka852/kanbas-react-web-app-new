import { createSlice} from "@reduxjs/toolkit";

/*delete later 
//quiz removed from frontend database
const initialState = {
	quizes: quizes
}
delete later*/


const initialState = {
	quizes: [],
};
// quizes is [state]



const quizSlice = createSlice({
	name: "quiz",
	initialState,

	reducers: {
		setCurrentQuiz: (state, action) => {
			state.quizes = action.payload;
		},
	},
});
// reducer saves functions [, actions], 

export const { setCurrentQuiz } = quizSlice.actions;
export default quizSlice.reducer;