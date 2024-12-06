import React, { useState } from 'react';

const Teacher = () => {
  const [teachers, setTeachers] = useState([
    { id: 1, name: 'Mr. John Doe', subject: 'Math' },
    { id: 2, name: 'Mrs. Jane Smith', subject: 'English' },
    { id: 3, name: 'Mr. James Brown', subject: 'Science' },
  ]);

  const [newTeacher, setNewTeacher] = useState({ name: '', subject: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editTeacherId, setEditTeacherId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTeacher({ ...newTeacher, [name]: value });
  };

  const handleAddTeacher = () => {
    if (newTeacher.name && newTeacher.subject) {
      if (editTeacherId) {
        // Edit existing teacher
        setTeachers(
          teachers.map((teacher) =>
            teacher.id === editTeacherId
              ? { ...teacher, name: newTeacher.name, subject: newTeacher.subject }
              : teacher
          )
        );
        setEditTeacherId(null); // Reset edit teacher
      } else {
        // Add new teacher
        setTeachers([
          ...teachers,
          { id: Date.now(), name: newTeacher.name, subject: newTeacher.subject },
        ]);
      }
      setNewTeacher({ name: '', subject: '' });
      setIsModalOpen(false);
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleEditTeacher = (teacher) => {
    setNewTeacher({ name: teacher.name, subject: teacher.subject });
    setEditTeacherId(teacher.id); // Set the teacher to be edited
    setIsModalOpen(true); // Open the modal
  };

  const handleDeleteTeacher = (id) => {
    setTeachers(teachers.filter((teacher) => teacher.id !== id));
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Teachers List</h2>

      {/* Add Teacher Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600"
      >
        Add Teacher
      </button>

      {/* Teachers Table */}
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Subject</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
            <tr key={teacher.id} className="border-b">
              <td className="px-4 py-2">{teacher.name}</td>
              <td className="px-4 py-2">{teacher.subject}</td>
              <td className="px-4 py-2 space-x-2">
                {/* Edit Button */}
                <button
                  onClick={() => handleEditTeacher(teacher)}
                  className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600"
                >
                  Edit
                </button>

                {/* Delete Button */}
                <button
                  onClick={() => handleDeleteTeacher(teacher.id)}
                  className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add/Edit Teacher Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-10">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-2xl font-semibold mb-4">{editTeacherId ? 'Edit Teacher' : 'Add New Teacher'}</h3>

            {/* Form */}
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={newTeacher.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter teacher's name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={newTeacher.subject}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter subject"
              />
            </div>

            <div className="flex justify-end space-x-4">
              {/* Cancel Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-400 text-white font-semibold rounded-lg"
              >
                Cancel
              </button>

              {/* Add/Edit Button */}
              <button
                onClick={handleAddTeacher}
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg"
              >
                {editTeacherId ? 'Update Teacher' : 'Add Teacher'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Teacher;
