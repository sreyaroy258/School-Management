// Students.js
import React from 'react';

const Students = () => {
  const students = [
    { name: 'Alice Smith', grade: '10th', section: 'A' },
    { name: 'Bob Johnson', grade: '9th', section: 'B' },
    { name: 'Charlie Brown', grade: '12th', section: 'C' },
    // Add more students as needed
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Students List</h2>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Grade</th>
            <th className="px-4 py-2 text-left">Section</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index} className="border-b">
              <td className="px-4 py-2">{student.name}</td>
              <td className="px-4 py-2">{student.grade}</td>
              <td className="px-4 py-2">{student.section}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students;
