import React from "react"
import house from '../../media/houser_logo.png';
import './header.css';
import { Link } from 'react-router-dom';
export default function Header(props) {
    const login = !props.username ? <Link to='/'><button>Login</button></Link> :
                <h2>Welcome back, {props.username}</h2>
    return (
        <header>
            <div>
                <img src={house} alt="logo"/>
                <Link to="/"><h1>Houser</h1></Link>
            </div>
            <div className="login">
                {login}
            </div>
        </header>
    )
}
