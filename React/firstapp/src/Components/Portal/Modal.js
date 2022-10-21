import React, { Component } from 'react'
import ReactDOM from "react-dom"

const modalRoot = document.getElementById("modal_root")

export class Modal extends Component {
    render() {
        return ReactDOM.createPortal(
            <div style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                display: "grid",
                justifyContent: "center",
                alignItems: "center",
                background:' rgba(0, 0, 0, 0.2)'

            }}>
                <div style={{
                    padding: 20,
                    background: '#fff',
                    borderRadius: '5px',
                    display: 'inline-block',
                    justifySelf:"center",
                    minHeight: "300px",
                    minWidth: '300px',
                    margin: '1rem',
                    postion: 'relative',
                    boxShadow: '0 3px 6px rgba(0,0,0,0.1), 0 3px 6px rgba(0,0,0,0.25)'
                }}>
                    {this.props.chidlren}
                    <hr />
                    <button onClick={this.props.onClose}>Close</button>
                </div>
            </div>
            , modalRoot)
    }
}

export default Modal