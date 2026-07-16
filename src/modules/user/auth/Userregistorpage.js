import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";


function Userregistorpage() {
  const nav=useNavigate();
  const {register, handleSubmit ,formState:{errors}}=useForm();
   const formSubmit =(formdata)=>{
    console.log(formdata)
    if (formdata.email && formdata.pass){
    toast.success('welcom to home page')
     setTimeout(() => {
             nav('/landing');
          }, 2000);

   }
   else{
    toast.warning("check email and password")
   }
   }
   
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 border bg-light shadow p-4 rounded">
        <ToastContainer/>
          <h3 className="text-center mb-4">User Register</h3>
          <form onSubmit={handleSubmit(formSubmit)}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              {...register('name',{required:'true'})}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              {...register('email',{required:'true'})}
            />
            {errors.email && <p>email is required</p>}
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              {...register('pass',{required:'true'})}
            />
            {errors.email && <p className="text-danger">Password is required</p>}
          </div>

          <div className="text-center">
            <input type="Submit" value="register" className="btn btn-primary"/>
              

            <Link to="/" className="ms-4">
              Back to Login
            </Link>
          </div>
</form>
        </div>
      </div>
    </div>
    
  );
}
export default Userregistorpage;