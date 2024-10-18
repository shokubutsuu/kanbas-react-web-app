import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import AssignmentControls from "./AssignmentControls";
import Note from "./Note";
import { BsGripVertical } from 'react-icons/bs';
import { MdOutlineAssignment } from "react-icons/md";
import * as db from "../../Database";
import { useParams, useLocation } from "react-router";
export default function Assignments() {
  const {pathname} = useLocation();
  const {cid} = useParams();
  const assignments = db.assignemnts;
  return (
    <div>
      <AssignmentControls /><br />
      <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-assignment-title list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            Assignments
            <ModuleControlButtons />
            <Note />
          </div>

          <ul className="wd-assignment-list list-group rounded-0">
            {
              assignments.filter((assignment) => assignment.course === cid).map((assignment) =>(
                <li className="wd-assignment-list-item list-group-item p-3 ps-1 " >
                <div className="row">
                  <div className="col-2 center-icons">
                    <BsGripVertical className="me-2 fs-3" />
                    <MdOutlineAssignment className="me-2 fs-3" style={{ color: 'green' }} />
                  </div>
                  <div className='col-8'>
                    <a className="wd-assignment-link"
                      href={'#' +pathname+'/'+ assignment._id}>
                      {assignment._id} - {assignment.title}
                    </a>
                    <p><span style={{ color: 'red' }}>Multiple Modules</span> | <span style={{ fontWeight: 'bold' }}>Not available until </span> {new Date(assignment.available).toLocaleString()} | <span style={{ fontWeight: 'bold' }}>Due</span> {new Date(assignment.due).toLocaleString()} | {assignment.points} pts</p>
                  </div>
  
                  <div className='col-2 center-icons'>
                    <LessonControlButtons />
                  </div>
                </div>
  
              </li>
              )

              )
            }

            {/* <li className="wd-assignment-list-item list-group-item p-3 ps-1 " >
              <div className="row">
                <div className="col-2 center-icons">
                  <BsGripVertical className="me-2 fs-3" />
                  <MdOutlineAssignment className="me-2 fs-3" style={{ color: 'green' }} />
                </div>
                <div className='col-8'>
                  <a className="wd-assignment-link"
                    href="#/Kanbas/Courses/1234/Assignments/a2">
                    A2 - CSS + BOOTSTRAP
                  </a>
                  <p><span style={{ color: 'red' }}>Multiple Modules</span> | <span style={{ fontWeight: 'bold' }}>Not available until </span>May 13 at 12:00 am | <span style={{ fontWeight: 'bold' }}>Due</span> May 20 at 11:59pm | 100 pts</p>
                </div>

                <div className='col-2 center-icons'>
                  <LessonControlButtons />
                </div>
              </div>

            </li> */}

{/* 
            <li className="wd-assignment-list-item list-group-item p-3 ps-1 " >
              <div className="row">
                <div className="col-2 center-icons">
                  <BsGripVertical className="me-2 fs-3" />
                  <MdOutlineAssignment className="me-2 fs-3" style={{ color: 'green' }} />
                </div>
                <div className='col-8'>
                  <a className="wd-assignment-link"
                    href="#/Kanbas/Courses/1234/Assignments/a3">
                    A3 - JAVASCRIPT + REACT
                  </a>
                  <p><span style={{ color: 'red' }}>Multiple Modules</span> | <span style={{ fontWeight: 'bold' }}>Not available until </span>May 20 at 12:00 am | <span style={{ fontWeight: 'bold' }}>Due</span> May 27 at 11:59pm | 100 pts</p>
                </div>

                <div className='col-2 center-icons'>
                  <LessonControlButtons />
                </div>
              </div>

            </li> */}
          </ul>
        </li>


      </ul>
    </div>

  );
}