import React from "react";
import close from "../../images/close.png";
import { useGlobalContext } from "../../context";
import yellow from "../../images/doty.png";
import green from "../../images/dotg.png";

const UserDetails = () => {
  const { items, details, setDetails } = useGlobalContext();
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

  const statusImg = orderStatus === "delivered" ? green : yellow;
  return (
    <aside className={`${details ? "category" : "category hider"} overflow`}>
      <div className='bg-white shadow-md rounded-md p-4 sm:p-12 text-gray-700 w-full sm:w-5/6 mt-40'>
        <img
          className='ml-auto bg-[#7805A7] p-2 rounded-md cursor-pointer relative top-5 sm:top-0 right-5 sm:-right-4'
          src={close}
          alt='closeBtn'
          onClick={() => setDetails(false)}
        />
        <div className='flex flex-col sm:flex-row sm:items-center gap-4 my-5'>
          <img className='w-1/2 sm:w-48' src={img} alt='' />
          <div className='grid grid-cols-2 sm:grid-cols-1 mb-4 sm:mb-2 items-baseline'>
            <div>
              <h4 className='font-semibold text-sm'>{title}</h4>
              <h4 className='font-bold text-2xl'>
                <del>N</del> {price}
              </h4>
            </div>

            <div className='my-2'>
              <h4 className='text-sm'>Customer</h4>
              <h4 className='text-sm font-semibold'>{customer}</h4>
            </div>
          </div>
        </div>
        <h4 className='font-bold text-xl'>Product Information</h4>
        <div className='grid grid-cols-2 md:grid-cols-5 '>
          <div className='my-2'>
            <h4 className='text-sm'>Weight</h4>
            <h4 className='text-sm font-semibold'>{weight}kg</h4>
          </div>
          <div className='my-2'>
            <h4 className='text-sm'>Quantity</h4>
            <h4 className='text-sm font-semibold'>{qty} pieces</h4>
          </div>
          <div className='my-2'>
            <h4 className='text-sm'>Color</h4>
            <h4 className='text-sm font-semibold'>{color}</h4>
          </div>
          <div className='my-2'>
            <h4 className='text-sm'>order Date</h4>
            <h4 className='text-sm font-semibold'>{orderDate}</h4>
          </div>
          <div className='my-2'>
            <h4 className='text-sm'>delivery Date</h4>
            <h4 className='text-sm font-semibold'>{deliveryDate}</h4>
          </div>
          <div className='my-2'>
            <h4 className='text-sm'>Delivery address</h4>
            <h4 className='text-sm font-semibold'>{address}</h4>
          </div>
          <div className='my-2'>
            <h4 className='text-sm'>Payment method</h4>
            <h4 className='text-sm font-semibold'>i-Wish Wallet</h4>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row justify-between my-4'>
          <div className='my-2'>
            <h4 className='text-sm'>vendor</h4>
            <h4 className='text-sm font-semibold'>{vendor}</h4>
          </div>
          <button className='py-3 px-6 w-fit h-fit text-xs border-2 border-[#7805A7] text-[#7805A7] rounded-md'>
            Contact Vendor
          </button>
        </div>
        <div className='my-2'>
          <h4 className='text-base font-bold'>Product Status</h4>
          <h4 className='text-xs'>Delivery Status</h4>
          <div className='flex items-center space-x-1 p-2 px-4 w-fit h-fit border-[#7805A7] text-[#7805A7] rounded-md text-xs border-2 my-2'>
            <img className='w-2' src={statusImg} alt='status' />
            <h4 className=''>{orderStatus}</h4>
          </div>
        </div>
        <div className='flex gap-5'>
          {/* <button className='p-2 px-4 w-fit text-xs border-2 bg-[#7805A7] border-[#7805A7] text-gray-50 rounded-md'>
          Track Order
        </button> */}
        </div>
      </div>
    </aside>
  );
};

export default UserDetails;
