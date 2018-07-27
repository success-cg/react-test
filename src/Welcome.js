import React, { Component } from 'react'

class Welcome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      test: 1
    }
    // this.setState({
    //   date: new Date(),
    //   test: 'constructor'
    // })
  }

  componentWillMount() {
    console.log('挂载之前');
    this.setState({
      date: new Date(),
      test: 'componentWillMount'
    })
  }

  render() {
    console.log('开始渲染');
    return (
      <div>
        <h1>Welcome React, { this.props.name }</h1>
        <p>It's { this.state.date.toLocaleTimeString() }</p>
        <h1>{ this.state.test }</h1>
      </div>
    )
  }

  componentDidMount() {
    console.log('组件挂载完毕');
    this.setState({
      date: new Date(),
      test: 'componentDidMount'
    })
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    console.log('组件将要接收props');
    // this.setState({
    //   date: new Date(),
    //   test: 'componentWillReceiveProps'
    // })
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('是否要更新');
    console.log(nextProps, nextState);
    // this.setState({
    //   date: new Date(),
    //   test: 'shouldComponentUpdate'
    // })
    return true
  }

  componentWillUpdate() {
    console.log('将要更新');
    // this.setState({
    //   date: new Date(),
    //   test: 'componentWillUpdate'
    // })
  }

  componentDidUpdate() {
    console.log('更新完毕');
    // this.setState({
    //   date: new Date(),
    //   test: 'componentDidUpdate'
    // })
  }

  componentWillUnmount() {
    console.log('组件要被移除啦');
  }
}

export default Welcome
