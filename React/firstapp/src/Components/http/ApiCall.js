import React, { Component } from 'react'

class ApiCall extends Component {

    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then((response) => response.json())
    //         .then((userData) => this.setState({users:userData}));
    // }

    // http get Request
    handleUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((userData) => this.setState({ users: userData }));
    }
    render() {
        const users = this.state.users
        return (
            <div>
                Fetch/API Call

                {/* <button onClick={this.handleUsers}>Fetch User</button> */}
                {users.map((user) => (<div key={user.id}><h1> {user.name}</h1> <h2> {user.email}</h2></div>))}
            </div>
        )
    }
}

export default ApiCall