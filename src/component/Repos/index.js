import React, { Component } from 'react'
import { Route, NavLink, withRouter } from 'react-router-dom'
import Repo from '../Repo'

// 通过使用this.props.history.push 跳转
// 默认情况下必须是经过路由匹配渲染的组件才存在this.props 使用withRouter给组件传入history、location、match对象
class Repos extends Component {

    handleSubmit = (e) => {
        e.preventDefault()
        const userName = e.target.elements[0].value
        const repo = e.target.elements[1].value
        const path = `/repos/${userName}/${repo}`
        console.log(path)
        this.props.history.push(path)
    }

    render() {
        return (
            <div>
                <h2>Repos</h2>

                <ul>
                    <li><NavLink to="/repos/reactjs/react-router" activeStyle={{ color: 'red' }}>React Router</NavLink></li>
                    <li><NavLink to="/repos/facebook/react" activeStyle={{ color: 'red' }}>React</NavLink></li>
                    <li>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" placeholder="userName"/> / {' '}
                            <input type="text" placeholder="repo"/>{' '}
                            <button type="submit">Go</button>
                        </form>
                    </li>
                </ul>

                <Route path='/repos/:userName/:repoName' component={Repo} />
            </div>
        )
    }
}

export default withRouter(Repos)
