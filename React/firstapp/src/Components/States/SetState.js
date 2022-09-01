import React, { Component } from 'react'

export class SetState extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementByThree =()=>{
        this.increment()
        this.increment()
        this.increment()
    }

    increment=() =>{
        // this.state.count = this.state.count + 1
        // console.log(this.state.count)
        // this.setState({
        //     count : this.state.count + 1
        // },()=>{ 
        //     console.log(this.state.count)
        // })
        // console.log(this.state.count)

        this.setState((prevState)=>({
            count : prevState.count + 1
        }))
    }

   
    render() {
        return (
            <div className='App'>
                <h1>Count :{this.state.count}</h1>
                <br />
                <button onClick={this.increment}>increment</button>
                <br />
                <button onClick={this.incrementByThree}>increment By 3</button>
            </div>
        )
    }
}

export default SetState