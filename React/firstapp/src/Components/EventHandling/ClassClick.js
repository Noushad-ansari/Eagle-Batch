import React, { Component } from 'react'

 class ClassClick extends Component {

   
   
handleClick(){
console.log("hello Class CLick")
}


  render() {
    return (
      <div>
        ClassClick
        <button onClick={this.handleClick}>Class CLick</button>
        </div>
    )
  }
}

export default ClassClick