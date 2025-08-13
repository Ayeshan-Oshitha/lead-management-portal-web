import { Link } from "react-router-dom";
import { Mail, EyeOff, Eye, Lock } from "lucide-react";
import { useState } from "react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="min-h-screen flex bg-primary-grey justify-center items-center p-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full  max-w-xl">
          <h2 className="text-4xl font-bold text-primary-black mb-2 text-center">
            Welcome Back
          </h2>
          <p className="text-gray-500 text-center mb-6">
            Sign in to your account
          </p>
          <form className="flex flex-col gap-y-6">
            <div>
              <label className="block text-primary-black mb-1 font-semibold text-base">
                Email
              </label>
              <div className="w-full px-4 py-2 rounded-lg flex flex-row items-center gap-x-4 border-2 border-gray-300  focus-within:border-primary-green ">
                <Mail size={20} className="text-gray-400" />
                <input
                  type="email"
                  placeholder="youremail@example.com"
                  className="border-none outline-0 flex-1 min-w-1 text-gray-700"
                />
              </div>
            </div>
            <div>
              <label className="block text-primary-black mb-1 font-semibold text-base">
                Password
              </label>
              <div className="w-full px-4 py-2 rounded-lg flex flex-row items-center gap-x-4 border-2 border-gray-300 focus-within:border-primary-green ">
                <Lock size={20} className="text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="border-none outline-0 flex-1 min-w-1 text-gray-700"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-400"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex items-center px-2">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-primary-green focus:ring-primary-green border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-primary-black"
                >
                  Remember me
                </label>
              </div>
              <p className="font-bold text-primary-green">Forgot password?</p>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-primary-green text-white   cursor-pointer rounded-lg hover:opacity-80 transition duration-300"
            >
              Sign In
            </button>
          </form>
          <p className="text-center text-sm text-primary-black mt-4">
            Don’t have an account?
            <Link to="/register" className="text-primary-green ml-2">
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
