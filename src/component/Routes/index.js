import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from '../App'
import About from '../About'
import Repos from '../Repos'
import Home from '../Home'

export default function Routes () {
    return (
        <Router>
            <Route path='/' component={App}>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/repos' component={Repos}/>
            </Route>
        </Router>
    )
}

