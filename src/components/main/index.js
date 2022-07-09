import { useEffect } from "react";
import Dash from "./dash";
import { useGlobalContext } from "../../context";
import Order from "./order";
import Category from "./category";
import Notification from "./notification";
import Vendor from "./vendor";

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
      {base === 3 && <Notification />}
      {base === 4 && <Vendor />}
    </main>
  );
};

export default Main;
