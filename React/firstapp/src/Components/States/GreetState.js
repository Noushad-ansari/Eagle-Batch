import React, { Component } from 'react'
import Welcome from './Welcome'

class GreetState extends Component {

    constructor() {
        super()
        this.state = {
            message: "Hello Visitor",
            greet : "GoodMorning"
        }
    }

    handleClick() {
        this.setState({
            message : "Thanks for subscribe",
            greet :"goodnight"
         },)
        // this.state.message = "bye"
        console.log(this.state.message)

    }

    render() {
        const { message ,greet} = this.state
        return (
            <div className="App">
                GreetState
                <br />
                {/* <h1> {this.state.message}</h1> */}
                <h1> {message} {greet} </h1>

                <button onClick={() => { this.handleClick() }}>Chagne Message</button>


                {/* <Welcome myMessage = {this.state.message} /> */}
            </div>
        )
    }
}

export default GreetState