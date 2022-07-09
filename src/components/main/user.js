import { useGlobalContext } from "../../context";
import green from "../../images/dotg.png";
import yellow from "../../images/doty.png";
import red from "../../images/dotr.png";
import UserDetails from "./userDetails";

const User = () => {
  const { setDetails, details, users, store, items, setItems } =
    useGlobalContext();

  return (
    <>
      <main className='m-8'>
        <div className='flex flex-col sm:flex-row justify-between '>
          <h1 className='font-semibold text-xl  sm:text-2xl text-gray-700'>
            User Details
          </h1>
        </div>
        <div className='mt-12 text-gray-700 shadow-lg'>
          <div className='bg-purple-200 flex lg:grid lg:grid-cols-5 space-x-6  text-xs p-4 rounded-md font-semibold w-full whitespace-nowrap overflowX'>
            <h4>Name</h4>
            <h4 className=''>Email</h4>
            <h4 className=''>Mobile Number</h4>
            <h4>Status</h4>
            <h4>Action</h4>
          </div>
          <div>
            {users.map((items, i) => {
              const { name, email, tel, vendorStatus } = items;
              const statusImg =
                vendorStatus === "active"
                  ? green
                  : "blocked"
                  ? red
                  : "inactive"
                  ? yellow
                  : "";
              return (
                <div
                  key={i}
                  className='text-xs my-2 flex items-center gap-4 p-4 capitalize w-full overflowX'
                >
                  <h4 className='font-semibold w-full whitespace-nowrap'>
                    {name}
                  </h4>

                  <h4 className='w-full whitespace-nowrap'>{email}</h4>
                  <h4 className='w-full whitespace-nowrap'>{tel}</h4>
                  <div className='flex items-center space-x-1 w-full whitespace-nowrap'>
                    <img className='w-2' src={statusImg} alt='status' />
                    <h4>{vendorStatus}</h4>
                  </div>
                  <div className='flex space-x-4 w-full cursor-pointer'>
                    <h4 className='underline normal-case text--[#7805A7]'>
                      edit
                    </h4>
                    <h4 className='underline normal-case text-orange-600'>
                      block
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <main className='m-8'>
        <div className='mt-12'>
          <h1 className='font-bold text-2xl capitalize my-4'>Orders</h1>
          <div className='bg-purple-200 grid grid-cols-4 lg:grid-cols-6 gap-4 text-xs p-4 rounded-md font-semibold'>
            <h4>Product</h4>
            <h4 className='hidden lg:block'>Order ID</h4>
            <h4 className='hidden lg:block'>Date</h4>
            <h4>Price</h4>
            <h4 className=''>Status</h4>
            <h4>More</h4>
          </div>
          <div>
            {store.slice(0, 2).map((product, i) => {
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
                orderStatus,
                orderDate,
                deliveryDate,
              } = product;
              const statusImg = orderStatus === "delivered" ? green : yellow;
              return (
                <div
                  key={i}
                  className='text-xs my-2 grid grid-cols-4 lg:grid-cols-6 items-center gap-4 p-4 capitalize'
                >
                  <div className='flex items-center space-x-2'>
                    <img className='w-10 object-contain' src={img} alt='' />
                    <h4 className='font-semibold capitalize hidden lg:block'>
                      {title}
                    </h4>
                  </div>
                  <h4 className='hidden lg:block'>R00{i}T</h4>
                  <h4 className='hidden lg:block'>{orderDate}</h4>
                  <h4>
                    <del>N</del> {price}
                  </h4>
                  <div className='flex items-center space-x-1'>
                    <img className='w-2' src={statusImg} alt='status' />
                    <h4>{orderStatus}</h4>
                  </div>
                  <button
                    className='p-1 border-2 border-[#7805A7] text-[#7805A7] rounded-md'
                    onClick={() => {
                      setItems({
                        title,
                        img,
                        price,
                        weight,
                        qty,
                        color,
                        customer,
                        vendor,
                        address,
                        orderStatus,
                        orderDate,
                        deliveryDate,
                        orderStatus,
                      });
                      setDetails(true);
                    }}
                  >
                    Details
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <UserDetails />
      </main>
    </>
  );
};

export default User;
