import React, { Component } from 'react'
import './index.css'

export default class Heraer extends Component {
    render() {
        return (
            <div className="todo-header">
                <input type="text" placeholder="请输入内容，按回车确认" />
            </div>
        )
    }
}
