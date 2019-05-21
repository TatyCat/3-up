import React, { Component } from 'react';

class CreateTask extends Component {
  constructor(props) {
    super(props);

    this.state = { newTask: '' };
    // console.log(this.props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.callbackToParent = this.props.callbackToParent

  }

  handleFormChange = (e) => {
    this.setState({
      newTask: e.target.value,
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.parentState <= 3) {
      this.setState({
        newTask: this.state.newTask
      })
    }
    this.props.callbackFromChild(this.state.newTask)
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            New Task :
            <textarea rows="3" cols="50" onChange={this.handleFormChange} placeholder="Today I need to..." />
          </label>
          <button><i className="fas fa-check"></i></button>
        </form>
        {/* <CreateTask callbackToParent={this.callbackToParent} /> */}

      </>
    );
  }
}

export default CreateTask;