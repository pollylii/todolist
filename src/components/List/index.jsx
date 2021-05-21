import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {

    // 对接收的props进行类型、必要性的限制
    static propTypes = {
        todos:PropTypes.array.isRequired,
        updateTodo:PropTypes.func.isRequired
    }
    
    render() {
        const {todos,updateTodo} = this.props
        return (
            <ul className="todo-list">
              {
                  todos.map((todo) => {
                    //   return <Item key={todo.id} id={todo.id} name={todo.name}/>
                      return <Item key={todo.id} {...todo} updateTodo={updateTodo}/>
                  })
              }
            </ul>
        )
    }
}
