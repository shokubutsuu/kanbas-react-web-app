import React from "react";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <input placeholder="username" className="form-control mb-2"/>
      <input placeholder="password" type="password" className="form-control mb-2"/>
      <input placeholder="verify password" type="password" className="form-control mb-2"/>

      <Link  className="btn btn-primary mb-2" to="/Kanbas/Account/Profile" > Sign up </Link><br/>
      <Link to="/Kanbas/Account/Signin" >Sign in</Link>
    </div>
);}