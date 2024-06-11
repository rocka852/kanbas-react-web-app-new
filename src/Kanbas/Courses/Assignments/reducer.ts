import { createSlice } from "@reduxjs/toolkit";
//import { assignments } from "../../Database";

//console.log("==Assignment: " + JSON.stringify(assignments))

{/*
const initialState = {
  	assignments: assignments,
};
*/}
const initialState = {assignments:[]}

const assignmentsSlice = createSlice({
	name: "assignments",
	initialState,
	reducers: {

		setAssignment: (state, action)=>{
			state.assignments = action.payload
		},
		addAssignment: (state, {payload: assignment}) => {
			const newAssignment: any = {

			_id: assignment._id,
			title: assignment.title,
			course: assignment.course,
			
			};
			state.assignments = [...state.assignments, newAssignment] as any;
		},

		
		deleteAssignment: (state, { payload: assignmentId }) => {
      		state.assignments = state.assignments.filter(
        	(m: any) => m._id !== assignmentId);
    	},
    
    	updateAssignment: (state, { payload: assignment }) => {
      		state.assignments = state.assignments.map((m: any) =>
        	m._id === assignment._id ? assignment : m
      		) as any;
    	},
    
    	editAssignment: (state, { payload: assignmentId }) => {
    		console.log("in reducer: "+ typeof assignmentId)
    		console.log(JSON.stringify(assignmentId))
      		state.assignments = state.assignments.map((m: any) =>
      		
        	m._id === assignmentId ? { ...m, editing: true } : m
        	/*
        		return "in mapping" + typeof m._id + typeof assignmentId + " m: " + m._id + " a: " + assignmentId + " len " + m._id.length + assignmentId.length + " bool " + (m._id === assignmentId)
        	*/
      		) as any;
    	},

	}
});


export const {addAssignment, deleteAssignment, updateAssignment, editAssignment, setAssignment} = assignmentsSlice.actions;
export default assignmentsSlice.reducer
