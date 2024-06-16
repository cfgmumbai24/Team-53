import React, { useState } from 'react'

const AddFellowForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [photo, setPhoto] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newFellowData = {
      name,
      email,
      password,
      photo,
    }
    console.log('Submitted data:', newFellowData)
    setName('')
    setEmail('')
    setPassword('')
    setPhoto(null)
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handlePhotoChange = (e) => {
    const file = e.target.files[0]
    setPhoto(file)
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.cardHeader}>
          <h2>Add Fellow</h2>
        </div>
        <div style={styles.cardBody}>
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                required
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="photo">Photo:</label>
              <input
                type="file"
                id="photo"
                accept=".jpg, .jpeg, .png"
                onChange={handlePhotoChange}
                required
                style={styles.input}
              />
              <label htmlFor="photo" style={styles.customFileUpload}>
                Upload Photo
              </label>
            </div>
            <button type="submit" style={styles.button}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddFellowForm

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#FF5733',
  },
  card: {
    width: '400px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  cardHeader: {
    backgroundColor: '#FF5733',
    color: '#ffffff',
    padding: '20px',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
  },
  cardBody: {
    padding: '20px',
  },
  formGroup: {
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    outline: 'none',
  },
  customFileUpload: {
    display: 'block',
    padding: '10px',
    backgroundColor: '#FF5733',
    color: '#ffffff',
    borderRadius: '5px',
    textAlign: 'center',
    cursor: 'pointer',
  },
  button: {
    display: 'block',
    width: '100%',
    padding: '10px',
    backgroundColor: '#FF5733',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
}
