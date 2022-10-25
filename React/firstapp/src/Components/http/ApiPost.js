import React, { Component } from 'react'

export class ApiPost extends Component {

    constructor(props) {
        super(props)

        this.state = {
            title: '',
            body: '',
            userId: '',
        }
    }

    // componentDidMount() {
    //     console.log(this.state)
    //     fetch('https://jsonplaceholder.typicode.com/posts', {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             title: this.state.title,
    //             body: this.state.body,
    //             userId: this.state.userId,
    //         }),
    //         headers: {
    //             'Content-type': 'application/json; charset=UTF-8',
    //         },
    //     })
    //         .then((response) => response.json())
    //         .then((json) => console.log(json));
    // }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        const { title, body, userId } = this.state
        e.preventDefault()
        console.log("submited data")
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title,
                body,
                userId,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    render() {
        const { title, body, userId } = this.state
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <input type="text" name='title' placeholder='name' value={title} onChange={this.handleChange} />
                    <input type="text" name='body' placeholder='body' value={body} onChange={this.handleChange} />
                    <input type="text" name='userId' placeholder='userId' value={userId} onChange={this.handleChange} />
                    <button>submit</button>
                </form>
            </div>

        )
    }
}

export default ApiPost