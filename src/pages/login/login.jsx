import React, { useState } from 'react';

function login() {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // You can add your authentication logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="flex items-center justify-center h-screen">
    <form className="bg-white p-8 shadow-md rounded-lg w-96" onSubmit={handleLogin}>
      <h2 className="text-2xl font-semibold mb-4">Login</h2>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-600 text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-600 text-sm font-medium">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
      >
        Login
      </button>
    </form>
  </div>
  )
}
function App() {
    return (
      <div className="App">
        <LoginForm />
      </div>
    );
  }

export default login
