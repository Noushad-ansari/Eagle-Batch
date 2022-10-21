import React from 'react'
import ReactDOM from "react-dom"

export default function PortalDemo(props) {
  return ReactDOM.createPortal(
    (
    <div>
        <h1>PortalDemo</h1>
        <h2>{props.children}</h2>
    </div>
  ),
  document.getElementById("portal_root"))
}
