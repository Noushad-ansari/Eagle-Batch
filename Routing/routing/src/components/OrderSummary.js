import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Ordersummary() {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Your Order Confirmed</h1>
      <br />
      <button onClick={()=>navigate (-1)}>Goto Home</button>
    </div>
  )
}
