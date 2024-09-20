export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description" style = {{height: "100px", width: "400px"}}>
                The assignment is available online Submit a link to the landing page of
            </textarea>
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>

                    <td>
                        <select id="wd-group">
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
                        <select id="wd-display-grade-as">
                            <option value="PERC">Percentage</option>
                            <option value="POINT">Points</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option value="ONL">Online</option>
                            <option value="INP">In Person</option>
                        </select>
                        <div>
                            <label>Online Entry Options</label><br />
                            <div>
                                <input type="checkbox" id="wd-text-entry" name="text" />
                                <label style={{ fontSize: '13px' }}>Text Entry</label>
                            </div>
                            <div>
                                <input type="checkbox" id="wd-website-url" name="url" />
                                <label style={{ fontSize: '13px' }}>Website Url</label>
                            </div>
                            <div>
                                <input type="checkbox" id="wd-media-recordings" name="media" />
                                <label style={{ fontSize: '13px' }}>Media Recordings</label>
                            </div>
                            <div>
                                <input type="checkbox" id="wd-student-annotation" name="annota" />
                                <label style={{ fontSize: '13px' }}>Student Annotation</label>
                            </div>
                        </div>
                        <div>
                            <input type="checkbox" id="wd-file-upload" name="file" />
                            <label style={{ fontSize: '13px' }}>File Uploads</label>
                        </div>
                    </td >

                </tr >
                <br/>
                <tr>
                    <td align="right" valign="top">
                        <label >Assign</label>
                    </td>
                    <td>
                        <div>Assign To</div>
                        <div>
                            <select id="wd-assign-to">
                                <option value="EVERYONE">Everyone</option>
                                <option value="SELECTED">Selected Student</option>
                            </select>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <label>Due</label><br/>
                        <input type="date" id="wd-due-date" name="due"></input>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <label>Available From</label><br/>
                        <input type="date" id="wd-available-from" name="due"></input>
                    </td>
                    <td>
                        <label>Until</label><br/>
                        <input type="date" id="wd-available-until" name="due"></input>
                    </td>
                </tr>

            </table >
            <hr/>
            <button style = {{float:"right"}}>Save</button>
            <button style = {{float:"right"}}>Cancel</button>
        </div >
    );
}
