import React from "react";

function Login() {
  return (
    <div className=" max-w[100%] bg-gradient-to-r from-purple-800 to-pink-600  w-[100%] h-screen flex justify-center items-center ">
      <div className="shadow-2xl shadow-gray-900 border-2 bg-white border-gray-600 p-7 w-[20rem] h-[74%] md:h-[78%] md:w-[21rem] rounded-[13px]">
        <h1 className="text-3xl text-black font-[700]  mb-3 text-center">
          Login{" "}
          <p className="h-[5px] rounded-full w-[20%] mx-auto mt-1 bg-purple-600 "></p>
        </h1>

        <div className=" flex justify-center items-center flex-col gap-y-4 w-full">
          <form>
            <label htmlFor="username" className="font-[600]">
              Email Id
            </label>
            <input
              className="inputs"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />

            <label htmlFor="password" className="font-[600]">
              Password
            </label>
            <input
              className="inputs"
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
            />
            <div className="text-center ">
              <p className="text-purple-800 text-end font-bold text-[12px] mb-4">
                Forgot password?
              </p>{" "}
              <button className=" btn bg-purple-600 text-white text-[19px] font-bold w-full rounded-[20px] py-[6px] px-8">
                Log in
              </button>
              <p className="mt-5  text-[12px] ">
                Don't have an account ? 
                <span className="text-purple-800 ">
                  Signup <br />
                  Need help ?
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
