import React, { Component } from 'react'
import UpdatedComponent from "./HOC"

 class ClickCounter extends Component {

  
  render() {
    return (
      <div>
          <button onClick={this.props.handleCLick}>Count:  {this.props.count} </button>
          <h1>{this.props.name}</h1>
      </div>
    )
  }
}

export default UpdatedComponent(ClickCounter,5) 


