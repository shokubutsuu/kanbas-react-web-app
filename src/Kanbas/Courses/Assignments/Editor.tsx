export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label><br />
            <input type="text" className="form-control" id="wd-name" value="A1 - ENV + HTML" /><br />
            <textarea id="wd-description" className="form-control" style={{ height: "100px" }}>
                The assignment is available online
                Submit a link to the landing page of your Web application running on Netlify.

                The landing page should include the following:

                Your full name and section
                Links to each of the lab assignments
                Link to the Kanbas application
                Links to all relevant source code repositories
                The Kanbas application should include a link to navigate back to the landing page.
            </textarea>
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} className="form-control" />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>

                    <td>
                        <select id="wd-group" className="form-control">
                            <option value="ASSI">ASSIGNMENTS</option>
                            <option value="PROJ">PROJECTS</option>
                            <option value="QUIZ">QUIZES</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as" className="form-control">
                            <option value="PERC">Percentage</option>
                            <option value="POINT">Points</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type" >Submission Type</label>
                    </td>
                    <td >
                        <div className="form-control">
                            <select id="wd-submission-type" className="form-control" >
                                <option value="ONL">Online</option>
                                <option value="INP">In Person</option>
                            </select>
                            <div>
                                <label>Online Entry Options</label><br />
                                <div className="form-check">
                                    <input type="checkbox" id="wd-text-entry" name="text" className="form-check-input" />
                                    <label style={{ fontSize: '13px' }}>Text Entry</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" id="wd-website-url" name="url" className="form-check-input" />
                                    <label style={{ fontSize: '13px' }}>Website Url</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" id="wd-media-recordings" name="media" className="form-check-input" />
                                    <label style={{ fontSize: '13px' }}>Media Recordings</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" id="wd-student-annotation" name="annota" className="form-check-input" />
                                    <label style={{ fontSize: '13px' }}>Student Annotation</label>
                                </div>
                                <div className="font-check-input">
                                    <input type="checkbox" id="wd-file-upload" name="file" className="form-check-input" />
                                    <label style={{ fontSize: '13px' }}>File Uploads</label>
                                </div>
                            </div>
                        </div>
                    </td >

                </tr >
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label >Assign</label>
                    </td>
                    <td>
                        <div className="form-control">
                            <div>
                                <div>Assign to</div>
                                <div>
                                    <select id="wd-assign-to">
                                        <option value="EVERYONE">Everyone</option>
                                        <option value="SELECTED">Selected Student</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label>Due</label><br />
                                <input type="date" id="wd-due-date" name="due"></input>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <label>Available From</label><br />
                                    <input type="date" id="wd-available-from" name="due"></input>
                                </div>

                                <div className="col-6">
                                    <label>Until</label><br />
                                    <input type="date" id="wd-available-until" name="due"></input>
                                </div>
                            </div>

                        </div>
                    </td>
                </tr>


            </table >
            <hr />
            <button className="btn btn-danger me-2" style={{ float: "right" }}>Save</button>
            <button className="btn btn-secondary me-2" style={{ float: "right" }}>Cancel</button>
        </div >
    );
}
