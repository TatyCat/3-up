import React, { Component } from 'react'
import Motivation from './components/Motivation'
import ToDoItems from './components/ToDoItems'
import CreateTask from './components/CreateTask'

class App extends Component {
  state = {
    "todaysDate": "",
    "tasksOfTheDay": ["Look at Cat-ipsum", "eop"]
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
          <h2>Accomplishments of
            <span> {this.state.todaysDate}</span>
          </h2>
        </header>
        <CreateTask parentState={this.state.tasksOfTheDay} />
        <ToDoItems taskState={this.state.tasksOfTheDay} />
        <Motivation />
      </>
    )
  }
}

export default App


          // [x] Create Todo card
          // [] Troubleshoot unique key for task item
          // [] Dont render paper if data is blank
          // [] Submit New task item
          // [] Update/Delete modal
