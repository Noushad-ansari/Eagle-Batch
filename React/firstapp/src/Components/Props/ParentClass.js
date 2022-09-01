import React, { Component } from 'react'

import ChildClass from './ChildClass'

 class ParentClass extends Component {
  render() {
    return (
      <div>ParentClass
        <ChildClass name ="john" age = {25} address = "kota Rajasthan" />
      </div>
      
    )
  }
}

export default ParentClass