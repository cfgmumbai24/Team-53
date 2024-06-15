// src/pages/fellow.js
import React from 'react'

export const FellowPage = () => {
  const classes = [1, 2, 3, 4, 5]

  const pageStyle = {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
  }

  const headerStyle = {
    marginBottom: '20px',
  }

  const classesContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }

  const classBlockStyle = {
    backgroundColor: '#4e8cff', // Lighter shade of blue
    color: 'white',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    margin: '10px 0',
    width: '80%',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '18px',
    cursor: 'pointer',
  }

  const buttonStyle = {
    backgroundColor: '#ff9933', // Orange
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  }

  return (
    <div style={pageStyle}>
      <h1 style={headerStyle}>Fellow Page</h1>
      <div style={classesContainerStyle}>
        {classes.map((classNumber) => (
          <div key={classNumber} style={classBlockStyle}>
            <span>Class {classNumber}</span>
            <button style={buttonStyle}>Add new student</button>
          </div>
        ))}
      </div>
    </div>
  )
}
