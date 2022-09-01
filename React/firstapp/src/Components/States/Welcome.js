import React, { Component } from 'react'

 class Welcome extends Component {
  render() {
    return (
      <div>Welcome
        Component {this.props.myMessage}
      </div>
    )
  }
}

export default Welcome