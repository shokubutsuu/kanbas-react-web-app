import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;
export const fetchAllCourses = async () => {
    const { data } = await axios.get(COURSES_API);
    console.log("trying to print fetched courses",data);
    return data;
};
export const deleteCourse = async (id: string) => {
    const { data } = await axios.delete(`${COURSES_API}/${id}`);
    return data;
};
export const updateCourse = async (course: any) => {
    const { data } = await axios.put(`${COURSES_API}/${course._id}`, course);
    return data;
};
export const findModulesForCourse = async (courseId: string) => {
    const response = await axios
        .get(`${COURSES_API}/${courseId}/modules`);
    return response.data;
};
export const findAssignmentsForCourse = async (courseId: string) => {
    const response = await axios
        .get(`${COURSES_API}/${courseId}/assignments`);
    return response.data;
};
export const createModuleForCourse = async (courseId: string, module: any) => {
    const response = await axios.post(
        `${COURSES_API}/${courseId}/modules`,
        module
    );
    return response.data;
};
export const createAssignmentForCourse = async (courseId: string, assignment: any)=>{
    const response = await axios.post(
        `${COURSES_API}/${courseId}/assignments`, assignment
    );
    return response.data;
}

export const findEnrolledUsersForCourse = async (courseId: string) =>{
    const response = await axios.get(
        `${COURSES_API}/${courseId}/users` );
    return response.data;
}