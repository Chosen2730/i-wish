import { useContext, createContext, useState } from "react";
import { store, notifications, vendors } from "./data";
const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [items, setItems] = useState({
    title: "",
    price: "",
    img: "",
    weight: "",
    qty: "",
    color: "",
    customer: "",
    vendor: "",
    address: "",
    orderStatus: "",
    orderDate: "",
    deliveryDate: "",
  });
  const [details, setDetails] = useState(false);
  const [base, setBase] = useState(0);
  const [notificationItems, setNotificationItems] = useState(notifications);

  return (
    <AppContext.Provider
      value={{
        store,
        details,
        setDetails,
        items,
        setItems,
        base,
        setBase,
        notificationItems,
        setNotificationItems,
        vendors,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext };
