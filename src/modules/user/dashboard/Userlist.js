import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Userlist() {

  const [userlist, updateusers] = useState([]);


  const myapi = () => {

    axios.get("https://backend-ra14.onrender.com/alldata")
      .then((d) => {

        console.log(d.data.data);

        updateusers(d.data.data);

      });

  };


  useEffect(() => {
    myapi();
  }, []);



  const userdelete = (id) => {

    axios.delete(`http://localhost:8900/userdelete/${id}`)
      .then((res)=>{

        console.log(res.data);

        if(res.data.status === 209){
          alert(res.data.msg);
        }

        myapi();

      });

  };



  return (

    <div className='container-fluid'>

      <table className="table table-bordered table-striped">

        <thead className="table-dark">

          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>

        </thead>


        <tbody>

        {
          userlist.map((u)=>(
            
            <tr key={u._id}>

              <td>{u._id}</td>
              <td>{u.name}</td>
              <td>{u.phone}</td>
              <td>{u.email}</td>
              <td>{u.password}</td>

              <td>

              <button 
              className='btn btn-danger btn-sm'
              onClick={()=>userdelete(u._id)}
              >
                Delete
              </button>

              </td>


            </tr>

          ))
        }


        </tbody>


      </table>


    </div>

  )
}