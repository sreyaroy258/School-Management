// DashboardLayout.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white h-screen p-5">
        <h1 className="text-3xl font-bold mb-8 text-center">School Admin</h1>
        <ul>
          <li>
            <Link to="/dashboardlayout/dashboard" className="block py-2 px-4 hover:bg-gray-700 rounded-md">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/dashboardlayout/students" className="block py-2 px-4 hover:bg-gray-700 rounded-md">
              Students
            </Link>
          </li>
          <li>
            <Link to="/dashboardlayout/teacher" className="block py-2 px-4 hover:bg-gray-700 rounded-md">
              Teachers
            </Link>
          </li>
          <li>
            <Link to="/dashboardlayout/classes" className="block py-2 px-4 hover:bg-gray-700 rounded-md">
              Classes
            </Link>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-5">
        {/* Header */}
        <header className="flex justify-between items-center bg-white shadow-md p-4 mb-6">
          <div>
            <h2 className="text-2xl font-semibold">Dashboard</h2>
          </div>
          <div>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Profile
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="bg-white p-6 rounded-md shadow-md">
          <Outlet /> {/* This will render the current page content (e.g., Dashboard, Students) */}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
