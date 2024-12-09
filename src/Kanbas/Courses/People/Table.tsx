import { FaUserCircle } from "react-icons/fa";
//import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as coursesClient from "../client";
import PeopleDetails from "./Details";
import { Link, useParams } from "react-router-dom";
export default function PeopleTable({ users, cid}: { users?: any[] ; cid?: string}) {

    const [displayed, setDisplayed] = useState<any[]>([]);
    
    const handeUserUpdate = (user: any) => {
        const index = displayed.findIndex(u => u.id === user.id);
      
        if (index !== -1) {
          // User exists, update the user
          const updatedUsers = [...displayed];
          updatedUsers[index] = user; // Replace the existing user with the new user data
          setDisplayed(updatedUsers);
        } else {
          // User does not exist, add new user
          setDisplayed([...displayed, user]);
        }
      };
      
    useEffect(
        
        ()=>{
            const fetchEnrolledUsers = async () => {
                const enrolledUsers = await coursesClient.findEnrolledUsersForCourse(cid as string);
                setDisplayed(enrolledUsers);
            };
            if(cid){
                fetchEnrolledUsers();
            }
            else if(users !== undefined){
                setDisplayed(users);
            }else{
                console.error("this shouldnt happen.");
            }
        }, 
        []
    );
    return (
        <div id="wd-people-table">
            <PeopleDetails onUserUpdate={handeUserUpdate}/>
            <table className="table table-striped">
                <thead>
                    <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
                </thead>
                <tbody>
                    {displayed
                        .map((user: any) => (
                            <tr key={user._id}>
                                <td className="wd-full-name text-nowrap">
                                    <Link to={`/Kanbas/Account/Users/${user._id}`} className="text-decoration-none">
                                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                                        <span className="wd-first-name">{user.firstName}</span>{" "}
                                        <span className="wd-last-name">{user.lastName}</span>
                                    </Link>
                                </td>
                                <td className="wd-login-id">{user.loginId}</td>
                                <td className="wd-section">{user.section}</td>
                                <td className="wd-role">{user.role}</td>
                                <td className="wd-last-activity">{user.lastActivity}</td>
                                <td className="wd-total-activity">{user.totalActivity}</td>
                            </tr>
                        ))}
                </tbody>

            </table>
        </div>
    );
}