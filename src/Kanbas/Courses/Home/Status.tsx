
import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle, FaHome } from "react-icons/fa";
import { BiImport, BiLogoZoom } from "react-icons/bi";
import { GrAnnounce } from "react-icons/gr";
import { LiaFileImportSolid } from "react-icons/lia";
import { TbFileAnalytics } from "react-icons/tb";
import { IoNotifications } from "react-icons/io5";

export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ width: "300px" }}>
      <h2>Course Status</h2>
      <div className="d-flex">
        <div className="w-50 pe-1">
          <button className="btn btn-lg btn-secondary w-100 text-nowrap ">
            <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish </button>
        </div>
        <div className="w-50">
          <button className="btn btn-lg btn-success w-100">
            <FaCheckCircle className="me-2 fs-5" /> Publish </button>
        </div>
      </div><br />
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BiImport className="me-2 fs-5" /> Import Existing Content </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <FaHome className="me-2 fs-5" /> Choose Home Page</button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BiLogoZoom className="me-3 fs-5" />View Course Stream</button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <GrAnnounce className="me-3 fs-5" />New Anouncement</button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <TbFileAnalytics className="me-3 fs-5"/>New Analytics</button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <IoNotifications className="me-3 fs-5"/>View Course Notifications</button>
    </div>
  );
}
