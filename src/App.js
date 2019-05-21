import React, { Component } from 'react'
import Motivation from './components/Motivation'
import ToDoItems from './components/ToDoItems'
import CreateTask from './components/CreateTask'

class App extends Component {
  constructor() {
    super()
    this.callbackFromChild = this.callbackFromChild.bind(this)
  }

  state = {
    "todaysDate": "",
    "tasksOfTheDay": ["Look at Cat-ipsum", "eop"]
  }

  componentDidMount() {
    let getTodaysDate = new Date()
    this.setState({ todaysDate: getTodaysDate.toDateString() })
  }

  callbackFromChild = (dataFromChild) => {
    this.setState({
      tasksOfTheDay: this.state.tasksOfTheDay.concat(dataFromChild)
    })

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
        <CreateTask callbackFromChild={this.callbackFromChild} parentState={this.state.tasksOfTheDay} />
        <ToDoItems taskState={this.state.tasksOfTheDay} />
        <Motivation />
      </>
    )
  }
}

export default App


          // [x] Create Todo card
          // [] Troubleshoot unique key for task item error that wont go away
          // [x] Don't render paper if data is blank
          // [x] Submit New task item to state
          // [x] State recieves new item and repopulates list. 
          // [x] Clear text area after task submit
          // [] Does not update state if it's an empty string



          // [] Update/Delete modal 