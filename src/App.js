import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  // 初始化状态
  state = {todos:[
    {id:'001',name:'吃饭',done:true},
    {id:'002',name:'睡觉',done:true},
    {id:'003',name:'打豆豆',done:false},
  ]}
  render() {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header />
          <List todos={todos}/>
          <Footer />
        </div>
      </div>
    );
  }
}

