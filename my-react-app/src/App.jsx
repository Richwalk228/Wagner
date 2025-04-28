import "./App.css";
import { useNavigate, Route, Routes } from "react-router";
import {
  Login,
  Registration,
  Dashboard,
  Locations,
  ApplyNow,
  NewLoan,
  Disclosures,
  LoanForm,
  Resume,
} from "./pages";
import ReactDOM from "react-dom";
import Navbar from "./navbar";

function App() {
  const navigator = useNavigate();

  return (
    <>
      <Routes>
        //
        <Route path="/" element={<Dashboard />}></Route>
        //
        <Route path="/Registration" element={<Registration />}></Route>
        //
        <Route path="/Login" element={<Login />}></Route>
        //
        <Route path="/Locations" element={<Locations />}>
          {" "}
        </Route>
        //
        <Route path="/ApplyNow" element={<ApplyNow />}></Route>
        //
        <Route path="/newLoan" element={<NewLoan />}></Route>
        //
        <Route path="/Disclosures" element={<Disclosures />}></Route>
        //
        <Route path="/LoanForm" element={<LoanForm />}></Route>
        //
        <Route path="/Resume" element={<Resume/>}></Route>
      </Routes>
    </>
  );
}

export default App;
