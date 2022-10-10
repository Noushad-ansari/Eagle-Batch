import React, { Component } from 'react'
import FuncComp from './FuncComp'
import PureCom from './PureCom'
import RegComp from './RegComp'

export class ParentComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "john"
        }
    }

    componentDidMount(){
    
        setInterval(() => {
            this.setState({
                name: "john"
            })
        }, 2000);
    }
    render() {
        console.log("Parent COmponent")
        return (
            <div>
                ParentComp
                {/* <PureCom name = {this.state.name}/> */}
                <FuncComp name = {this.state.name}/>
                <RegComp />
            </div>


        )
    }
}

export default ParentComp