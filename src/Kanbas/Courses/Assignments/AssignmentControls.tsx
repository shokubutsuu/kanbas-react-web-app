import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import {CiSearch} from "react-icons/ci"

export default function AssignmentControls() {
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignments
      </button>
      <button id="wd-publish-all-btn" className="btn btn-lg btn-secondary float-end me-1">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group
      </button>
      <div className="input-group" style={{ maxWidth: "300px", height: "50px" }} >
      <span className="input-group-text" id="search-icon">
          <CiSearch style={{ fontSize: "1.5em" }} />
        </span>
        <input type="text" className="form-control" placeholder="Search..." aria-label="Search" aria-describedby="search-icon"/>
      </div>
    </div>
  );
}

