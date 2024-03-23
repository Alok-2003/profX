import Topnav from "./Components/Topnav/topnav"
import Sidenav from "./Components/Sidenav/sidenav"
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard'
import Announce from "./Components/Announce/Announce";
import Task from "./Components/Task/Task";
import Chats from "./Components/Chats/Chats";
import Result from "./Components/Result/Result";
import Support from "./Components/Support/Support";
import Resources from "./Components/Resources/Resources";
import Workload from "./Components/Workload/Workload";
import Exams from "./Components/Exams/Exams";
import Leaves from "./Components/Leaves/Leaves";
import Login from "./Components/Login/Login";
import Coursedetails from "./Components/Coursedetails/Coursedetails";
import { useRef } from "react";
import Addmarks from "./Components/Addmarks/Addmarks";
import Addstudent from "./Components/AddStudent/Addstudent";

function App() {
  const ref = useRef()
  return (
    <Router>
      <Topnav />
      <Sidenav />
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/' element={<Dashboard />} reference={ref} ></Route>
        <Route path='/announce' element={<Announce />}></Route>
        <Route path='/task' element={<Task />}></Route>
        <Route path='/chats' element={<Chats />}></Route>
        <Route path='/leave' element={<Leaves />}></Route>
        <Route path='/results' element={<Result />}></Route>
        <Route path='/resources' element={<Resources />}></Route>
        <Route path='/workload' element={<Workload />}></Route>
        <Route path='/exams' element={<Exams />}></Route>
        <Route path='/support' element={<Support />}></Route>
        <Route path='/coursedetails' element={<Coursedetails />}></Route>
        <Route path='/addmarks' element={<Addmarks />}></Route>
        <Route path='/addstudent' element={<Addstudent />}></Route>
      </Routes>
    </Router>
  )
}
export default App