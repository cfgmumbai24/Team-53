// src/pages/admin.js
import React from 'react'

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
    padding: '10px',
    maxWidth: '600px',
    margin: '0 auto',
  }

  const sectionStyle = {
    backgroundColor: '#f9f9f9',
    padding: '10px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }

  const fellowsSectionStyle = {
    backgroundColor: '#f9f9f9',
    padding: '10px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    marginBottom: '10px',
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
    marginBottom: '10px',
    width: '100%',
  }

  const fellowImageStyle = {
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    objectFit: 'cover',
    marginRight: '10px',
  }

  const buttonStyle = {
    display: 'block',
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    marginTop: '10px',
  }

  return (
    <div style={dashboardStyle}>
      <h1>Admin Dashboard</h1>
      <section style={sectionStyle}>
        <h2 style={{ margin: 0 }}>Total Enrolled Students</h2>
        <p style={{ margin: 0 }}>{totalEnrolledStudents}</p>
      </section>
      <section style={sectionStyle}>
        <h2 style={{ margin: 0 }}>Total Enrolled Fellows</h2>
        <p style={{ margin: 0 }}>{totalEnrolledFellows}</p>
      </section>
      <section style={fellowsSectionStyle}>
        <h2 style={{ margin: '0 0 10px 0' }}>Fellows</h2>
        <div style={fellowsListStyle}>
          {fellows.map((fellow) => (
            <div key={fellow.id} style={fellowCardStyle}>
              <img
                src={fellow.photo}
                alt={fellow.name}
                style={fellowImageStyle}
              />
              <h3 style={{ margin: 0 }}>{fellow.name}</h3>
            </div>
          ))}
        </div>
        <button style={buttonStyle}>Add New Fellow</button>
      </section>
    </div>
  )
}
