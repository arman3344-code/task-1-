import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

function Userregistorpage() {
  const nav = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmit = (formdata) => {
axios.post("https://backend-ra14.onrender.com/registor", formdata)
      .then((res) => {
        toast.success(res.data.msg);

        setTimeout(() => {
          nav("/");
        }, 1500);
      })
      .catch((err) => {
        console.log(err);

        if (err.response) {
          toast.error(err.response.data.msg);
        } else {
          toast.error("Server not responding");
        }
      });
  };

  return (
    <div className="loginbg">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 shadow p-4 bg-white rounded">

            <ToastContainer />

            <h3 className="text-center mb-4">
              User Registration
            </h3>

            <form onSubmit={handleSubmit(formSubmit)}>

              <div className="mb-3">
                <label>Name</label>
                <input
                  className="form-control"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <small className="text-danger">
                    Name is required
                  </small>
                )}
              </div>

              <div className="mb-3">
                <label>Phone</label>
                <input
                  className="form-control"
                  {...register("phone", { required: true })}
                />
                {errors.phone && (
                  <small className="text-danger">
                    Phone is required
                  </small>
                )}
              </div>

              <div className="mb-3">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <small className="text-danger">
                    Email is required
                  </small>
                )}
              </div>

              <div className="mb-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <small className="text-danger">
                    Password is required
                  </small>
                )}
              </div>

              <button className="btn btn-primary w-100">
                Register
              </button>

              <div className="text-center mt-3">
                <Link to="/">Back to Login</Link>
              </div>

            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Userregistorpage;