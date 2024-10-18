import { Link } from "react-router-dom";
import coursesData from "./test_data/kanbas_courses.json"
import * as db from './Database'

const CourseDashboard = () => {
    const courses = db.courses;
    // const courses = coursesData['course-list'];
    // return (
    //     <div id="wd-dashboard-courses" className="row">
    //         <div className="row row-cols-1 row-cols-md-5 g-4">
    //             {courses.map((course, index) => (
    //                 <div key={index} className="wd-dashboard-course col" style={{ width: "300px" }}>
    //                     <div className="card rounded-3 overflow-hidden">

    //                         <Link className="wd-dashboard-course-link text-decoration-none text-dark"
    //                             to={`/Kanbas/Courses/${course['course-code']}/Home`}>
    //                             <img src={course['course-pic']} width="100%" height={160} />
    //                             <div className='card-body'>
    //                                 <h5 className="wd-dashboard-course-title card-title">{course['course-name']}</h5>
    //                                 <p className="wd-dashboard-course-title card-text">
    //                                     {course['course-title']}
    //                                 </p>
    //                                 <button className="btn btn-primary">Go</button>
    //                             </div>
    //                         </Link>
    //                     </div>
    //                 </div>
    //             ))}
    //         </div>
    //     </div>
    // );
    return (
        <div id="wd-dashboard">
          <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
          <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
          <div id="wd-dashboard-courses" className="row">
            <div className="row row-cols-1 row-cols-md-5 g-4">
              {courses.map((course) => (
                <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                  <div className="card rounded-3 overflow-hidden">
                    <Link to={`/Kanbas/Courses/${course._id}/Home`}
                          className="wd-dashboard-course-link text-decoration-none text-dark" >
                      <img src="images/reactjs.jpg" width="100%" height={160} />
                      <div className="card-body">
                        <h5 className="wd-dashboard-course-title card-title">
                          {course.name} </h5>
                        <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                          {course.description} </p>
                        <button className="btn btn-primary"> Go </button>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>);
}

export default function Dashboard() {
    return (
        <CourseDashboard />
    );
}
