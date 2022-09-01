import React from 'react'
import ChildFunc from './ChildFunc'

export default function ParentFunc() {

    
  return (
    <div>
        <h1>ParentFunc</h1>
        <ChildFunc name = "john" age = {25}/>
    </div>
  )
}
