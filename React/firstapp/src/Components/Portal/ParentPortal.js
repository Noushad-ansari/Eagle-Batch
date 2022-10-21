import React, { Component } from 'react'
import Modal  from "./Modal"

export class ParentPortal extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showModal: false
        }
    }

    handleShowMessageClick = () => this.setState({ showModal: true })
    handleCloseModal = () => this.setState({ showModal: false })
    render() {
        return (
            <div style={{
                height: '100%',
                display: 'grid',
                justiContent: 'center',
                alignItems: 'center'
            }}>
                <div style={{
                    maxWidth: 400,
                    position: 'relative'
                }}>

                    <h1>Parent Portal</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa tempora ex porro fuga consequatur iste doloribus amet culpa aspernatur dolor nobis, officiis nam eos accusamus ipsum, voluptatem, magnam illo officia.</p>
                </div>

                <button onClick={this.handleShowMessageClick}>Open MY Modal</button>

                {this.state.showModal ? <Modal onClose = {this.handleCloseModal}>This is my secret Modal</Modal>: null}
            </div>
        )
    }
}

export default ParentPortal