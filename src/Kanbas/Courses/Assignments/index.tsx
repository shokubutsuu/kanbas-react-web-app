export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input id="wd-search-assignment"
             placeholder="Search for Assignments" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <a className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/a1">
            A1 - ENV + HTML
          </a>
          <p>Multiple Modules | Not available until May 6 at 12:00 am | Due May 13 at 11:59pm | 100 pts</p>
        </li>
        <li className="wd-assignment-list-item">
        <a className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/a2">
            A2 - CSS + BOOTSTRAP
          </a>
          <p>Multiple Modules | Not available until May 13 at 12:00 am | Due May 20 at 11:59pm | 100 pts</p>
        </li>
        <a className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/a3">
            A3 - JAVASCRIPT + REACT
          </a>
          <p>Multiple Modules | Not available until May 60 at 12:00 am | Due May 27 at 11:59pm | 100 pts</p>
      </ul>
    </div>
);}
