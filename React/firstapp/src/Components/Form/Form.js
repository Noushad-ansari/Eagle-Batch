import React, { Component } from 'react'

export class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: ' ',
            email: ' ',
            message: ' ',
            city: 'mumbai'
        }
        //   this.handleName = this.handleName.bind(this);
    }


    // handleName = (e) => {

    //     this.setState({
    //         name: e.target.value
    //     })
    // }

    // handleEmail = (e) => {
    //     this.setState({
    //         email: e.target.value
    //     })
    // }

    // handleMessage = (e) => {
    //     this.setState({
    //         message: e.target.value
    //     })
    // }

    // handleCity = (e) => {
    //     this.setState({
    //         city: e.target.value
    //     })
    // }

 handleChange = (e) =>{
    
 }

    handleSubmit = (e) => {
        e.preventDefault()
        const {name,email,message,city} = this.state
        alert(`Name : ${name}, email : ${email}, message : ${message} city: ${city}`)
    }
    render() {
        const {name,email,message,city} = this.state
        return (
            <div className='App'>
                <form onSubmit={this.handleSubmit}>
                    <lable>
                        Name :
                        <input type="text" value={this.state.name} onChange={this.handleName} />
                    </lable>
                    <lable>
                        Email :
                        <input type="email" value={this.state.email} onChange={this.handleEmail} />
                    </lable>
                    <lable>
                        message :

                        <textarea value={this.state.message} onChange={this.handleMessage} />
                    </lable>
                    <br />
                    <lable>
                        city :

                        <select name="city" id="" value={this.state.city} onChange={this.handleCity}>
                            <option value="kota">kota</option>
                            <option value="jaipur">jaipur</option>
                            <option value="mumbai">mumbai</option>
                        </select>
                    </lable>
                    <br />
                    <input type="submit" />
                </form>

            </div>
        )
    }
}

export default Form