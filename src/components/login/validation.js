import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context";
import otpImg from "../../images/otp.png";
import { Spinner } from "react-activity";
import { toast, ToastContainer } from "react-toastify";
import OTP from "./OTP";
import OTPInput from "otp-input-react";
import { type } from "@testing-library/user-event/dist/type";

const Validation = () => {
  const { baseUrl } = useGlobalContext();

  const [isLoading, setIsLoading] = useState(false);
  const [OTP, setOTP] = useState("");
  console.log(OTP);
  const navigate = useNavigate();

  const verify = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const uuid = localStorage.getItem("uuid");
    const url = `${baseUrl}/auth/verify`;
    const data = { uuid, code: +OTP };
    try {
      setIsLoading(false);
      const res = await axios.post(url, data);
      console.log(res);
      toast.success(res.data.message);
      const token = res.data.data.token;
      localStorage.setItem("token", token);
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className='my-12 text-gray-900 px-6'>
      <ToastContainer autoClose={3000} />
      <h1 className='text-3xl sm:text-5xl font-bold mt-24 text-center'>
        OTP Verification
      </h1>
      <div className='w-5/6 max-w-3xl sm:p-20 mx-auto'>
        <form
          className='flex flex-col items-center justify-center'
          onSubmit={verify}
        >
          <img src={otpImg} className='w-52' alt='' />
          <p className='text-sm my-4 text-center'>
            Please, enter the 5 digit code sent to your email for verification.
            Open Email App
          </p>

          <OTPInput
            value={OTP}
            onChange={setOTP}
            autoFocus
            OTPLength={5}
            otpType='number'
            disabled={false}
            secure
            inputStyles={{
              margin: "2px",
              backgroundColor: "#dddd",
              fontSize: "2rem",
            }}
          />
          <button
            className='block bg-[#7805A7] rounded-md text-purple-100  py-4 my-4 text-sm md:text-xl w-fit px-6 capitalize'
            type='submit'
          >
            {isLoading ? <Spinner /> : "Verify OTP"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Validation;
