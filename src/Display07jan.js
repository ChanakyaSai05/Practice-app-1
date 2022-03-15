import React from "react";
import Greet07jan from "./Greet07jan";

export default class Display07jan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
    console.log("constructor called");
  }

  inc = () => {
    let current = this.state.num;
    this.setState({ num: current + 1 });
  };

  componentDidMount() {
    console.log("Component did mount called");
    // this.id = setInterval(() => console.log("Hello"), 1000);
  }
  componentDidUpdate() {
    console.log("component did update called");
  }
  componentWillUnmount() {
    console.log("component will unmount called");
    // clearInterval(this.id);
  }
  dec = () => {
    let current = this.state.num;
    this.setState({ num: current - 1 });
  };

  render() {
    console.log("render called");
    return (
      <div>
        {this.state.num}

        <button onClick={this.inc}>Increment</button>
        <button onClick={this.dec}>Decrement</button>
        <Greet07jan count={this.state.num} />
      </div>
    );
  }
}
