import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Userlist() {
  
      const [userlist, updateusers] = useState([])


    const myapi = () => {
        axios.get("https://backend-ra14.onrender.com").then((d) => {
            console.log(d.data.userslist);
            updateusers(d.data.userslist);
        })
    }

    useEffect(() => {
        myapi();
    }, []);


    const userdelete = (r) => {

            axios.delete(`https://backend-ra14.onrender.com` + r).then((res) => {
                console.log(res);
                if(res.data.status===209)
                {
                alert(res.data.msg);
                }
                myapi();
            });
            
        }
       
        

  
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12'>
          <table className="table table-bordered table-striped table-hover">
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
                                {userlist.map((u) => {
                                    return (
                                        <tr>
                                            <th scope="row">{u._id}</th>
                                            <td>{u.Name}</td>
                                            <td>{u.Phone}</td>
                                            <td>{u.Email}</td>
                                            <td>{u.Password}</td>
                                            <td>
                                                <button className='btn btn-danger btn-sm' onClick={() => userdelete(u._id)}>Del</button>
                                            </td>
                                        </tr>
                                    )
                                })}


                            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
