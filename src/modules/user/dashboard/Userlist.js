import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Userlist() {
  const [userlist, update] = useState([])

  const api = () => {
    axios.get('https://dummyjson.com/users').then((d) => {
      
      update(d.data.users);
    })
  }

  useEffect(() => {
    api();
  }, [])

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12'>
          <table className="table table-bordered table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {
                userlist.map((u) => {
                  return (
                    <tr key={u.id}>
                      <td>{u.id}</td>
                      <td>{u.firstName}</td>
                      <td>{u.lastName}</td>
                      <td>{u.email}</td>
                      <td>{u.phone}</td>
                      <td>
                        {u.address.address}, {u.address.city}, {u.address.state}
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
