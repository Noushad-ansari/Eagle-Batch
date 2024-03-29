import React, { Component } from 'react'

export class Refs extends Component {

    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef()
    }

    // componentDidMount(){
    //     this.inputRef.current.focus()
    //     // console.log(this.inputRef.current.focus())
    // }
    
    handlFocus = () =>{
        this.inputRef.current.focus()
    }
  render() {
    return (
      <div className='App'>
        {this.props.children}
        <input type="text" ref ={this.inputRef} />
        <button onClick={this.handlFocus}>focusInput</button>
      </div>
    )
  }
}

export default Refs