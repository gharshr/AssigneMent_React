import React, { Component } from 'react';
import Validator from '../Validator.js'
import './Register.css'

class Register extends Component {
    constructor() {
        super()
        this.updateName = this.updateName.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.register = this.register.bind(this);
        this.state = {
            displayMessageName : null
        }
    }
    
    render() {
        return (
            <form onSubmit={this.register} className={this.props.className}>
                <h1>Register Form</h1>
                <input type="text" placeholder="name" onChange={this.updateName}/>
                <p hidden={this.state.displayMessageName ? false : true}>{this.state.displayMessageName || null}</p>
                <br/>
                <input type="password" placeholder="password" onChange={this.updatePassword}/>
                <p hidden={this.state.displayMessagePassword ? false : true}>{this.state.displayMessagePassword || null}</p>
                <br/>
                <input type="email" placeholder="email" onChange={this.updateEmail}/>
                <br/>
                <button type="submit" disabled={(!this.state.displayMessageName && !this.state.displayMessagePassword) ? false : true}>Submit</button>
                <ol>
                    <li>All Fields are mandatory.</li>
                    <li>Include a proper domain after your email</li>
                    <li>For password, atleast one upercase, one lowercase and one digit is required</li>
                </ol>
            </form>
        )
    }

    updateName(e) {
        if(e.target.value.length < 3) {
            this.setState({
                displayMessageName : 'Name should have atleast 3 characters'
            })
        }
        else {
            this.setState({
                name : e.target.value,
                displayMessageName : null
            })
        }
    }

    updatePassword(e) {
        var regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,})$/
        var pass = e.target.value.toString();
        if(!regex.test(pass)) {
            this.setState({
                displayMessagePassword : "Password should contain One lowercase, one uppercase, one number and one special character, should be atleast 8 characters and no whitespaces"
            })
        }
        else {
            this.setState({
                password: e.target.value,
                displayMessagePassword: null
            })
        }
    }

    updateEmail(e) {
        this.setState({
            email : e.target.value
        })
    }

    register(e) {
        e.preventDefault()
        console.log(this.state)
        if(Object.keys(this.state).length !== 3) {
            alert('Please enter all the fields')
        }
        else 
            alert('suc')
    }
}

export default Register