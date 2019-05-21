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
    console.log(this.state)


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
      </>
    );
  }
}

export default CreateTask;