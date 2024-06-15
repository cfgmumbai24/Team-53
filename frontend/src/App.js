
// src/App.js
import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AdminDashboard } from './pages/admin'
import { FellowPage } from './pages/fellow'
import LineChart from './components/LineChart'
import PieChart from './components/PieChart'
import StudentDashboard from './components/StudentDetails/StudentDashborad'
import { HomePage } from './components/HomePage'
import { MainLogin } from './components/MainLogin'
import AddAssessment from './components/AddAssessment'
import AddFellowForm from './components/newfellow'
import AddStudentForm from './components/newstudent'
import StudentList  from './pages/class-students'


function App() {

const data1 = [35, 39, 59, 47];
const data2 = [7, 8, 9, 7, 9, 8, 8, 9, 8, 8];
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/MainLogin' element={<MainLogin />} />
        <Route path='/admin' element={<AdminDashboard />} />
        <Route path='/fellow' element={<FellowPage />} />
        <Route path='/line-chart' element={<LineChart data={data1} />} />
        <Route path='/pie-chart' element={<PieChart data={data2} />} />
        <Route path='/student-dashboard' element={<StudentDashboard />} />
        <Route path='/add-assessment' element={<AddAssessment />} />
        <Route path='/add-fellow' element={<AddFellowForm />} />
        <Route path='/add-student' element={<AddStudentForm />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
