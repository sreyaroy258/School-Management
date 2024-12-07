import React, { useState } from "react";

const RecentActivities = () => {
  const [activities, setActivities] = useState([
    { id: 1, title: "New Student Enrollment", description: "150 students enrolled today" },
    { id: 2, title: "New Teacher Added", description: "Mr. John Doe added as a Math Teacher" },
    { id: 3, title: "Class 10 Exam Results", description: "Results published for Class 10" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentActivity, setCurrentActivity] = useState({
    id: null,
    title: "",
    description: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleAddActivity = () => {
    setCurrentActivity({ id: null, title: "", description: "" });
    setIsEditing(false);
    setIsModalOpen(true);
  };

  const handleEditActivity = (activity) => {
    setCurrentActivity(activity);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const handleDeleteActivity = (id) => {
    setActivities((prev) => prev.filter((activity) => activity.id !== id));
  };

  const handleSaveActivity = () => {
    if (isEditing) {
      // Edit existing activity
      setActivities((prev) =>
        prev.map((activity) =>
          activity.id === currentActivity.id ? currentActivity : activity
        )
      );
    } else {
      // Add new activity
      setActivities((prev) => [
        ...prev,
        { ...currentActivity, id: Date.now() }, // Assign unique ID
      ]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="mt-10 bg-white p-6 rounded-md shadow-md">
      <h3 className="text-xl font-semibold mb-4">Recent Activities</h3>
      <button
        onClick={handleAddActivity}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Add New Activity
      </button>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id} className="mb-2 flex justify-between items-center">
            <div>
              <span className="font-medium">{activity.title}</span>: {activity.description}
            </div>
            <div className="space-x-2">
              <button
                className="px-2 py-1 bg-yellow-400 text-white rounded"
                onClick={() => handleEditActivity(activity)}
              >
                Edit
              </button>
              <button
                className="px-2 py-1 bg-red-500 text-white rounded"
                onClick={() => handleDeleteActivity(activity.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Modal for Add/Edit */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-10">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-2xl font-semibold mb-4">
              {isEditing ? "Edit Activity" : "Add New Activity"}
            </h3>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="title">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={currentActivity.title}
                onChange={(e) =>
                  setCurrentActivity({ ...currentActivity, title: e.target.value })
                }
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter activity title"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="description">
                Description
              </label>
              <input
                type="text"
                id="description"
                value={currentActivity.description}
                onChange={(e) =>
                  setCurrentActivity({ ...currentActivity, description: e.target.value })
                }
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter activity description"
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
                onClick={handleSaveActivity}
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

export default RecentActivities;
