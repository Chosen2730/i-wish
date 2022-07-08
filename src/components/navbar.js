import React from "react";
import search from "../images/search.png";
import { useNavigate } from "react-router-dom";
import not from "../images/notify.png";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className='sm:w-[70%] ml-auto p-6 shadow-md flex items-center justify-between space-x-6'>
      <div className='grid grid-cols-2 sm:flex items-center rounded-md bg-gray-200 w-fit p-2 space-x-5'>
        <input
          placeholder='Search for name, order ID, vendor etc...'
          className='bg-transparent p-2 text-sm sm:w-52 md:w-64'
        />
        <div>
          <img
            className='bg-[#7805A7] p-2 rounded-md w-8 ml-auto'
            src={search}
            alt=''
          />
        </div>
      </div>
      <div className='flex items-center space-x-4'>
        <img src={not} alt='notify' />
        <button
          className='bg-[#7805A7] text-white rounded-md text-sm md:text-base p-2 px-4 font-normal tracking-wider'
          onClick={() => navigate("/")}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
