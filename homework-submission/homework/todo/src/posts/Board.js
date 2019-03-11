import React, { Component } from 'react'
import Item from './Item'




class Board extends Component {
    constructor(props){
        super(props)
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
        this.add = this.add.bind(this)
        this.eachItem = this.eachItem.bind(this)
        this.remove = this.remove.bind(this)
        this.nextId= this.nextId.bind(this)
        this.update = this.update.bind(this)
    }

    add(_newText){
        console.log('adding new note')
        this.setState(prevState => ({
            items: [
                ...prevState.items,
                {
                    "id": this.nextId(),
                    "description": _newText,
                    "deadline": ""
                }
            ]
        }))
    }
    nextId() {
    this.uniqueId = this.uniqueId || 4
    return this.uniqueId++
    }


    remove(id) {
        console.log('removing item:', id)
        this.setState(prevState => ({
            items: prevState.items.filter(item => item.id!==id)
        }))
    }

    update(_newText, id) {
        console.log('updating item at index', id, _newText)
        this.setState(prevState => ({
            items: prevState.items.map(
                description => (description.id !== id) ? description: {...description, description: _newText},
                
            )
        }))
    }
   
    eachItem(items, i) {
        return(
            <Item key={items.id} index={items.id} onRemove={this.remove} onChange={this.update}>
            Item: {items.id}<br></br>
            {items.description}<br></br>
            Deadline: {items.deadline}
            </Item>
        )
    }

    render() {
        return (
            <div className="board">
                <button className= 'add' onClick={this.add.bind(null, "Click edit to add your item")}
                    id="add">Add</button>
                {this.state.items.map(this.eachItem)}
            </div>
        )
    }
}
    

export default Board;