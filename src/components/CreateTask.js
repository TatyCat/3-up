import React, { Component } from 'react';

class CreateTask extends Component {
  constructor(props) {
    super(props);

    this.state = { newTask: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFormChange = (e) => {
    this.setState({
      newTask: e.target.value,
    })
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.props.parentState.length < 3 && this.state.newTask !== "") {
      this.props.callbackFromChild(this.state.newTask)
    }
    if (this.props.parentState.length > 2) {
      alert("Too much sauce. You've hit the max for the day.")
    }
    this.setState({
      newTask: ""
    })

  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            New Task :
            <textarea rows="3" cols="50" onChange={this.handleFormChange} value={this.state.newTask} placeholder="Today I need to..." />
          </label>
          <button><i className="fas fa-check"></i></button>
        </form>
      </>
    );
  }
}

export default CreateTask;