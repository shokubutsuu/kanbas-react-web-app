import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home"
import Assignments from "./Assignments";
import AssignmentPreview from "./Assignments/Preview";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from 'react-icons/fa6';
import { Navigate, Route, Routes, useLocation, useParams } from "react-router";
import PeopleTable from "./People/Table";
export default function Courses({ courses }: { courses: any[]; }) {
    const { cid } = useParams();
    const course = courses.find((course) => course._id === cid);
    const {pathname} = useLocation();
    return (
        <div id="wd-courses">
            <h2 className="text-danger">
                <FaAlignJustify className="me-4 fs-4 mb-1" />
                {course && course.name} &gt; {pathname.split("/")[4]}
              </h2>
            <hr />
            <div className="d-flex">
                <div className="d-none d-md-block">
                    <CoursesNavigation />
                </div>
                <div className="flex-fill">
                    <Routes> 
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Assignments/:aid" element={<AssignmentPreview />} />
                        <Route path="Assignments/:aid/Edit" element={<AssignmentEditor />} />
                        <Route path="Assignments/AddAssignment" element={<AssignmentEditor/>}/>
                        <Route path="People" element={<PeopleTable cid={cid} />} />
                    </Routes>
                </div>
            </div>

        </div>
    );
}
