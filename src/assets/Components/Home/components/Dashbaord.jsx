// Dashboard.js
import React from 'react';
import EventCarousel from './EventCarousel';

const Dashboard = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Total Students */}
        <div className="bg-blue-500 text-white p-6 rounded-md shadow-md">
          <h3 className="text-xl font-semibold mb-4">Total Students</h3>
          <p className="text-3xl">1200</p>
        </div>

        {/* Total Teachers */}
        <div className="bg-green-500 text-white p-6 rounded-md shadow-md">
          <h3 className="text-xl font-semibold mb-4">Total Teachers</h3>
          <p className="text-3xl">45</p>
        </div>

        {/* Total Classes */}
        <div className="bg-yellow-500 text-white p-6 rounded-md shadow-md">
          <h3 className="text-xl font-semibold mb-4">Total Classes</h3>
          <p className="text-3xl">30</p>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="mt-10 bg-white p-6 rounded-md shadow-md">
        <h3 className="text-xl font-semibold mb-4">Recent Activities</h3>
        <ul>
          <li className="mb-2">
            <span className="font-medium">New Student Enrollment</span>: 150 students enrolled today
          </li>
          <li className="mb-2">
            <span className="font-medium">New Teacher Added</span>: Mr. John Doe added as a Math Teacher
          </li>
          <li className="mb-2">
            <span className="font-medium">Class 10 Exam Results</span>: Results published for Class 10
          </li>
        </ul>
      </div>

      {/* Upcoming Events */}
      <div className="mt-10 bg-white p-6 rounded-md shadow-md">
        <h3 className="text-xl font-semibold mb-4">Upcoming Events</h3>
        <EventCarousel />
      </div>
    </div>
  );
};

export default Dashboard;
