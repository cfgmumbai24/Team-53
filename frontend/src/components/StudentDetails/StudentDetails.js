import React from 'react';
import LineChart from '../LineChart';

const StudentDetails = ({ student }) => {
  return (
    <div className="relative bg-lightBrown p-8 rounded-lg shadow-lg text-textBrown">
      
      <div className='item1'>
      <h2 className="text-3xl font-bold mb-4 text-darkBrown">{student.name}</h2>
      <p className="text-lg mb-3 font-semibold">Class: <span className="font-semibold">{student.class}</span></p>
      <p className="text-lg mb-4 font-semibold">Attendance: <span className="font-semibold">{student.attendance}</span></p>
      <div className="mb-4">
        <h3 className="text-2xl font-semibold mb-2 text-darkBrown">Evaluation:</h3>
        <ul className="list-disc list-inside">
          {Object.entries(student.marks).map(([subject, mark], idx) => (
            <li key={idx} className="text-lg">{subject}: <span className="font-semibold">{mark}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<progress id="file" value={mark} max="10"> 32% </progress></li>
          ))}
        </ul>
        <p className="text-lg font-semibold">Fellow: <span className="font-semibold">{student.mentor}</span></p>
      </div>
          <LineChart data={[35, 39, 49, 47]}/>
      </div>
      <div className='item3'>
      <img 
        src={student.image} 
        alt={`${student.name}`} 
        className="absolute top-10 right-10 w-75 h-75 rounded-full border-4 border-mediumBrown shadow-md"
      />
      </div>
      
    </div>
  );
};

export default StudentDetails;
