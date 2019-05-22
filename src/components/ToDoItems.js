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
        {this.state.allTasks.map((task, i) => {
          return (
            <article key={task + i + Math.random()} >
              <section className="page" >
                <p>{task}</p>
              </section>
              <br />
            </article>
          )
        })
        }
      </>
    )
  }
}

export default toDoItems;