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
    "tasksOfTheDay": []
  }


  componentDidMount() {
    const getTodaysDate = new Date()
    this.setState({ todaysDate: getTodaysDate.toDateString() })

    setInterval(this.endOfDayTaskDelete, 1000)
  }

  callbackFromChild = (dataFromChild) => {
    this.setState({
      tasksOfTheDay: this.state.tasksOfTheDay.concat(dataFromChild)
    })
  }

  endOfDayTaskDelete = () => {
    let getTodaysDate = new Date()
    // console.log(getTodaysDate.toLocaleTimeString() === "12:32:50 AM")
    if (getTodaysDate.toLocaleTimeString() === "12:00:00 AM") {
      this.setState({ tasksOfTheDay: [] })
    }
    // if(getTodaysDate.toLocaleTimeString() === "11:59:00 AM")
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
        {this.state.tasksOfTheDay.length < 3 &&
          < CreateTask callbackFromChild={this.callbackFromChild} parentState={this.state.tasksOfTheDay} />
        }
        <ToDoItems taskState={this.state.tasksOfTheDay} />
        <Motivation />
      </>
    )
  }
}

export default App


          // [x] Create Todo card
          // [x] Troubleshoot unique key for task item error that wont go away
          // [x] Don't render paper if data is blank
          // [x] Submit New task item to state
          // [x] State recieves new item and repopulates list. 
          // [x] Clear text area after task submit
          // [x] Does not update state if it's an empty string
          // [x] If tasks for the day full, dont show add component
          // [x] at start of a new day, clear out task array. 
          // [x] randomly generate a new motivation.

          // [] onclick of paper, toggle taskDone.
          // [] Update/Delete modal for task papers


          // future>> [] Opt out of clear data in each day or pin some tasks