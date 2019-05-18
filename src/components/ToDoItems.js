import React, { Component } from 'react';

class toDoItems extends Component {
  render() {
    return (
      <>
        <article className="page">
          <p>Go to the bank and desposit found money</p>
        </article>
        <br />
        <article className="page">
          <p>Push a project to github and create an app</p>
        </article>
        <br />
        <article className="page done">
          <p>Look up interview questions for sourcetoad interview </p>
        </article>
      </>
    );
  }
}

export default toDoItems;