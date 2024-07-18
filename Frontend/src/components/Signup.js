import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-[500px]">
        <div className="modal-box  shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_1px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Signup</h3>
            <div className="flex flex-col mt-5 space-y-4">
              {/* Name */}
              <span>Name</span>
              <input
                type="text"
                placeholder="Enter your fullname"
                className="w-80 px-3 py-2 border rounded-md outline-none"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
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
                Signup
              </button>
              <p className="text-xl">
                Have account?{" "}
                <button
                  className="underline text-blue-500 cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </button>
                <Login />
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
