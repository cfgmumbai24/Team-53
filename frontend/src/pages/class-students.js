import React from 'react'
import StudentCard from '../components/studentcard'

const students = [
  {
    id: 1,
    name: 'John Doe',
    category: 'A',
    photo: 'https://via.placeholder.com/100',
  },
  {
    id: 2,
    name: 'Jane Smith',
    category: 'B',
    photo: 'https://via.placeholder.com/100',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    category: 'C',
    photo: 'https://via.placeholder.com/100',
  },
  {
    id: 4,
    name: 'Robert Brown',
    category: 'D',
    photo: 'https://via.placeholder.com/100',
  },
  {
    id: 5,
    name: 'Lucy Davis',
    category: 'A',
    photo: 'https://via.placeholder.com/100',
  },
  {
    id: 6,
    name: 'Michael Wilson',
    category: 'B',
    photo: 'https://via.placeholder.com/100',
  },
  {
    id: 7,
    name: 'Emily White',
    category: 'C',
    photo: 'https://via.placeholder.com/100',
  },
  {
    id: 8,
    name: 'Chris Harris',
    category: 'D',
    photo: 'https://via.placeholder.com/100',
  },
  {
    id: 9,
    name: 'Sarah Martin',
    category: 'A',
    photo: 'https://via.placeholder.com/100',
  },
  {
    id: 10,
    name: 'David Lee',
    category: 'B',
    photo: 'https://via.placeholder.com/100',
  },
]

const StudentList = () => {
  const listStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: '20px',
    boxSizing: 'border-box',
  }

  return (
    <div style={listStyle}>
      {students.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          category={student.category}
          photo={student.photo}
        />
      ))}
    </div>
  )
}

export default StudentList
