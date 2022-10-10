import React, { PureComponent } from 'react'

export class PureCom extends PureComponent {
  render() {
    console.log("****Pure Component****")
    return (
      <div>
        PureCom
        {this.props.name}
        </div>
    )
  }
}

export default PureCom