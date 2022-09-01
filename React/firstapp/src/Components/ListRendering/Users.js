import React, { useState } from 'react'
import SetState from '../States/SetState'

export default function Users({ userId, userName, userEmail }) {
    // let {userId,userName,userEmail }= props

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    if (isLoggedIn) {
        return (<div>
            <h2>{userName}</h2>
        </div>)
    } else {
        return (
            <div>
                <div>
                    <h1>{userId}</h1>
                </div>

                <div>
                    <h2>{userEmail}</h2>
                </div>
            </div>
        )
    }




}
