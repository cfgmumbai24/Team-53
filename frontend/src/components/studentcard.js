import React from 'react'

const StudentCard = ({ name, category, photo }) => {
  const cardStyle = {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '10px',
    margin: '10px',
    width: 'calc(100% / 5 - 20px)',
    boxSizing: 'border-box',
    whiteSpace: 'nowrap',
  }

  const photoStyle = {
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    marginRight: '10px',
  }

  const detailsStyle = {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    overflow: 'hidden',
  }

  const nameStyle = {
    fontSize: '1em',
    margin: 0,
  }

  const categoryStyle = {
    fontSize: '0.8em',
    margin: 0,
  }

  return (
    <div style={cardStyle}>
      <img src={photo} alt={`${name}'s photo`} style={photoStyle} />
      <div style={detailsStyle}>
        <h3>{name}</h3>
        <p>Category: {category}</p>
      </div>
    </div>
  )
}

export default StudentCard
