import React from 'react'
import  "./module.css"
import styles  from "./style.module.css"

export default function ModuleCss() {
  return (
    <div className='App'>
      <h1 className='textColor'>  ModuleCss</h1>
      <h2 className = {styles.App}>Learning module css</h2>
    </div>
  )
}
