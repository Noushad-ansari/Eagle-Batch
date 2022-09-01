import React from 'react'

export default function ChildComp(props) {

console.log(props)
  return (
    <div>
        ChildComp
        <h1>{props.message}</h1>
        <button onClick = {props.handleClick}>Change Message</button>
        </div>
  )
}
