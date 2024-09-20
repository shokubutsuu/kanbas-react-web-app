import Labs from "./Labs";
import Kanbas from "./Kanbas";
import { HashRouter, Route, Routes, Navigate, Link } from "react-router-dom";
export default function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Kanbas" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>

    <hr/>
    <label>author: Yiqian Li</label><br/>
    <a href="https://github.com/shokubutsuu/kanbas-react-web-app">link to github repo</a> <br/>
    <Link to='/Kanbas'>link to Kanbas</Link><br/>
    <Link to='/Labs/Lab1'>link to Lab1</Link><br/>
    <Link to='/Labs/Lab2'>link to Lab2</Link><br/>
    <Link to='/Labs/Lab3'>link to Lab3</Link><br/>
    </HashRouter>

  );
}
