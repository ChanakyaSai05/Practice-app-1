import React from "react";
import "./Style.css";
import Screen from "./Screen";

export default class ButtonComponents extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="buttons">
        <div>
          <button className="op">(</button>
          <button className="op">)</button>
          <button className="op">%</button>
          <button className="op">CE</button>
        </div>
        <div>
          <button className="nu" onClick={this.calcNum(7)}>
            7
          </button>
          <button className="nu" onClick={this.calcNum}>
            8
          </button>
          <button className="nu" onClick={this.calcNum}>
            9
          </button>
          <button className="op">/</button>
        </div>
        <div>
          <button className="nu" onClick={this.calcNum}>
            4
          </button>
          <button className="nu" onClick={this.calcNum}>
            5
          </button>
          <button className="nu" onClick={this.calcNum}>
            6
          </button>
          <button className="op">*</button>
        </div>
        <div>
          <button className="nu" onClick={this.calcNum}>
            1
          </button>
          <button className="nu" onClick={this.calcNum}>
            2
          </button>
          <button className="nu" onClick={this.calcNum}>
            3
          </button>
          <button className="op" onClick={this.calcNum}>
            -
          </button>
        </div>
        <div>
          <button className="nu" onClick={this.calcNum}>
            0
          </button>
          <button className="nu">.</button>
          <button
            className="nu"
            style={{ backgroundColor: "blue", color: "white" }}
          >
            =
          </button>
          <button className="op">+</button>
        </div>
      </div>
    );
  }
}
