import React, { Component } from "react"
import axios from 'axios';
import { connect } from 'react-redux';
import { toggleDashboard } from '../../ducks/reducer'; 

class Login extends Component {
    constructor(){
        super();
        this.state = {
            name : '',
            password : '',
            login : false
        }
    }

    componentDidMount() {
        axios.get('/api/user')
        .then(res => {
            console.log('I AM HERE', res.data);
            if (res.data.username) {
                this.setState({
                    name : res.data.username,
                    password : res.data.password,
                    login : true
                });
            }
        })
    }

    login = (name, password) => {
        console.log(name, password);
        axios.post('/api/login', {username: name, password})
        .then(res => {
            if (res.status === 200){
                this.setState({
                    login : true
                }, this.props.toggleDashboard)
            }
        });
    }

    updateName = (name) => {
        this.setState({
            name
        })
    }

    updatePassword = (password) => {
        this.setState({
            password
        })
    }

    render() {
        const { name, password } = this.state;
        return (
            (this.state.login) ? <h3>Welcome, {this.state.name}</h3> :
                <div>
                    <input value={this.state.name} onChange={e => this.updateName(e.target.value)}/>
                    <input value={this.state.password} onChange={e => this.updatePassword(e.target.value)}/>
                    <button onClick={() => this.login(name, password)}>Login</button>
                </div>
        )
    }
}

export default connect(null, {toggleDashboard})(Login);