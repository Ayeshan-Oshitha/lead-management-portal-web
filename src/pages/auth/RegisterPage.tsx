import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
      <div className="min-h-screen flex bg-primary-grey justify-center items-center p-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-2xl">
          <h2 className="text-4xl font-bold text-primary-black mb-2 text-center">
            Create Account
          </h2>
          <p className="text-gray-500 text-center mb-6">
            Sign up to get started
          </p>
          <form className="flex flex-col gap-y-5">
            <div className="flex flex-col gap-y-5 sm:flex-row gap-x-4 w-full">
              <div className="w-full  sm:w-1/2">
                <label className="block text-[#23242a] mb-1 font-semibold text-base">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-300 focus:border-primary-green focus:outline-none"
                  placeholder="Enter your first name"
                />
              </div>

              <div className="w-full sm:w-1/2">
                <label className="block text-[#23242a] mb-1 font-semibold text-base">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-300 focus:border-primary-green focus:outline-none"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            <div>
              <label className="block text-[#23242a] mb-1 font-semibold text-base">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg  border-2 border-gray-300 focus:border-primary-green focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-[#23242a] mb-1 font-semibold text-base">
                Mobile Phone
              </label>
              <input
                type="tel"
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-300 focus:border-primary-green focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col gap-y-5 sm:flex-row gap-x-4 w-full">
              <div className="w-full  sm:w-1/2">
                <label className="block text-[#23242a] mb-1 font-semibold text-base">
                  Password
                </label>
                <div className="w-full px-4 py-2 rounded-lg flex flex-row items-center gap-x-4 border-2 border-gray-300 focus-within:border-primary-green ">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="border-none outline-0 flex-1 min-w-1 text-gray-700"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-400 focus:outline-none"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
              <div className="w-full  sm:w-1/2">
                <label className="block text-[#23242a] mb-1 font-semibold text-base">
                  Confirm Password
                </label>
                <div className="w-full px-4 py-2 rounded-lg flex flex-row items-center gap-x-4 border-2 border-gray-300 focus-within:border-primary-green ">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="border-none outline-0 flex-1 min-w-1 text-gray-700"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="text-gray-400 focus:outline-none"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="w-full mt-4 py-2 px-4 bg-primary-green text-white   cursor-pointer rounded-lg hover:opacity-80 transition duration-300"
            >
              Sign In
            </button>
          </form>
          <p className="text-center text-sm text-primary-black mt-4">
            Already have an account?
            <Link to="/login" className="text-primary-green ml-2">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
