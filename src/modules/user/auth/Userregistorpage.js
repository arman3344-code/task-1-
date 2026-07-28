import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

function Userregistorpage() {
  const nav = useNavigate(); 
  const { register, handleSubmit, formState: { errors } } = useForm();

  const formSubmit = (formdata) => {
    console.log(formdata);

   // Backend Render URL
axios.post("https://backend-ra14.onrender.com/registor", formdata)
      .then((r) => {
        console.log(r);
        toast.success("Registration successful!");
        setTimeout(() => {
          nav('/landing');
        }, 2000);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Registration failed!");
      });

    // This else will rarely run because of validation
    if (!(formdata.email && formdata.pass)) {
      toast.warning("Check email and password");
    }
  };

  return (
    <div className="loginbg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 border bg-light shadow p-4 rounded">
            <ToastContainer />
            <h3 className="text-center mb-4">User Register</h3>
            <form onSubmit={handleSubmit(formSubmit)}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Name"
                  {...register('name', { required: true })}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Phone"
                  {...register('phone', { required: true })}
                />
                {errors.phone && <p className="text-danger">Phone is required</p>}
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                  {...register('email', { required: true })}
                />
                {errors.email && <p className="text-danger">Email is required</p>}
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Password"
                  {...register('pass', { required: true })}
                />
                {errors.pass && <p className="text-danger">Password is required</p>}
              </div>
              <div className="text-center">
                <input type="submit" value="Register" className="btn btn-primary" />
                <Link to="/" className="ms-4">Back to Login</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userregistorpage;
