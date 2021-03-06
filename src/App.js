import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

//What state is: some object; a javascript of object with properties that we can access at any point inside of our class
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
      title: ''
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value, title: e.target.value })
  }

  render() {
    const { monsters, searchField,  } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className='App'>
        <h1> Monsters Rolodex </h1>
        {/* <input 
          type='search'
          placeholder='search monsters' 
          onChange={e => this.setState({ searchField: e.target.value })}
        /> */}
        <SearchBox
         placeholder='search monsters'
         handleChange={ this.handleChange }
         />
        <CardList monsters={ filteredMonsters } />
      </div>
    )
  }
}

export default App;