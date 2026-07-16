import React from "react";
import { Link ,useNavigate} from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast,ToastContainer } from "react-toastify";

function Userloginpage() {
  const{register , handleSubmit ,formState:{errors}}=useForm();
  const mynav=useNavigate();
    const formSubmit=(formdata)=>{
       console.log(formdata)
      if(formdata.email === 'admin@gmail.com' && formdata.pass==='admin'){
          toast.success("welcome to dashboard" ,{theme:'dark' , autoClose:2000})
          
          setTimeout(() => {
             mynav('landing');
          }, 2000);
      }else{
        toast.warning('email and password wrong')
      }
 }
  return (
    <form onSubmit={handleSubmit(formSubmit)}>
    <div className="container mt-5" >
      <div className="row justify-content-center">
        <div className="col-md-6 border bg-light shadow p-4 rounded">

          <h3 className="text-center mb-4">User Login</h3>
          <ToastContainer/>
          <div className="mb-3">
            <label className="form-label ">Email Address</label>
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
               {...register('pass')}
            />
          </div>

          <div className="text-center">
            <input type="submit" className="btn btn-success" />

            <Link to="/registor" className="ms-4">
              New Register
            </Link>
          </div>

        </div>
      </div>
    </div>
    </form>
  );
}

export default Userloginpage;