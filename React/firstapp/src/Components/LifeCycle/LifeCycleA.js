import React, { Component } from 'react'

export class LifeCycleA extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "john"
        }
        console.log("LifeCycle A - Constructor")
    }

    static getDerivedStateFromProps() {
        console.log("LifeCycle A - getDerivedStateFromProps")
        return null
    }
    
    shouldComponentUpdate(nextProps,nextState){
        console.log("LifeCycle A - shouldComponentUpdate")
       return true
    }

    getSnapshotBeforeUpdate(prevProps,preState){
        console.log("LifeCycle A - getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate(preProps,prevState,snapShopt){
        console.log("LifeCycle A - componentDidUpdate")
    }
    componentDidMount() {
        console.log("LifeCycle A - componentDidMount")
        
    }

    handleName =()=>{
        this.setState({
            name:"john"
        })
    }
    render() {
        console.log("LifeCycle A - Render")
        return (
            <div>
                <h1>LifeCycleA</h1>
                <button onClick = {this.handleName}>chagneName</button>
            </div>
        )
    }
}

export default LifeCycleA