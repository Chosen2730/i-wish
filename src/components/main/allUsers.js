import { useGlobalContext } from "../../context";
import SingleUser from "./singleUser";

const AllUsers = () => {
  const { vendors } = useGlobalContext();

  return (
    <>
      <main className='m-8'>
        <div className='flex flex-col sm:flex-row justify-between '>
          <div className='flex space-x-6 items-center'>
            <h1 className='font-semibold text-xl  sm:text-2xl text-gray-700'>
              Users/ Customers
            </h1>
          </div>
        </div>
        <div className='mt-12 text-gray-700 shadow-lg'>
          <div className='bg-purple-200 flex space-x-6 md:grid md:grid-cols-6  text-xs p-4 rounded-md font-semibold w-full whitespace-nowrap overflowX'>
            <h4>Name</h4>
            <h4 className=''>Email</h4>
            <h4 className=''>Mobile Number</h4>
            <h4 className=''>Business Name</h4>
            <h4>Status</h4>
            <h4>Action</h4>
          </div>
          <div>
            {vendors.map((item) => {
              return <SingleUser {...item} key={item.id} />;
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default AllUsers;
