import React, { Component } from 'react';

class toDoItems extends Component {
  constructor(props) {
    super(props)
    const tasksList = this.props

    this.updateState = this.updateState.bind(this)
    this.state = {
      allTasks: {}
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
        {Object.keys(this.state.allTasks).map((task, i) => {
          return (
            <>
              <article className="page" key={`3up${i}`} >
                <p > {this.state.allTasks[task]}</p>
              </article>
              <br />
            </>
          )
        })
        }

      </>
    );
  }
}

export default toDoItems;



      //   <article className="page">
      //     <p>{this.state.allTasks.one
      //     }</p>
      //   </article>
      //   <br />
      //   <article className="page">
      //     <p>Push a project to github and create an app</p>
      //   </article>
      //   <br />
      //   <article className="page done">
      //     <p>Look up interview questions for sourcetoad interview </p>
      //   </article>