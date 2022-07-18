import React from "react";
import { useNavigate } from "react-router-dom";
import otp from "../../images/otp.png";

const Validation = () => {
  const navigate = useNavigate();
  return (
    <div className='my-12 text-gray-900 px-6'>
      <h1 className='text-3xl sm:text-5xl font-bold mt-24 text-center'>
        OTP Verification
      </h1>
      <div className='w-5/6 max-w-3xl sm:p-20 mx-auto'>
        <form
          className='flex flex-col items-center justify-center'
          onSubmit={(e) => e.preventDefault()}
        >
          <img src={otp} alt='' />
          <p className='text-sm my-4 text-center'>
            Please, enter the 5 digit code sent to your email for verification.
            Open Email App
          </p>
          <div className='grid grid-cols-5 gap-4'>
            <input
              className='bg-gray-200 w-10 h-10 rounded-md text-center font-bold text-xl'
              type='text'
              inputMode='numeric'
              autoComplete='one-time-code'
              name=''
              id=''
            />
            <input
              className='bg-gray-200 w-10 h-10 rounded-md text-center font-bold text-xl'
              type='text'
              inputMode='numeric'
              autoComplete='one-time-code'
              name=''
              id=''
            />
            <input
              className='bg-gray-200 w-10 h-10 rounded-md text-center font-bold text-xl'
              type='text'
              inputMode='numeric'
              autoComplete='one-time-code'
              name=''
              id=''
            />
            <input
              className='bg-gray-200 w-10 h-10 rounded-md text-center font-bold text-xl'
              type='text'
              inputMode='numeric'
              autoComplete='one-time-code'
              name=''
              id=''
            />
            <input
              className='bg-gray-200 w-10 h-10 rounded-md text-center font-bold text-xl'
              type='text'
              inputMode='numeric'
              autoComplete='one-time-code'
              name=''
              id=''
            />
          </div>
          <input
            className='block bg-[#7805A7] rounded-md text-purple-100  py-4 my-4 text-sm md:text-xl w-fit px-6 capitalize'
            type='submit'
            value='Proceed to Dashboard'
            onClick={() => navigate("/dashboard")}
          />
        </form>
      </div>
    </div>
  );
};

export default Validation;
