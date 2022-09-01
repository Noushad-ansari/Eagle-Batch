import React, { Component } from 'react'
import ChildComp from './ChildComp'

class EventBind extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: "Hello Visitor"
        }

    // this.handleClick = this.handleClick.bind(this)
    }

    handleClick=(user)=> {
        console.log("hello event Binding" ,user)
        this.setState({
            message: "Thanks for joining us"
        })
    }

    render() {
        return (
            <div className="App">
                <h1>Event Binding</h1>

                <ChildComp message = {this.state.message} handleClick ={this.handleClick} />
                {/* <h2>{this.state.message}</h2> */}

                {/* 1st method */}
                {/* <button onClick={this.handleCLick.bind(this)}>Click</button> */}

                {/* 2nd method */}
                {/* <button onClick={()=>{this.handleCLick("john")}}>Click</button> */}

                {/* 3rd method */}
                {/* <button onClick={this.handleClick}>Click</button> */}

                {/* 4th method */}
                {/* <button onClick={this.handleClick}>Click</button> */}

           
            </div>
        )
    }
}

export default EventBind