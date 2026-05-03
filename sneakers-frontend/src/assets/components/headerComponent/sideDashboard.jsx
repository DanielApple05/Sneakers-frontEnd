import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

const sideDashboard = ({ user, hideDashboard }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };
  return (
<div>
      <div className="absolute top-0 right-0 bg-black/90 p-4 rounded shadow-lg h-screen w-9/12 flex justify-between text-white">
      <div className='space-y-7 relative'>
        <p>Welcome Back <strong className='text-red-400'>{user?.username}</strong></p>
        <div className='flex items-center space-x-4'>
          <FontAwesomeIcon
            icon={faArrowRight}
            className='text-[16px] cursor-pointer text-red-500 transition'
          />
          <button onClick={handleLogout}>
            <p className='hover:text-red-500 cursor-pointer '> Log out </p>
          </button>
        </div>
      </div>
      <FontAwesomeIcon
        icon={faX}
        className='text-[16px] cursor-pointer hover:text-gray-500 transition'
        onClick={() => hideDashboard(true)}
      />
    </div>
</div>
  );
}

export default sideDashboard;
