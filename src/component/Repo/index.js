import React, { Component } from 'react'

// 通过this.props.match 获取路由信息
export default class Repo extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.match.params.repoName}</h2>
            </div>
        )
    }
}
