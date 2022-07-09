import { useState } from "react";
import { useGlobalContext } from "../../context";
import green from "../../images/dotg.png";
import yellow from "../../images/doty.png";
import red from "../../images/dotr.png";
import close from "../../images/close.png";

const Vendor = () => {
  const { setDetails, details, vendors } = useGlobalContext();

  return (
    <>
      <main className='m-8'>
        <div className='flex flex-col sm:flex-row justify-between '>
          <h1 className='font-semibold text-xl  sm:text-2xl text-gray-700'>
            Vendors
          </h1>
        </div>
        <div className='mt-12 text-gray-700'>
          <div className='bg-purple-200 flex  space-x-6 md:grid md:grid-cols-5  text-xs p-4 rounded-md font-semibold w-full whitespace-nowrap overflowX'>
            <h4>Name</h4>
            <h4 className=''>Email</h4>
            <h4 className=''>Mobile Number</h4>
            <h4 className=''>Business Name</h4>
            <h4>Status</h4>
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
                    <h4 className='underline normal-case text-blue-700'>
                      details
                    </h4>
                  </div>
                </div>
              );
            })}
            ;
          </div>
        </div>
        {/* <div className={`${showNote ? "category" : "category hider"} overflow`}>
          <div className='bg-white shadow-md rounded-md p-4 text-gray-700'>
            <img
              className='bg-[#7805A7] p-2 ml-auto rounded-md'
              src={close}
              alt=''
              onClick={() => setshowNote(false)}
            />
            <h1 className='text-center text-xl sm:text-2xl font-semibold my-3'>
              New Notification
            </h1>
            <form action='' className='sm:w-5/6 mx-auto'>
              <label htmlFor='category' className='text-sm'>
                Subject
              </label>
              <input
                type='text'
                className='block bg-gray-100 p-2 rounded-md my-2 w-full font-sm mb-4'
                placeholder='Subject of your notification'
                value={sub}
                onChange={(e) => setSub(e.target.value)}
              />
              <label htmlFor='category' className='text-sm'>
                Message Details
              </label>
              <textarea
                name=''
                id=''
                cols='30'
                rows='10'
                value={message}
                placeholder='Notification Details'
                className='block bg-gray-100 p-2 rounded-md my-2 w-full font-sm mb-4'
                onChange={(e) => setMessage(e.target.value)}
              />
              <label htmlFor='category' className='text-sm'>
                Select Receiver
              </label>
              <select
                name=''
                id=''
                className='block bg-gray-100 p-2 rounded-md my-2 w-full font-sm capitalize mb-4'
                value={receiver}
                onChange={(e) => setReceiver(e.target.value)}
              >
                <option value='all'>all</option>
                <option value='vendors'>vendors</option>
                <option value='customers'>customers</option>
              </select>

              <button
                className='bg-[#7805A7] text-white rounded-md text-sm md:text-base p-2 px-4 font-normal tracking-wider w-full my-2'
                onClick={addNotification}
              >
                Broadcast Notification
              </button>
              <button
                className='border-[#7805A7] border-2 text-[#7805A7] rounded-md text-sm md:text-base p-2 px-4 font-normal tracking-wider w-full my-2'
                onClick={addNotification}
              >
                Save as Draft
              </button>
            </form>
          </div>
        </div> */}
        {/* <NoteDetails {...noteObj} /> */}
      </main>
    </>
  );
};

export default Vendor;
