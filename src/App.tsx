import Labs from "./Labs";
import Kanbas from "./Kanbas";
import store from "./Kanbas/store";
import { Provider } from "react-redux";
import { HashRouter, Route, Routes, Navigate, Link } from "react-router-dom";
export default function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Navigate to="Kanbas" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>

        <div className="position-absolute bottom-0 end-0">
          <hr />
          <label>author: Yiqian Li</label><br />
          <a href="https://github.com/shokubutsuu/kanbas-react-web-app">link to github repo</a> <br />
          <Link to='/Kanbas'>link to Kanbas</Link><br />
          <Link to='/Labs/Lab1'>link to Lab1</Link><br />
          <Link to='/Labs/Lab2'>link to Lab2</Link><br />
          <Link to='/Labs/Lab3'>link to Lab3</Link><br />
          <Link to='/Labs/Lab4'>link to Lab4</Link><br />
        </div>
      </Provider>
    </HashRouter>


  );
}
