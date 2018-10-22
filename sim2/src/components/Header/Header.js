import React from "react"
import house from '../../media/houser_logo.png';
import './header.css';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';


export default function Header(props) {
    return (
        <header>
                <div>
                    <img src={house} alt="logo"/>
                    <Link to="/"><h1>Houser</h1></Link>
                </div>
                <div className="login">
                    <Login update={props.update}/>
                </div>
            
        </header>
    )
}
