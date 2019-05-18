import React, { Component } from 'react';

class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFormChange = (e) => {
    this.setState({
      task: e.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            New Task :
            <textarea rows="3" cols="50" value={this.state.value} onChange={this.handleFormChange} placeholder="Today I need to..." />

          </label>
          <button><i className="fas fa-check"></i></button>
        </form>
      </>
    );
  }
}

export default CreateTask;