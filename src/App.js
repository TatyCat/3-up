import React, { Component } from 'react'
import Motivation from './components/Motivation'
import ToDoItems from './components/ToDoItems'
import CreateTask from './components/CreateTask'

class App extends Component {
  state = {
    todaysDate: "",
  }

  componentDidMount() {
    let getTodaysDate = new Date()
    this.setState({ todaysDate: getTodaysDate.toDateString() })

  }

  render() {

    return (
      <>
        <header>
          <h1>3UP</h1>
          <h2>3 Accomplishments of
            <span> {this.state.todaysDate}</span>
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


// [x] Create Todo card
// [] Update/Delete todo card