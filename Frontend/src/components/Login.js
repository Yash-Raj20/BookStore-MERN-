import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Login</h3>
            <div className="flex flex-col mt-5 space-y-4">
              {/* Email */}
              <span>Email</span>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-2 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
              {/* Password */}
              <span>Password</span>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-2 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex justify-around items-center mt-4">
              <button className="bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-700 duration-300">
                Login
              </button>
              <p className="">
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
