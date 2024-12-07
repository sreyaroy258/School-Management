import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

const Students = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Alice Smith", grade: "10th", section: "A" },
    { id: 2, name: "Bob Johnson", grade: "9th", section: "B" },
    { id: 3, name: "Charlie Brown", grade: "12th", section: "C" },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStudent, setCurrentStudent] = useState({
    id: null,
    name: "",
    grade: "",
    section: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  // Table columns
  const columns = React.useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Name",
      },
      {
        accessorKey: "grade",
        header: "Grade",
      },
      {
        accessorKey: "section",
        header: "Section",
      },
      {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => (
          <div className="space-x-2">
            <button
              onClick={() => handleEditStudent(row.original)}
              className="bg-yellow-400 px-3 py-1 text-white rounded-lg"
            >
              Edit
            </button>
            <button
              onClick={() => handleDeleteStudent(row.original.id)}
              className="bg-red-500 px-3 py-1 text-white rounded-lg"
            >
              Delete
            </button>
          </div>
        ),
      },
    ],
    []
  );

  // TanStack Table instance
  const table = useReactTable({
    data: students,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  // Add student function
  const handleAddStudent = () => {
    setCurrentStudent({ id: null, name: "", grade: "", section: "" });
    setIsEditing(false);
    setIsModalOpen(true);
  };

  // Edit student function
  const handleEditStudent = (student) => {
    setCurrentStudent(student);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  // Delete student function
  const handleDeleteStudent = (id) => {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  };

  // Save student (either add or edit)
  const handleSaveStudent = () => {
    if (isEditing) {
      // Edit existing student
      setStudents((prev) =>
        prev.map((student) =>
          student.id === currentStudent.id ? currentStudent : student
        )
      );
    } else {
      // Add new student
      setStudents((prev) => [
        ...prev,
        { ...currentStudent, id: Date.now() }, // Unique ID generation
      ]);
    }
    setIsModalOpen(false);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Students List</h2>
      <button
        onClick={handleAddStudent}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Add New Student
      </button>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="bg-gray-200">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-4 py-2 text-left"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-b">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-4 py-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for Add/Edit Student */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-10">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-2xl font-semibold mb-4">
              {isEditing ? "Edit Student" : "Add New Student"}
            </h3>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={currentStudent.name}
                onChange={(e) =>
                  setCurrentStudent({ ...currentStudent, name: e.target.value })
                }
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter student's name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="grade">
                Grade
              </label>
              <input
                type="text"
                id="grade"
                value={currentStudent.grade}
                onChange={(e) =>
                  setCurrentStudent({ ...currentStudent, grade: e.target.value })
                }
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter student's grade"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="section">
                Section
              </label>
              <input
                type="text"
                id="section"
                value={currentStudent.section}
                onChange={(e) =>
                  setCurrentStudent({ ...currentStudent, section: e.target.value })
                }
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter student's section"
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-400 text-white font-semibold rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveStudent}
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Students;
