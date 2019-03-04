import React from 'react';
import './App.js';


//Component that creates the list items//
class List extends React.Component {
    constructor() {
        super();
        this.state = { items: [] };
    }
    componentDidMount() {
        todoItems(items =>
            this.setState({ items: items}));
    }

    render() {
        return (
          <div>
          <ul>
            {this.state.items.map(c => (
              <li>{c.task}  :  {c.date}</li>
            ))}
          </ul>
          </div>
        );
      }
    }
    
    const todoItems = cb =>
      cb([
        { task: 'Get out of Bed', date: 'Wed Sep 13 2017' },
        { task: 'Brush teeth', date: 'Thu Sep 14 2017' },
        { task: 'Eat Breakfast', date: 'Fri Sep 15 2017' }

      ]);

    export default List;
    
      

    