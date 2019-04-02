import React, { Component } from "react";
import axios from "axios";
import PostList from "./PostList";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      inputEx: ""
    };
  }

  componentWillMount() {
    axios.get(" http://localhost:3000/posts").then(response => {
      this.setState({ posts: response.data });
    });
  }

  handleChange = event => {
    console.log({ evento: event.target.value });
    this.setState({ inputEx: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    alert(this.state.inputEx);
  };

  render() {
    return (
      <div className="App">
        alou
        <PostList posts={this.state.posts} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} placeholder="insira o texto" />
          <button type="submit">Ana</button>
        </form>
      </div>
    );
  }
}

export default App;
