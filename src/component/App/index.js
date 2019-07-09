import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'
import About from '../About'
import Home from '../Home'
import Repos from "../Repos";

export default class App extends Component {
    render() {
        return (
            <div>
                <ul role="nav">
                    <li><NavLink to="/about" activeStyle={{ color: 'red' }}>About</NavLink></li>
                    <li><NavLink to="/repos" activeStyle={{ color: 'red' }}>Repos</NavLink></li>
                </ul>

                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/repos' component={Repos}/>
            </div>
        )
    }
}
