import React, { Component } from 'react';

class toDoItems extends Component {
  constructor(props) {
    super(props)

    this.state = {
      allTasks: props.taskState
    }
  }


  updateState = () => {
    this.setState({
      allTasks: this.props.taskState
    })
  }

  componentDidMount() {
    this.updateState()
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.taskState !== prevState.allTasks) {
      return { allTasks: nextProps.taskState }
    }
    else return null
  }

  render() {
    return (
      <>
        {console.log(this.state.allTasks)}
        {this.state.allTasks.map((task, i) => {
          if (task !== "") {
            return (
              <>
                <article className="page" key={task + i + Math.random()} >
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