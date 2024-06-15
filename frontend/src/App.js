// src/App.js
import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AdminDashboard } from './pages/admin'
import { FellowPage } from './pages/fellow'
import LineChart from './components/LineChart'
import PieChart from './components/PieChart'

function App() {
  const data = [35, 39, 59, 47]
  return (
    <div>
      <h1>Line Chart</h1>
      
        <PieChart data={data} />
      </div>
  )
}

export default App
