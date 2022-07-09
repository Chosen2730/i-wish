import { useGlobalContext } from "../../context";
import green from "../../images/dotg.png";
import yellow from "../../images/doty.png";
import red from "../../images/dotr.png";

const Vendor = () => {
  const { vendors } = useGlobalContext();

  return (
    <>
      <main className='m-8'>
        <div className='flex flex-col sm:flex-row justify-between '>
          <h1 className='font-semibold text-xl  sm:text-2xl text-gray-700'>
            Vendors
          </h1>
        </div>
        <div className='mt-12 text-gray-700 shadow-lg'>
          <div className='bg-purple-200 flex  space-x-6 md:grid md:grid-cols-6  text-xs p-4 rounded-md font-semibold w-full whitespace-nowrap overflowX'>
            <h4>Name</h4>
            <h4 className=''>Email</h4>
            <h4 className=''>Mobile Number</h4>
            <h4 className=''>Business Name</h4>
            <h4>Status</h4>
            <h4>Action</h4>
          </div>
          <div>
            {vendors.map((items, i) => {
              const { name, email, tel, busName, vendorStatus } = items;
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
                  <h4 className='w-full whitespace-nowrap'>{busName}</h4>
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
                    {/* <h4 className='underline normal-case text-blue-700'>
                      details
                    </h4> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default Vendor;
