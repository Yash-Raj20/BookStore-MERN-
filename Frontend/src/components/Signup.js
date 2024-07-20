import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    async function signup() {
      try {
        const res = await axios.post(
          "http://localhost:4001/users/signup",
          userInfo
        );
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfull");
          setTimeout(() => {
            navigate(from, { replace: true });
            window.location.reload();
          }, 1000);
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      } catch (err) {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        } else {
          console.log(err);
          toast.error("Error: Unknown error occurred");
        }
      }
    }
    signup();
  };
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-[500px]">
        <div className="modal-box dark:bg-slate-400 shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_1px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] dark:shadow-[0px_5px_1px_rgba(221,_221,_221,_1),_0_5px_7px_rgba(204,_204,_204,_1)]">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg dark:text-slate-900">Signup</h3>
            <div className="flex flex-col mt-5 space-y-4 dark:text-slate-900">
              {/* Name */}
              <span>Name</span>
              <input
                type="text"
                placeholder="Enter your fullname"
                className="w-80 px-3 py-2 border rounded-md outline-none"
                {...register("fullname", { required: true })}
              />
              {errors.fullname && (
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
                  className="underline text-blue-500 cursor-pointer dark:text-blue-700"
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
