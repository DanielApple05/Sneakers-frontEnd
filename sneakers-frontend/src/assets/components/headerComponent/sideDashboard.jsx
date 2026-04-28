import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const sideDashboard = ( {hideDashboard}) => {
 
  return (
    <div className="absolute top-0 right-0 bg-black/90 p-4 rounded shadow-lg h-screen w-3/12 flex justify-between text-white">
      <div className='space-y-7'>
        <p>Welcome Back User</p>
        <p> You're signed in </p>
        <div className='flex items-center space-x-4'>
         <FontAwesomeIcon
            icon={faArrowRight}
            className='text-[16px] cursor-pointer text-red-500 transition'
          />
          <Link to="/">
            <p className='hover:text-red-500 cursor-pointer '> Log out </p>
          </Link>
        </div>
      </div>
      <FontAwesomeIcon
        icon={faX}
        className='text-[16px] cursor-pointer hover:text-gray-500 transition'
        onClick={() => hideDashboard(true)}
      />
    </div>
  );
}

export default sideDashboard;
