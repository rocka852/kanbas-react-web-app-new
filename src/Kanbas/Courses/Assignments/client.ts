import axios from "axios"

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const MODULES_API = `${REMOTE_SERVER}/api/modules`;
const ASSIGNMENT_API = `${REMOTE_SERVER}/api/assignments`;

export const deleteModule = async (moduleId: string) => {
  const response = await axios.delete(`${ASSIGNMENT_API}/${moduleId}`);
  return response.data;
};

export const createModule = async (courseId: string, module: any) => {
  const response = await axios.post( `${COURSES_API}/${courseId}/assignments`, module );
  return response.data;
};


export const findModulesForCourse = async (courseId: string) =>{
	const response = await axios.get(`${COURSES_API}/${courseId}/assignments`)
	return response.data
}

export const updateModule = async (module: any) => {
  	const response = await axios.put(`${ASSIGNMENT_API}/${module._id}`, module);
  	return response.data;
};