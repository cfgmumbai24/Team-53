
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
  const data1 = [35, 39, 59, 47]
  const data2 = [7,8,9,7,9,8,8,9,8,8]
  return (
    <div>
        <PieChart data={data1} />
        <LineChart data={data2} />
        <StudentDashboard/>
        <HomePage />
        <MainLogin />
     
        <AddAssessment></AddAssessment>
        <AddFellowForm/>
        <AddStudentForm></AddStudentForm>
       < StudentList />

      </div>
  )

}

export default App
