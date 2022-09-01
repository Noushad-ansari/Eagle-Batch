import React from 'react'

export default function FunClick() {

    function handleClick(){
        console.log("Good mOrning")
    }

    return (
        <div>
            <h1>Function Click Event</h1>
            <button onClick ={handleClick}>Click Event</button>
        </div>
    )
}
