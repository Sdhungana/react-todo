import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import ListItems from './ListComponent/ListItems';

library.add(faTrash);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: '',
        isDone: false
      }
    }
  }

  handleInput = (e) => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
        isDone: false
      }
    })
  }

  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: '',
          key: '',
          isDone: false
        }
      })
    }
  }

  deleteItem = (key) => {
    const filteredItems = this.state.items.filter(item => item.key !== key);
    this.setState({ items: filteredItems });
  }

  updateItem = (value, key) => {
    const items = this.state.items;
    items.forEach(item => {
      if (item.key === key) {
        item.text = value
      }
    })
    this.setState({ items: items })
  }

  checkItem = (key) => {
    const items = this.state.items;
    items.forEach(item => {
      if (item.key === key) {
        item.isDone = (item.isDone) ? false : true;
      }
    })
    this.setState({ items: items })
  }

  render() {
    return (
      <div className="App" onSubmit={this.addItem}>
        <header>
          <form id="to-do-form">
            <input type="text" placeholder="What needs to be done?"
              value={this.state.currentItem.text}
              onChange={(e) => this.handleInput(e)}
            />
            <button type="submit">Add</button>
          </form>
        </header>
        <ListItems
          items={this.state.items}
          deleteItem={this.deleteItem}
          updateItem={this.updateItem}
          checkItem={this.checkItem}
        />
      </div>

    )
  }
}

export default App;
