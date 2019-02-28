import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import List from './List.js';
import PostList from './posts/PostList';
import PostData from './data/posts.json';
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
        <Message msg="Static List" />
        <List />
        <Message msg="Dynamic List" />
        <tr className = "table">
          <th className = "tHeading">Id</th>
          <th className = "tHeading">Description</th>
          <th className = "tHeading">Deadline</th>
        </tr>
        {PostData.map((postDetail, index)=>{
          return <tr className ="table">
                    <td className="tInput" >{postDetail.id}</td>
                    <td className="tInput">{postDetail.description}</td>
                    <td className="tInput">{postDetail.deadline}</td>
                </tr>
        })}
        <PostList  />
        </div>
      ); 
  } 
} 


ReactDOM.render(<App />, document.getElementById('thisIsWhereReactIsInjected'));



export default App;
