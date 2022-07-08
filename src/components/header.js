import React from "react";
import logo from "../images/logo1.png";

const Header = () => {
  return (
    <header className='p-3 shadow-md px-8'>
    <div className='flex justify-between items-center max-w-3xl mx-auto'>
      <img className='w-20' src={logo} alt='' />
      <button className='bg-[#7805A7] text-white rounded-md text-sm md:text-base p-2 px-4 font-thin tracking-wider'>
        Open App
      </button>
    </div>
    </header>
  );
};

export default Header;
