import React, { Component } from 'react';

class toDoItems extends Component {
  constructor(props) {
    super(props)
    const tasksList = this.props

    this.updateState = this.updateState.bind(this)
    this.state = {
      allTasks: []
    }
  }

  updateState() {
    this.setState({
      allTasks: this.props.taskState
    })
  }

  componentDidMount() {
    this.updateState()
  }

  render() {
    return (
      <>
        {this.state.allTasks.map((task, i) => {
          if (task !== "") {
            return (
              <>
                <article className="page" key={`3up${i}`} >
                  <p > {task}</p>
                </article>
                <br />
              </>
            )
          }
        })
        }
      </>
    )
  }
}

export default toDoItems;