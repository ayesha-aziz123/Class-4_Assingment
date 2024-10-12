import React from "react";

function Signup() {
  return (
    <div className=" max-w[100%] bg-gradient-to-r from-purple-800 to-pink-600  w-[100%] h-screen flex justify-center items-center ">
      <div className="shadow-2xl shadow-gray-900 border-2 bg-white border-gray-600 p-7 w-[20rem] h-[80%] md:h-[96%] md:w-[23rem] rounded-[13px]">
        <h1 className="text-3xl text-black font-[700]  mb-2 text-center">
          Sign up{" "}
          <p className="h-[5px] rounded-full w-[20%] mx-auto mt-1 bg-purple-600 "></p>
        </h1>

        <div className=" flex justify-center items-center flex-col gap-y-4 w-full">
          <form>
            <label htmlFor="username" className="font-[600]">
              Username
            </label>
            <input
              className="inputs"
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
            />

            <label htmlFor="email" className="font-[600]">
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
              Create password
            </label>
            <input
              className="inputs"
              type="password"
              id="password"
              name="password"
              placeholder="Create a password"
            />
            <div className="text-center">
              <p className="my-3 text-[14px] ">
                By creating an account, I agree to{" "}
                <span className="text-purple-800">Terms and Conditions</span>{" "}
              </p>

              <button className=" btn bg-purple-600 text-white text-[19px] font-bold w-full rounded-[20px] py-[6px] px-8">
                Create Account
              </button>
              <p className="mt-5  text-[14px] ">
                Already have an account?
                <span className="text-purple-800 ">
                  {" "}
                  Login <br /> Need help ?
                </span>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
