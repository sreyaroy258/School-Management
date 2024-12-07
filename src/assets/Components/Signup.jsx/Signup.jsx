import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    fullName: "",
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      const updatedData = { ...prevFormData, [name]: value };
      if (name === "firstName" || name === "lastName") {
        updatedData.fullName = `${updatedData.firstName} ${updatedData.lastName}`.trim();
      }
      return updatedData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation: Check if all fields are filled
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.username ||
      !formData.email ||
      !formData.password
    ) {
      setError("All fields are required!");
      return;
    }
    setError(""); // Clear error message
    console.log("Signup Details:", formData);
    alert("Signup Submitted!");
    // Add further signup logic here
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Signup</h2>

        <form onSubmit={handleSubmit}>
          {/* Error Message */}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          {/* First Name Input */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your first name"
            />
          </div>

          {/* Last Name Input */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your last name"
            />
          </div>

          {/* Full Name Input (Read-Only) */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="fullName"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              readOnly
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-200 focus:outline-none"
              placeholder="Full name will auto-generate"
            />
          </div>

          {/* Username Input */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your username"
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Signup
          </button>
        </form>
      </div>
    </section>
  );
};

export default Signup;
