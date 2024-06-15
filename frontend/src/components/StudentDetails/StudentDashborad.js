import React from 'react';
import studentsData from './data.json';
import StudentDetails from './StudentDetails';

function StudentDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 flex items-center justify-center p-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">Student Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {studentsData.map((student, index) => (
            <StudentDetails key={index} student={student} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
