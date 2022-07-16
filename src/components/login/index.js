import { useState } from "react";
import Validation from "./validation";
import Unauth from "./unauth";

const Login = () => {
  const [page, setPage] = useState(0);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName === "admin" && password === "admin123") {
      setPage(2);
    } else {
      setPage(3);
    }
  };
  return (
    <>
      {page === 1 && (
        <div className='my-12 text-gray-900'>
          <h1 className='text-3xl sm:text-5xl font-bold my-8 mt-24 text-center'>
            Admin Panel
          </h1>
          <div className='w-5/6 max-w-3xl sm:p-20 mx-auto border-2 border-gray-50 rounded-md shadow-md p-8'>
            <form className='' onSubmit={handleSubmit}>
              <label
                className='block text-sm mb-1 sm:text-base'
                htmlFor='username'
              >
                Username
              </label>
              <input
                className='block bg-gray-100 rounded-md p-2 py-4 text-sm mb-6 w-full'
                placeholder='Enter Username'
                type='text'
                id='username'
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <label
                className='block text-sm mb-1 sm:text-base'
                htmlFor='password'
              >
                Password
              </label>
              <input
                className='block bg-gray-100 rounded-md p-2 py-4 text-sm mb-6 w-full'
                placeholder='Password'
                type='password'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                className='block bg-[#7805A7] rounded-md text-purple-100  py-4 my-4 text-sm md:text-xl font-bold w-full capitalize'
                type='submit'
                value='login'
              />
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
