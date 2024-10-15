import { Link } from "react-router-dom";
import coursesData from "./test_data/kanbas_courses.json"

const CourseDashboard = () => {
    const courses = coursesData['course-list'];
    return (
        <div id="wd-dashboard-courses" className="row">
            <div className="row row-cols-1 row-cols-md-5 g-4">
                {courses.map((course, index) => (
                    <div key={index} className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">

                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to={`/Kanbas/Courses/${course['course-code']}/Home`}>
                                <img src={course['course-pic']} width="100%" height={160} />
                                <div className='card-body'>
                                    <h5 className="wd-dashboard-course-title card-title">{course['course-name']}</h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        {course['course-title']}
                                    </p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <CourseDashboard />
            </div>
        </div>
    );
}
