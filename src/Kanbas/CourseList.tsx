import { BsGripVertical } from 'react-icons/bs';
export default function CourseList({ courses, enrolledCourses, handleEnrollClick, handleUnenrollClick }: {
    courses: any[]; enrolledCourses: any[]; handleEnrollClick: () => void; handleUnenrollClick: () => void;
}) {
    return ((<div >
        <ul className="wd-courses list-group rounded-0">
            {courses.map((course) => (
                <li className="wd-course list-group-item p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" /> {course.name}
                    {enrolledCourses?.find((c) => {
                        return c._id === course._id;
                    }) ? (
                        <button type="button" name={course._id} className="btn btn-danger" onClick={handleUnenrollClick} style={{ float: "right" }}>unenroll</button>
                    ) : (
                        <button type="button" name={course._id} className="btn btn-success" onClick={handleEnrollClick} style={{ float: "right" }}>enroll</button>
                    )}
                </li>
            ))}
        </ul>
    </div>));
}