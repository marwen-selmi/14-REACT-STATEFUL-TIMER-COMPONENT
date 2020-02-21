import React, { Component } from "react";

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      ms: 0,
      ss: 0,
      mm: 0,
      hh: 0,
      start: false
    };
    setInterval(() => {
      if (this.state.start) {
        this.setState({
          ms: this.state.ms + 1000,
          hh: parseInt(this.state.ms / 3600000),
          mm: parseInt((this.state.ms % 3600000) / 60000),
          ss: parseInt(((this.state.ms % 3600000) % 60000) / 1000)
        });
      }
    }, 1000);
  }

  clicked = () => {
    this.setState({ start: !this.state.start });
  };
  reset = () => {
    this.setState({
      ms: 0,
      ss: 0,
      mm: 0,
      hh: 0,
      start: false
    });
  };
  render() {
    return (
      <div class="container">
        <div className="row">
          <div className="col-sm-1">
            {String(this.state.hh).padStart(2, "0")}
          </div>
          <div className="col-sm-1">
            {String(this.state.mm).padStart(2, "0")}
          </div>
          <div className="col-sm-1">
            {String(this.state.ss).padStart(2, "0")}
          </div>
        </div>

        <span>Hour </span>
        <span> Minute </span>
        <span> Second</span>
        <br />
        <div className="twobutton">
          <button className="start" onClick={this.clicked}>
            {this.state.start ? "Pause" : "start"}
          </button>
          <button className="reset" onClick={this.reset}>
            reset
          </button>
        </div>
      </div>
    );
  }
}
export default Timer;
