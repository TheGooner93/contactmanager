import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: ""
  };
  componentDidMount() {
    console.log("did mount!");
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data => this.setState({ title: data.title, body: data.body }));
  }
  //   componentWillMount() {
  //     console.log("Will mount!");
  //   }
  //   componentWillUpdate() {
  //     console.log("Will update!");
  //   }
  //   componentDidUpdate() {
  //     console.log("Did update!");
  //   }

  //   componentWillReceiveProps(nextProps, nextState) {
  //     console.log("Will receive props!");
  //   }

  //   static getDerivedStateFromProps(nextProps, prevState) {
  //     return null;
  //   }

  //   getSnapshotBeforeUpdate(prevProps, prevState) {
  //     console.log("Get snapshot before update!");
  //   }

  render() {
    console.log("render");
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
