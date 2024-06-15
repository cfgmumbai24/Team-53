import React from 'react';

const StudentDetails = ({ student }) => {
  return (
    <div className="relative bg-beige p-6 rounded-lg shadow-lg text-white">
      <img 
        src={student.image} 
        alt={`${student.name}`} 
        className="absolute top-4 right-4 w-16 h-16 rounded-full border-2 border-white shadow-md"
      />
      <h2 className="text-2xl font-bold mb-2">{student.name}</h2>
      <p className="text-lg mb-2">Class: {student.class}</p>
      <p className="text-lg mb-2">Attendance: {student.attendance}</p>
      <div className="mb-2">
        <h3 className="text-xl font-semibold mb-1">Marks:</h3>
        <ul className="list-disc list-inside">
          {Object.entries(student.marks).map(([subject, mark], idx) => (
            <li key={idx} className="text-lg">{subject}: {mark}</li>
          ))}
        </ul>
      </div>
      <p className="text-lg">Mentor: {student.mentor}</p>
    </div>
  );
};

export default StudentDetails;
