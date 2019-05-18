import React, { Component } from 'react'
import Motivation from './components/Motivation'
import ToDoItems from './components/ToDoItems'
import CreateTask from './components/CreateTask'

class App extends Component {
  render() {

    return (
      <>
        <header>
          <h1>3UP</h1>
          <h2>3 Accomplishments of
            <span> Tuesday, May 16, 2019</span>
          </h2>
        </header>
        <CreateTask />
        <ToDoItems />
        <Motivation />
      </>
    )
  }
}

export default App


// [] Create Todo card
// [] Update/Delete todo card