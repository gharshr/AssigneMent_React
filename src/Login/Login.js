import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import './Login.css';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';

class Login extends Component {
    constructor() {
        super();
        this.updateName = this.updateName.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.checkCredentials = this.checkCredentials.bind(this)
        this.state = {
            redirect : null
        }
    }

    render() {
        if(this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <form onSubmit={this.checkCredentials} className={this.props.className}>
                <h1>Login Form</h1>
                <input type="text" placeholder="name" onChange={this.updateName} minLength="5"/>
                <br/>
                <input type="password" placeholder="password" onChange={this.updatePassword}/>
                <br/>
                <button type="submit" disabled={(!this.state.name || !this.state.password)}>Submit</button><br/>
                All Fields are mandatory
            </form>
        )
    }

    updateName(e) {
        this.setState({
            name: e.target.value
        })
    }

    updatePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    checkCredentials() {
        var body = Object.create(null)
        body.name = this.state.name;
        body.password = this.state.password;
        fetch('/verifyDetails',{
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'content-type': 'application/json',
            }
        }).then(response => {
            console.log(response)
            response.json()
        })
        .then(data => { 
            console.log('Success:', data);
            if(data.ValidOrNot === false) {
                this.setState({
                    redirect : '/Register'
                })
            }
            else 
                this.setState({
                    redirect : '/Dashboard'
                })
        })
        .catch((error) => {
            console.log(error)
            console.error('Error:',error);
        })
    }
}

export default Login