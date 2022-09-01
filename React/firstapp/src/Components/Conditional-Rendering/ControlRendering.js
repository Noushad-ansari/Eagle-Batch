import React, { Component } from 'react'

export class ControlRendering extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoagged: true
        }
    }

    render() {

        // 4th method
        return this.state.isLoagged && <h1>WElcome john</h1>

            // 3rd method
           return this.state.isLoagged ? <h1>Welcom john</h1> : <h1>Welcome Guest</h1>

        // 2nd method
        // let message
        // if (this.state.isLoagged) {
        //     message = (<h1>Welcome John</h1>)
        // } else {
        //     message = (<h1>Welcome guest</h1>)
        // }
        // return message

        // 1st method
        // if (this.state.isLoagged) {
        //     return (
        //         <div>
        //             <h1>WelCome John</h1>
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             <h1>WelCome Guest</h1>
        //         </div>
        //     )
        // }


    }
}

export default ControlRendering