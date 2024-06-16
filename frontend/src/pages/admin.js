// src/pages/admin.js
import React from 'react'
import { useNavigate } from 'react-router-dom'

const fellows = [
  { id: 1, name: 'John Doe', photo: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Jane Smith', photo: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Sam Wilson', photo: 'https://via.placeholder.com/150' },
]

export const AdminDashboard = () => {
  const totalEnrolledStudents = 120
  const totalEnrolledFellows = 10

  const dashboardStyle = {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  }

  const headerStyle = {
    textAlign: 'center',
    color: '#FF5733',
  }

  const sectionStyle = {
    backgroundColor: '#FFF3E0',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }

  const sectionTitleStyle = {
    margin: 0,
    color: '#FF5733',
  }

  const fellowsSectionStyle = {
    backgroundColor: '#FFF3E0',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  }

  const fellowsListStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  }

  const fellowCardStyle = {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left',
    marginBottom: '15px',
    width: '100%',
    padding: '10px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  }

  const fellowImageStyle = {
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    objectFit: 'cover',
    marginRight: '15px',
  }

  const fellowNameStyle = {
    margin: 0,
    color: '#333',
  }

  const buttonStyle = {
    display: 'block',
    width: '100%',
    padding: '12px',
    backgroundColor: '#FF5733',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '20px',
  }
  const navigate=useNavigate()
  function handler(){
    navigate('/newfellow')
  }
  return (
    <div style={dashboardStyle}>
      <h1 style={headerStyle}>Admin Dashboard</h1>
      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Total Enrolled Students</h2>
        <p style={{ margin: 0, fontSize: '24px', color: '#333' }}>
          {totalEnrolledStudents}
        </p>
      </section>
      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Total Enrolled Fellows</h2>
        <p style={{ margin: 0, fontSize: '24px', color: '#333' }}>
          {totalEnrolledFellows}
        </p>
      </section>
      <section style={fellowsSectionStyle}>
        <h2 style={{ margin: '0 0 20px 0', color: '#FF5733' }}>Fellows</h2>
        <div style={fellowsListStyle}>
          {fellows.map((fellow) => (
            <div key={fellow.id} style={fellowCardStyle}>
              <img
                src={fellow.photo}
                alt={fellow.name}
                style={fellowImageStyle}
              />
              <h3 style={fellowNameStyle}>{fellow.name}</h3>
            </div>
          ))}
        </div>
        <button style={buttonStyle} onClick={handler}>Add New Fellow</button>
      </section>
    </div>
  )
}
