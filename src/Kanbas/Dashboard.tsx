import { Link } from "react-router-dom";
import coursesData from "./test_data/kanbas_courses.json"

const CourseDashboard = () => {
    const courses = coursesData['course-list'];
    return (
        <div id="wd-dashboard-courses">

            {courses.map((course, index) => (
                <div key={index} className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to={`/Kanbas/Courses/${course['course-code']}/Home`}>
                        <img src={course['course-pic']} width={200} />
                        <div>
                            <h5>{course['course-name']}</h5>
                            <p className="wd-dashboard-course-title">
                                {course['course-title']}
                            </p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <CourseDashboard/>
            </div>
        </div>
    );
}
