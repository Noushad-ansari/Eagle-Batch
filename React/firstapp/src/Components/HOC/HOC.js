import React from "react"


const UpdateComponent = (OriginalComponent,increment) => {

    class NewComponent extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }

        handleCLick = () => {
            this.setState((prevState) => {
                return { count: prevState.count + increment }
            })
        }
        render() {
            console.log()
            console.log(this.props.age)
            return <OriginalComponent count = {this.state.count} handleCLick = {this.handleCLick} {...this.props} />
        }
    }

    return NewComponent
}

export default UpdateComponent