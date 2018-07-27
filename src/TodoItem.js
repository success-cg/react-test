import React, { Component } from 'react'

export default class TodoItem extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>{ this.props.todo.title }</div>
    )
  }
}
