import React, { Component } from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import 'normalize.css'
import './css/reset.css'

function randomId() {
  return Math.floor(Math.random() * 10000000)
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newTodo: '',
      todoList: [
        { id: randomId(), title: '吃饭12' },
        { id: randomId(), title: '睡觉12' },
        { id: randomId(), title: '打豆豆12' }
      ]
    }
  }


  render() {
    let todos = this.state.todoList.map((item, index) => {
      return (
        <li key={ index }>
          <TodoItem todo={ item }/>
        </li>
      )
    })
    return (
      <div>
        <h1>待办事项</h1>
        <TodoInput content={ this.state.newTodo } onSubmit={ this.addTodo.bind(this) } onChange={this.resetTitle.bind(this)}/>
        <ol>
          { todos }
        </ol>
      </div>
    );
  }

  addTodo(e) {
    const { todoList } = this.state
    todoList.push({
      id: randomId(),
      title: e.target.value,
      status: null,
      deleted: false
    })

    this.setState({
      newTodo: '',
      todoList
    })
  }

  resetTitle(e) {
    this.setState({
      newTodo: e.target.value
    })
  }

}

export { App };
