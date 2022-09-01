import React, { Component } from 'react'

 class ChildClass extends Component {
  render() {
    const{name,age,address} = this.props
    return (
      <div>
       {/* ChildClass {this.props.name}
       {this.props.age}
       {this.props.address} */}


       Child Class 
       {name} {age } {address}
      </div>
    )
  }
}

export default ChildClass