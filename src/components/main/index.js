import React from "react";
import Dash from "./dash";
import { useGlobalContext } from "../../context";
import Order from "./order";

const Main = () => {
  const { base } = useGlobalContext();
  return (
    <main className='sm:w-[70%] ml-auto mb-20 sm:mb-5'>
      {base === 0 && <Dash />}
      {base === 1 && <Order />}
    </main>
  );
};

export default Main;
