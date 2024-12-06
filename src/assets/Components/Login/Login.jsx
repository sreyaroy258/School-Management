import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    console.log("Login Details:", formData);
    alert("Login Submitted!");
  };

  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic if needed, then navigate
    navigate('/dashboard'); // This will navigate to the Dashboard page
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between p-4 lg:p-10 space-y-8 lg:space-y-0">
        {/* Logo Section */}
        <div className="flex justify-center lg:justify-start">
          <img
            src="https://static.vecteezy.com/system/resources/previews/015/529/452/non_2x/100th-day-of-school-cartoon-colored-clipart-free-vector.jpg"
            alt="logo"
            className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[500px] lg:h-[500px] object-contain"
          />
        </div>

        {/* Login Form Section */}
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-gray-300 shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-md"
          >
            <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

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
           <form onSubmit={(e) => e.preventDefault()}> {/* Prevent default form submission */}
           <button
           type="submit"
           className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition duration-300"
           onClick={handleLogin} // Attach the handleLogin function to the button
           >
           Login
           </button>
           </form>
            {/* Signup Section */}
            <div className="flex flex-col sm:flex-row items-center sm:justify-between mt-8 text-gray-700 space-y-4 sm:space-y-0">
  <p className="flex items-center space-x-1 sm:order-1 text-center sm:text-left">
    <span>Don't Have an Account?</span>
    <FaArrowRight className="text-blue-500" />
  </p>
  <button className="px-3 py-1 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 hover:scale-105 transition duration-300 sm:order-2">
    Signup Here!
  </button>
</div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
