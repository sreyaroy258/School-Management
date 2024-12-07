import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

const Classes = () => {
  const [data, setData] = useState([
    { id: 1, name: "8A", teacher: "Mr. Johnson", students: 25 },
    { id: 2, name: "7B", teacher: "Ms. Davis", students: 22 },
    { id: 3, name: "9A", teacher: "Mrs. Smith", students: 30 },
    { id: 4, name: "6A", teacher: "Mr. Brown", students: 18 },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentClass, setCurrentClass] = useState({
    id: null,
    name: "",
    teacher: "",
    students: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  // Column definitions
  const columns = React.useMemo(
    () => [
      { accessorKey: "name", header: "Class Name" },
      { accessorKey: "teacher", header: "Teacher" },
      { accessorKey: "students", header: "Students" },
      {
        accessorKey: "actions",
        header: "Actions",
        cell: ({ row }) => (
          <div className="space-x-2">
            <button
              className="px-2 py-1 bg-yellow-400 text-white rounded"
              onClick={() => handleEdit(row.original)}
            >
              Edit
            </button>
            <button
              className="px-2 py-1 bg-red-500 text-white rounded"
              onClick={() => handleDelete(row.original.id)}
            >
              Delete
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const handleAddNewClass = () => {
    setCurrentClass({ id: null, name: "", teacher: "", students: "" });
    setIsEditing(false);
    setIsModalOpen(true);
  };

  const handleEdit = (classData) => {
    setCurrentClass(classData);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const handleSave = () => {
    if (isEditing) {
      // Edit existing class
      setData((prev) =>
        prev.map((cls) => (cls.id === currentClass.id ? currentClass : cls))
      );
    } else {
      // Add new class
      setData((prev) => [
        ...prev,
        { ...currentClass, id: Date.now() }, // Assign a unique ID
      ]);
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    setData((prev) => prev.filter((cls) => cls.id !== id));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Classes Management</h1>
      <button
        onClick={handleAddNewClass}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Add New Class
      </button>

      {/* Display class list */}
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Class Table</h2>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="bg-gray-100">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="py-2 px-4 border-b border-gray-300 text-left text-gray-700"
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
              <tr key={row.id} className="hover:bg-gray-100">
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="py-2 px-4 border-b border-gray-300 text-gray-700"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-10">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-2xl font-semibold mb-4">
              {isEditing ? "Edit Class" : "Add New Class"}
            </h3>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="name">
                Class Name
              </label>
              <input
                type="text"
                id="name"
                value={currentClass.name}
                onChange={(e) =>
                  setCurrentClass({ ...currentClass, name: e.target.value })
                }
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter class name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="teacher">
                Teacher
              </label>
              <input
                type="text"
                id="teacher"
                value={currentClass.teacher}
                onChange={(e) =>
                  setCurrentClass({ ...currentClass, teacher: e.target.value })
                }
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter teacher name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="students">
                Number of Students
              </label>
              <input
                type="number"
                id="students"
                value={currentClass.students}
                onChange={(e) =>
                  setCurrentClass({ ...currentClass, students: e.target.value })
                }
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter number of students"
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
                onClick={handleSave}
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

export default Classes;
