import React, { Component } from 'react'

class App extends Component {
  render() {

    return (
      <>
        <section>
          <h1>3UP</h1>
          <h2>3 Accomplishments of
          <span> Tuesday, May 16, 2019</span>
          </h2>
        </section>

        <article className="page">
          <p>Go to the bank and desposit found money</p>
        </article>
        <br />
        <article className="page">
          <p>Push a project to github and create an app</p>
        </article>

        <br />

        <article className="page">
          <p>Look up interview questions for sourcetoad interview </p>
        </article>
      </>
    )
  }
}

export default App
