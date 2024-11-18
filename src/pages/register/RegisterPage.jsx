import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegisterUser } from '../../hooks/useRegisterUser';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({ email: '', password: '' });
  
  const { mutate, isError, error } = useRegisterUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(userDetails, {
      onSuccess: () => {
        navigate('/login'); 
      },
      onError: (error) => {
        console.error('Registration error:', error);
      }
    });
  };


  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Username
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email" value={userDetails.email} onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })} />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" value={userDetails.password} onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })} />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Register
            </button>
          </div>
          {isError && <p className="text-red-500 text-xs italic">{error.message}</p>}
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
