import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PostList from './posts/PostList';
import './App.css';

//component that populates h2 titles to the Todo App//
const Message = props => <h2>{props.msg}</h2>


//main component//
class App extends Component { 
  state = {
    isDone: true
  }

  render() { 
      return (
        <div className = "App">
        <h1>To Do App</h1>
        <Message msg="Dynamic List" />
        <PostList  />
        </div>
      ); 
  } 
} 


ReactDOM.render(<App />, document.getElementById('thisIsWhereReactIsInjected'));



export default App;
