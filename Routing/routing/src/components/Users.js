import React, {  useState } from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

export default function Users() {
  const [searchParams, setSearchParams] = useSearchParams()

  
  const showActiveUser = searchParams.get('filter') === "active"
  console.log(showActiveUser)
  console.log(searchParams.get('filter'))
  


  return (
    <div>
      <h1>Users</h1>
      <ul>
        <li>user1</li>
        <li>user2</li>
        <li>user3</li>

      </ul>
      <Outlet />

   <div>
    <button onClick={()=>setSearchParams({filter:'active'})}>show Active User</button>
    <button onClick={()=>setSearchParams({})}>show all user</button>
   </div>

      <div>
        {showActiveUser ? <h1> Showing Active Users</h1> : <h1> Showing All Users</h1>}
      </div>

    </div>
  )
}
