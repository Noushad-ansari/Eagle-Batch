import React, { useState } from 'react'
import CompB from './CompB'
import { ContextProvider } from './UserContext'


export default function CompA() {
    const [name, setNames] = useState("john")

    const changeName = ()=>{
        setNames("xyz")
    }
    return (
        <div className='App'>
            {/* <ContextProvider value = {name} >
            <CompB/>
          </ContextProvider> */}
            <button onClick={changeName}>{name}</button>

        </div>

    )
}
