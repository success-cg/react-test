import React, { Component } from 'react'

export default class TodoInput extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="input-wrap">
        <input type="text" name="" id="" value={ this.props.content } onKeyPress={ this.submit.bind(this) }
               onChange={ this.changeTitle.bind(this) }/>
      </div>
    )
  }

  submit(e) {
    if (e.key === 'Enter') {
      this.props.onSubmit(e)
    }
  }

  changeTitle(e) {
    this.props.onChange(e)
  }
}