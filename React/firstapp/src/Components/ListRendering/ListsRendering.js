import React from 'react'
import userData from './userData'
import Users from './Users';

export default function Lists() {

    let userId = userData.map(user => (<span>{user.id}</span>))
    // let userName = userData.map(user => (<span>{user.name}</span>))
    // let userEmail = userData.map(user => (<span>{user.email}</span>))
    const userDetails = userData.map((user,index) => ( <Users key= {index} userId = {user.id} userName = {user.name} userEmail = {user.email} />))
    return (
        <div className='App'>
            <h1>List</h1>
           {userDetails}
        </div>
    )
}

// Welcome xyz // green
// Logout // red  > click > Thank for visiting...username +  login
