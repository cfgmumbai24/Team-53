import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LineChart from '../components/LineChart'
import PieChart from '../components/PieChart'

export const FellowPage = () => {
  const [selectedClass, setSelectedClass] = useState(null)
  const classes = [1, 2, 3, 4, 5]

const data1 = [35, 39, 59, 47]
const data2 = [7, 8, 9, 7, 9, 8, 8, 9, 8, 8]

  const pageStyle = {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  }

  const headerStyle = {
    marginBottom: '30px',
    color: '#FF5733',
  }

  const classesContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }

  const classBlockStyle = {
    backgroundColor: '#FF5733', // Orange shade
    color: 'white',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    margin: '10px 0',
    width: '80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '18px',
    cursor: 'pointer',
  }

  const buttonStyle = {
    backgroundColor: '#4e8cff', // Lighter shade of blue
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    textDecoration: 'none',
  }

  const handleClassClick = (classNumber) => {
    setSelectedClass(classNumber)
  }

  return (
    <div style={pageStyle}>
      <h1 style={headerStyle}>Fellow Page</h1>
      <div style={classesContainerStyle}>
        {/* Wrap each class block with Link component */}
        {classes.map((classNumber) => (
          <Link
            to="/class-students"
            key={classNumber}
            style={classBlockStyle}
            onClick={() => handleClassClick(classNumber)}
          >
            <span>Class {classNumber}</span>
            <span style={{ visibility: 'hidden' }}>Dummy Text</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
