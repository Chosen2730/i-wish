import React from "react";
import { useGlobalContext } from "../../context";
import SingleDelOrder from "./singleDelOrder";

export const Delivery = () => {
  const { store, delStatus, setDelStatus } = useGlobalContext();

  return (
    <div className='m-8'>
      <h1 className='font-semibold text-xl my-10  sm:text-2xl text-gray-700'>
        Order Panel
      </h1>
      <main className='grid lg:grid-cols-2 gap-4'>
        {store.map((items) => {
          const {
            title,
            img,
            price,
            weight,
            qty,
            color,
            customer,
            vendor,
            address,
            orderDate,
            deliveryDate,
            orderStatus,
          } = items;
          {
            /* const statusImg = orderStatus === "delivered" ? green : yellow; */
          }
          return <SingleDelOrder key={items.id} {...items} />;
        })}
      </main>
    </div>
  );
};
