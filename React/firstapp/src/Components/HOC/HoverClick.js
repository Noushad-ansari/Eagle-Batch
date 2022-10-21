import React, { Component } from 'react'
import UpdatedComponent from "./HOC"

export class HoverCouter extends Component {
   
  render() {
    return (
      <div>
             <h1 onMouseOver={this.props.handleCLick}>Hover Me  {this.props.count} </h1>
             <h5>{this.props.name}</h5>
      </div>
    )
  }
}

export default UpdatedComponent(HoverCouter,2) 