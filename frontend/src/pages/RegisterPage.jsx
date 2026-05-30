import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Register attempt:', { name, email, password });
  };

  return (
    <div className="container mx-auto px-4 py-24 max-w-md">
      <div className="bg-dark-card rounded-card p-8 border border-dark-border">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Free Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm mb-2">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-dark-bg border border-dark-border rounded-input px-4 py-2 text-text-primary focus:outline-none focus:border-accent-purple"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-dark-bg border border-dark-border rounded-input px-4 py-2 text-text-primary focus:outline-none focus:border-accent-purple"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-dark-bg border border-dark-border rounded-input px-4 py-2 text-text-primary focus:outline-none focus:border-accent-purple"
              required
            />
          </div>
          <button type="submit" className="w-full bg-accent-purple text-white py-2 rounded-btn font-semibold hover:bg-opacity-80">
            Sign Up Free
          </button>
        </form>
        <p className="text-center text-text-secondary mt-4 text-sm">
          Already have an account? <Link to="/login" className="text-accent-purple hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;