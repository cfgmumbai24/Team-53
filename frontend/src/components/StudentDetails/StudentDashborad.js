import React from 'react';
import studentsData from './data.json';
import StudentDetails from './StudentDetails';

function StudentDashboard() {
  return (
    <div className="w-full min-h-screen bg-backgroundBrown flex items-center justify-center p-4">
      {/* Full width with maximum width constraint and centered horizontally */}
      <div className="w-full max-w-7xl mx-auto p-4 font-semibold">
        {/* Header with centered text */}
        <h1 className="text-4xl font-bold mb-8 text-center text-darkBrown">Student Dashboard</h1>
        {/* Grid layout for student details */}
        <div >
          {studentsData.map((student, index) => (
            <StudentDetails key={index} student={student} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
