import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'

export default class Heraer extends Component {

    // 对接收的props进行类型、必要性的限制
    static PropTypes = {
        addTodo:PropTypes.func.isRequired
    }
    // 键盘事件的回调
    handleKeyUp = (event)=>{
        // 解构赋值获取 keyCode,target 
        const { keyCode,target } = event
        // 判断是否回车按键
        if(keyCode !== 13) return
        // 添加的todo名字不能为空
        if(target.value.trim() === ''){
            alert('请输入内容')
            return
        }
        // 准备好一个todoObj对象
        const todoObj = {id:nanoid(),name:target.value,done:false}
        // 将todoObj传递给App
        this.props.addTodo(todoObj)
        // 清空输入
        target.value = ''
    }
    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入内容，按回车确认" />
            </div>
        )
    }
}
