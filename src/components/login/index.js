import { useState } from "react";
import Validation from "./validation";
import Unauth from "./unauth";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";
import { useGlobalContext } from "../../context";
import { Spinner } from "react-activity";
import { toast, ToastContainer } from "react-toastify";
// import { reactLocalStorage } from "reactjs-localstorage";

const Login = () => {
  const { baseUrl } = useGlobalContext();
  const [page, setPage] = useState(1);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // const [pass, setPass] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(phone, email);
    const url = `${baseUrl}/auth/login`;
    try {
      const res = await axios.post(url, { email, phone });
      console.log(res);
      setIsLoading(false);
      const uuid = res.data.data.uuid;
      // console.log(uuid);
      localStorage.setItem("uuid", uuid);
      toast.success(res.data.message);
      setPage(2);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      toast.error(error.response.data.message);
      setPage(3);
    }
  };

  return (
    <>
      <ToastContainer autoClose={3000} />
      {page === 1 && (
        <div className='my-12 text-gray-900'>
          <h1 className='text-3xl sm:text-5xl font-bold my-8 mt-24 text-center'>
            Admin Panel
          </h1>
          <div className='w-5/6 max-w-3xl sm:p-20 mx-auto border-2 border-gray-50 rounded-md shadow-md p-8'>
            <form className='' onSubmit={handleSubmit}>
              <label
                className='block text-sm mb-1 sm:text-base'
                htmlFor='email'
              >
                Email
              </label>
              <input
                className='block bg-gray-100 rounded-md p-2 py-4 text-sm mb-6 w-full'
                placeholder='Enter email'
                type='email'
                id='email'
                value={email || ""}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label
                className='block text-sm mb-1 sm:text-base'
                htmlFor='phone'
              >
                Phone Number
              </label>
              <div className='relative'>
                <input
                  className='block bg-gray-100 rounded-md p-2 py-4 text-sm mb-6 w-full'
                  placeholder='phone'
                  type={`tel`}
                  id='phone'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                {/* <i
                  className='text-2xl absolute top-3 right-6 text-gray-500'
                  onClick={() => setPass(!pass)}
                >
                  {pass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                </i> */}
              </div>
              <button
                className='block bg-[#7805A7] rounded-md text-purple-100 py-4 my-4 text-sm md:text-xl w-full md:w-1/2 px-6 capitalize mx-auto'
                type='submit'
              >
                {isLoading ? <Spinner /> : "Login"}
              </button>
            </form>
          </div>
        </div>
      )}
      {page === 2 && <Validation />}
      {page === 3 && <Unauth setPage={setPage} />}
    </>
  );
};

export default Login;
