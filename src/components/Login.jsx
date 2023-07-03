import React from "react";
import { FcGoogle } from "react-icons/fc";
import GoogleLogin from "react-google-login";

export const Login = () => {
  return (
    <div className="flex justify-center items-center md:h-screen w-full m-auto">
      <div className="flex flex-row justify-center items-center w-full m-16 md:m-auto lg:m-16">
        <div className="hidden md:flex bg-gradient-to-r from-purple-200 via-blue-400 to-blue-300 md:w-6/12 lg:w-full">
          <div className="flex flex-col justify-center items-start bg-white/50 mx-20 my-40 p-16">
            <h1 className="flex flex-col text-5xl font-bold text-white py-5 w-11/12">
              Digital Platform For Distance{" "}
              <span className="text-black">Learning</span>
            </h1>
            <p className="text-white">
              You will never know everything, but you will know more.
            </p>
          </div>
        </div>
        <div className="flex flex-col  w-full justify-center items-center">
          <div className="flex flex-col my-5">
            <h3 className="font-bold text-3xl my-5">Hey, hello</h3>
            <p>Enter the information you entered while registering.</p>
          </div>
          <form action="" className="flex flex-col w-full md:w-1/2">
            <div className="flex flex-col">
              <div className="flex flex-col">
                <label htmlFor="email" className="capitalize my-3">
                  Email
                </label>
                <input type="email" id="email" />
              </div>
              <div className="flex flex-col my-5">
                <label htmlFor="password" className="capitalize my-3 ">
                  Password
                </label>
                <input type="password" />
              </div>
            </div>

            <div className="flex justify-between">
              <div>
                <input type="checkbox" className="" />
                <label className="capitalize ml-2  text-xs ">Remember me</label>
              </div>
              <a
                href=""
                className="text-xs mt-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
              >
                Forget password?
              </a>
            </div>
            <button
              type="submit"
              className="my-4 bg-gradient-to-r from-blue-200 via-blue-600 to-purple-700 rounded-md py-3 text-white"
            >
              Login
            </button>
            <fieldset className="border-t border-slate-300 my-5">
              <legend className="mx-auto px-4 italic">or</legend>
            </fieldset>

            <div className="border flex justify-center items-center">
              <GoogleLogin
                render={(renderProps) => (
                  <button
                    type="button"
                    className="bg-mainColor flex justify-center items-center text-bold p-3 rounded-lg cursor-pointer outline-none"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    <FcGoogle size={30} className="mr-4" /> Sign in with Google
                  </button>
                )}
                cookiePolicy="single_host_origin"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
