import { useEffect } from "react";
import Dash from "./dash";
import { useGlobalContext } from "../../context";
import Order from "./order";
import Category from "./category";

const Main = () => {
  const { base } = useGlobalContext();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [base]);

  return (
    <main className='sm:w-[70%] ml-auto mb-20 sm:mb-5'>
      {base === 0 && <Dash />}
      {base === 1 && <Order />}
      {base === 2 && <Category />}
    </main>
  );
};

export default Main;
