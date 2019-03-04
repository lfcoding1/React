import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Board from './posts/Board';
import './App.css';

//component that populates h2 titles to the Todo App//
const Message = props => <h2>{props.msg}</h2>



//main component//
class App extends Component { 
  

  render() { 
      return (
        <div className = "App">
        <h1>To Do App</h1>
        <Message msg="Dynamic List" />
        <Board  />
        </div>
      ); 
  } 
} 


ReactDOM.render(<App />, document.getElementById('thisIsWhereReactIsInjected'));



export default App;
