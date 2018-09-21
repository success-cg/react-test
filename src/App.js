import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom'

const a = 2
const b = 'hello'

// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import 'normalize.css'
import './css/reset.css'


const todoList = [
  { id: randomId(), title: '吃饭' },
  { id: randomId(), title: '睡觉' },
  { id: randomId(), title: '打豆豆' }
]

function randomId() {
  return Math.floor(Math.random() * 10000000)
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{ match.params.topicId }</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <NavLink to={ `${match.url}/rendering` }
                 activeStyle={ {
                   fontWeight: 'bold',
                   color: 'red'
                 } }>
          Rendering with React
        </NavLink>
      </li>
      <li>
        <Link to={ `${match.url}/components` }>
          Components
        </Link>
      </li>
      <li>
        <Link to={ `${match.url}/props-v-state` }>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={ `${match.path}/:topicId` } component={ Topic }/>
    <Route exact path={ match.path } render={ () => (
      <h3>Please select a topic.</h3>
    ) }/>
  </div>
)

const getConfirmation = (message, callback) => {
  const allowTransition = window.confirm(message)
  callback(allowTransition)
}

const BasicExample = () => (
  <Router getUserConfirmation={ getConfirmation }>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={ Home }/>
      <Route path="/about" component={ About }/>
      <Route path="/topics" component={ Topics }/>
    </div>
  </Router>
)

/*
 class App extends Component {
 constructor(props) {
 super(props)
 this.state = {
 newTodo: '',
 todoList: [
 { id: randomId(), title: '吃饭' },
 { id: randomId(), title: '睡觉' },
 { id: randomId(), title: '打豆豆' }
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
 */

export default BasicExample
