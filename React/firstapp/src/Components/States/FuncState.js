import React, { useState } from 'react'

export default function FuncState() {

    const [greet, setGreets] = useState("GoodMorning")

    function handleClick(){
        setGreets("Good night")
    }
    return (
        <div>
            FuncState
           <h1> {greet}</h1>
           <br />
            <button onClick = {handleClick}>Change Greet</button>
        </div>
    )
}
