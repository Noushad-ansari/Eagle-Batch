import React, { useState } from 'react'
import './myStyle.css'

export default function StyleCom() {

    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const [userName, setUserName] = useState("AHil")

    let style = isLoggedIn ? "success" : 'error'

    function handleLogout() {
        setIsLoggedIn(false)
    }
    function handleLogin() {
        setIsLoggedIn(true)
    }

    if (isLoggedIn) {
        return (
            <div className='App'>
                <h1 className={`${style} fontXl`}>Welome {userName}</h1>
                <h5>You are LoggedIn </h5>
                <button onClick={handleLogout}>Logout</button>
            </div>
        )
    } else {
        return (
            <div className='App'>
                <h1 className={style}>Thankyou for Visit</h1>
                <h5>Please Login again</h5>
                <button onClick={handleLogin}>Log In</button>
            </div>
        )
    }

}
