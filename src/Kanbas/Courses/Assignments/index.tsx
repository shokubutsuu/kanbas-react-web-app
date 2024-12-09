import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import AssignmentControls from "./AssignmentControls";
import Note from "./Note";
import { BsGripVertical } from 'react-icons/bs';
import { MdOutlineAssignment } from "react-icons/md";
import { useParams, useLocation } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment, setAssignments, updateAssignment } from "./reducer";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";
import { useEffect, useState } from "react";

export default function Assignments() {
  const { pathname } = useLocation();
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const [haveEditAccess, setHaveEditAccess] = useState<boolean>(false);
  const dispatch = useDispatch();

  const fetchAssignments = async () => {
    const assignments = await coursesClient.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
    
  }
  const removeAssignment = async(assignmentId : string) =>{
    await assignmentsClient.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId))
  }
  useEffect(
    () => {
      fetchAssignments();
      setHaveEditAccess(currentUser.role === "FACULTY" || currentUser.role === "TA"|| currentUser.role === "ADMIN");
    }, []
  );
  return (
    <div>
      {haveEditAccess &&
        <>
          <AssignmentControls /><br />
        </>
      }
      <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-assignment-title list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            Assignments
            <ModuleControlButtons haveEditAccess={haveEditAccess} />
            <Note />
          </div>

          <ul className="wd-assignment-list list-group rounded-0">
            {
             // assignments.filter((assignment: any) => assignment.course === cid).map((assignment: any) => (
              assignments.map((assignment: any) => (
                <li className="wd-assignment-list-item list-group-item p-3 ps-1 " >
                  <div className="row">
                    <div className="col-2 center-icons">
                      <BsGripVertical className="me-2 fs-3" />
                      <MdOutlineAssignment className="me-2 fs-3" style={{ color: 'green' }} />
                    </div>
                    <div className='col-8'>
                      <a className="wd-assignment-link"
                        href={'#' + pathname + '/' + assignment._id}>
                        {assignment._id} - {assignment.title}
                      </a>
                      <p><span style={{ color: 'red' }}>Multiple Modules</span> | <span style={{ fontWeight: 'bold' }}>Not available until </span> {new Date(assignment.available).toLocaleString()} | <span style={{ fontWeight: 'bold' }}>Due</span> {new Date(assignment.due).toLocaleString()} | {assignment.points} pts</p>
                    </div>

                    <div className='col-2 center-icons'>
                      <LessonControlButtons hasEditAccess={haveEditAccess} assignmentId={assignment._id}
                        deleteAssignment={(assignmentId)=>removeAssignment(assignmentId)} />
                    </div>
                  </div>

                </li>
              )

              )
            }

          </ul>
        </li>


      </ul>
    </div>

  );
}