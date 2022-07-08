import React from "react";
import logo from "../images/logo.png";
import dash from "../images/Vector-5.png";
import order from "../images/Vector-6.png";
import cat from "../images/Vector-7.png";
import not from "../images/Vector-8.png";
import ven from "../images/Vector-9.png";
import user from "../images/Vector-10.png";
import { useGlobalContext } from "../context";

const sideMenus = [
  { name: "dashboard", img: dash },
  { name: "orders", img: order },
  { name: "categories", img: cat },
  { name: "notifications", img: not },
  { name: "vendors", img: ven },
  { name: "users", img: user },
];

const Sidebar = () => {
  const { base, setBase } = useGlobalContext();
  return (
    <aside className='bg-[#080016] w-full sm:w-[30%] p-4 sm:p-8 sm:min-h-screen fixed bottom-0 sm:top-0  z-10 overflow'>
      <img className='hidden sm:block w-20 mb-20' src={logo} alt='logo' />
      <div className='text-white flex sm:flex-col justify-between'>
        {sideMenus.map(({ name, img }, i) => {
          return (
            <div
              className={`${
                base === i
                  ? "bg-gray-800 border-r-0 border-b-4 sm:border-b-0 sm:border-r-8 border-[#7805A7]"
                  : ""
              } flex gap-4 p-3 sm:p-5 select-none cursor-pointer transition hover:bg-gray-800 sm:hover:border-r-8 `}
              key={i}
              onClick={() => {
                setBase(i);
              }}
            >
              <img className='w-3 sm:w-4 object-contain' src={img} alt='' />
              <h5 className='hidden sm:block capitalize text-sm text-center tracking-wide'>
                {name}
              </h5>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
