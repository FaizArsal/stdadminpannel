import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "../screen/admin";
import Home from "../screen/home";
import Login from "../screen/login";
import RegitsrationForm from "../screen/registration";
import Result from "../screen/result";
import Signup from "../screen/signup";
import StudentList from "../screen/students";
function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/:id" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="form" element={<RegitsrationForm />} />
          <Route path="result" element={<Result />} />
          <Route path="signup" element={<Signup />} />
          <Route path="admin/*" element={<Admin />} />
          <Route path="stdlist" element={<StudentList />} />
        </Routes>
      </Router>
    </>
  );
}
export default AppRouter;
