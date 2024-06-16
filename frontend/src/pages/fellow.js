// src/pages/fellow.js
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import StudentCard from '../components/studentcard'

export const FellowPage = () => {
  const [selectedClass, setSelectedClass] = useState(null)
  const classes = [1, 2, 3, 4, 5]

  // Dummy data for each class
  const classStudents = [
    [], // Class 1 (No students)
    [
      // Class 2
      {
        id: 1,
        name: 'Student One',
        category: 'Category 1',
        photo: 'https://via.placeholder.com/40',
      },
      {
        id: 2,
        name: 'Student Two',
        category: 'Category 2',
        photo: 'https://via.placeholder.com/40',
      },
      {
        id: 3,
        name: 'Student Three',
        category: 'Category 3',
        photo: 'https://via.placeholder.com/40',
      },
      {
        id: 4,
        name: 'Student Four',
        category: 'Category 4',
        photo: 'https://via.placeholder.com/40',
      },
      {
        id: 5,
        name: 'Student Five',
        category: 'Category 5',
        photo: 'https://via.placeholder.com/40',
      },
    ],
    [], // Class 3 (No students)
    [], // Class 4 (No students)
    [
      // Class 5
      {
        id: 6,
        name: 'Student Six',
        category: 'Category 1',
        photo: 'https://via.placeholder.com/40',
      },
      {
        id: 7,
        name: 'Student Seven',
        category: 'Category 2',
        photo: 'https://via.placeholder.com/40',
      },
      {
        id: 8,
        name: 'Student Eight',
        category: 'Category 3',
        photo: 'https://via.placeholder.com/40',
      },
      {
        id: 9,
        name: 'Student Nine',
        category: 'Category 4',
        photo: 'https://via.placeholder.com/40',
      },
      {
        id: 10,
        name: 'Student Ten',
        category: 'Category 5',
        photo: 'https://via.placeholder.com/40',
      },
    ],
  ]

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
        {classes.map((classNumber) => (
          <div
            key={classNumber}
            style={classBlockStyle}
            onClick={() => handleClassClick(classNumber)}
          >
            <span>Class {classNumber}</span>
            <Link to="/add-student" style={buttonStyle}>
              Add new student
            </Link>
          </div>
        ))}
      </div>
      {selectedClass !== null && (
        <div style={classesContainerStyle}>
          <h2 style={{ color: '#FF5733' }}>Class {selectedClass} Students</h2>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}
          >
            {classStudents[selectedClass - 1].map((student) => (
              <StudentCard
                key={student.id}
                name={student.name}
                category={student.category}
                photo={student.photo}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
