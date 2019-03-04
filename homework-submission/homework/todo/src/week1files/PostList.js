import React, { Component } from 'react'
import Item from './Item'


class Board extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                "id": 1,
                "description": "Get out of bed",
                "deadline": "2017-09-11",
                "done": true
                },
                {
                "id": 2,
                "description": "Brush teeth",
                "deadline": "2017-09-10",
                "done": false
                },
                {
                "id": 3,
                "description": "Eat breakfast",
                "deadline": "2017-09-09",
                "done": false
                }
            ]
        }
        this.eachItem = this.eachItem.bind(this)
    }
    eachItem(item, i) {
        return(
            <Note key={i}
            index={i}>
            {item.item}
            </Note>
        )
    }

    render() {
        return (
            <div className="board">
                {this.state.items.map(this.eachItem)}
            </div>
        )
    }
}
    componentDidMount() {
        this.setState({items: items})
    }
    

export default Board;