import React, { Component } from 'react'
import FRInput from './FRInput'

export class FRParentInput extends Component {

    constructor(props) {
        super(props)

        this.inputRef = React.createRef()
    }

    focusHandler = () => {
        this.inputRef.current.focus()
    }

    render() {
        return (
            <div className='App'>
                {/* <input type="text" ref={this.inputRef} /> */}
                <FRInput age = "hello" ref= {this.inputRef} />
                <button onClick={this.focusHandler}>Focus Input</button>
            </div>
        )
    }
}

export default FRParentInput