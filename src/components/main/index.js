import React from "react";
import Dash from "./dash";

const Main = ({ dash }) => {
  return (
    <main className='sm:w-[70%] ml-auto mb-20 sm:mb-5'>{dash && <Dash />}</main>
  );
};

export default Main;
