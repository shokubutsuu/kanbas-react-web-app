import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsGripVertical } from 'react-icons/bs';
import * as userClient from "./Account/client";

export default function Dashboard({ allCourses, courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse, enrolling, setEnrolling, updateEnrollment }: {
    allCourses: any[];
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void;
    enrolling: boolean; setEnrolling: (enrolling: boolean) => void;
    updateEnrollment: (courseId: string, enrolled: boolean) => void;
  }) {
  {
    const [isEnrolled, setIsEnrolled] = useState<any>(true);
    const [enrolledCourses, setEnrolledCourses] = useState<any[]>(courses);

    const { currentUser } = useSelector((state: any) => state.accountReducer);
    let haveEditAccess = currentUser.role === "FACULTY"

    const enrollUserToCourse = async (courseId: string) => {
      const response = await userClient.enrollUserInCourse(courseId);
      return response;
    }
    const unenrollUserToCourse = async (courseId: string) => {
      const response = await userClient.unenrollUserInCourse(courseId);
      return response;
    }

    const handleEnrollment = () => {
      if (isEnrolled) {
        setIsEnrolled(false);
      } else {
        setIsEnrolled(true);
      }
    }
    const handleEnrollClick = async (e: any) => {
      try {
        const enrollments = await enrollUserToCourse(e.target.name);
        setEnrolledCourses(enrollments); // Update state properly
      } catch (error) {
        console.error("Failed to enroll in the course:", error);
      }
    };

    const handleUnenrollClick = async (e: any) => {
      try {
        const enrollments = await unenrollUserToCourse(e.target.name);
        setEnrolledCourses(enrollments);
      } catch (error) {
        console.error("Failed to unenroll in the course:", error);
      }
    }

    useEffect(
      () => {
        setEnrolledCourses(courses);
      }, [courses]
    )

    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard
          <button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary" >
            {enrolling ? "My Courses" : "All Courses"}
          </button>
        </h1> <hr />
        {haveEditAccess &&
          <>
            <h5>New Course
              <button className="btn btn-primary float-end"
                id="wd-add-new-course-click"
                onClick={addNewCourse} > Add </button>
              <button className="btn btn-warning float-end me-2"
                onClick={updateCourse} id="wd-update-course-click">
                Update
              </button>
            </h5><br />

            <input value={course.name} className="form-control mb-2"
              onChange={(e) => setCourse({ ...course, name: e.target.value })} />
            <textarea value={course.description} className="form-control"
              onChange={(e) => setCourse({ ...course, description: e.target.value })} />
          </>
        }

        {haveEditAccess ?
          <>
            <h2 id="wd-dashboard-published">Published Courses ({enrolledCourses.length})</h2> <hr />
          </> :
          <>
            <div className="d-flex justify-content-between align-items-center">
              <h2 id="wd-dashboard-published">Courses ({enrolledCourses ? enrolledCourses.length : 0})</h2>
              <button type="button" className="btn btn-primary" onClick={handleEnrollment}>
                {
                  isEnrolled ? "Enrollment" : "Enrolled"
                }
              </button>
            </div>
            <hr />
          </>
        }

        <div id="wd-dashboard-courses" className="row">

          {
            isEnrolled ?
              (<div className="row row-cols-1 row-cols-md-5 g-4">
                {enrolledCourses?.map((course) => (
                  <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                    <div className="card rounded-3 overflow-hidden">
                      <Link to={`/Kanbas/Courses/${course._id}/Home`}
                        className="wd-dashboard-course-link text-decoration-none text-dark" >
                        <img src="images/reactjs.jpg" width="100%" height={160} />
                        <div className="card-body">
                          <h5 className="wd-dashboard-course-title card-title">
                            {enrolling && (
                              <button
                                onClick={(event) => {
                                  event.preventDefault();
                                  updateEnrollment(course._id, !course.enrolled);
                                }}
                                className={`btn ${course.enrolled ? "btn-danger" : "btn-success"} float-end`
                                } >
                                {course.enrolled ? "Unenroll" : "Enroll"}
                              </button>
                            )}
                            {course.name} </h5>
                          <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                            {course.description} </p>
                          <button className="btn btn-primary"> Go </button>
                          {haveEditAccess &&
                            <>
                              <button onClick={(event) => {
                                event.preventDefault();
                                deleteCourse(course._id);
                              }} className="btn btn-danger float-end"
                                id="wd-delete-course-click">
                                Delete
                              </button>

                              <button id="wd-edit-course-click"
                                onClick={(event) => {
                                  event.preventDefault();
                                  setCourse(course);
                                }}
                                className="btn btn-warning me-2 float-end" >
                                Edit
                              </button>
                            </>
                          }
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>)
              :
              (<div >
                <ul className="wd-courses list-group rounded-0">
                  {allCourses.map((course) => (
                    <li className="wd-course list-group-item p-3 ps-1">
                      <BsGripVertical className="me-2 fs-3" /> {course.name}
                      {enrolledCourses?.find((c) => {
                        return c._id === course._id;
                      }) ? (
                        <button type="button" name={course._id} className="btn btn-danger" onClick={(e) => handleUnenrollClick(e)} style={{ float: "right" }}>unenroll</button>
                      ) : (
                        <button type="button" name={course._id} className="btn btn-success" onClick={(e) => handleEnrollClick(e)} style={{ float: "right" }}>enroll</button>
                      )}
                    </li>
                  ))}
                </ul>
              </div>)
          }

        </div>
      </div>);
  }
}
