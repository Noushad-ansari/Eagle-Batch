import React from 'react'

export default function InlineCss() {

    let heading = {
        fontSize : "62px",
        background : "teal",
        color: "orangered"
    }
  return (
    <div className='App'>
        {/* Inline css */}
        <h1 style= {{color:"red"}} >Inline Css</h1>

        <h3 style={heading}>Second Heading</h3>

    </div>
  )
}
