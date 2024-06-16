import React, { useState } from 'react'

const AddStudentForm = () => {
  const [name, setName] = useState('')
  const [image, setImage] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here, e.g., sending data to server or processing locally
    const newStudentData = {
      name,
      image,
    }
    console.log('Submitted data:', newStudentData)

    // Clear form fields after submission
    setName('')
    setImage(null)
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    setImage(file)
  }

  const formStyle = {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
  }

  const headerStyle = {
    textAlign: 'center',
    color: '#FF5733',
    marginBottom: '20px',
  }

  const formGroupStyle = {
    marginBottom: '15px',
  }

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    color: '#333',
    fontWeight: 'bold',
  }

  const inputStyle = {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  }

  const buttonStyle = {
    display: 'block',
    width: '100%',
    padding: '10px',
    backgroundColor: '#FF5733',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '20px',
  }

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h1 style={headerStyle}>Add New Student</h1>
      <div style={formGroupStyle}>
        <label htmlFor="name" style={labelStyle}>
          Name of Student:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          required
          style={inputStyle}
        />
      </div>
      <div style={formGroupStyle}>
        <label htmlFor="image" style={labelStyle}>
          Image of Student:
        </label>
        <input
          type="file"
          id="image"
          accept=".jpg, .jpeg, .png"
          onChange={handleImageChange}
          required
          style={inputStyle}
        />
      </div>
      <button type="submit" style={buttonStyle}>
        Submit
      </button>
    </form>
  )
}

export default AddStudentForm
