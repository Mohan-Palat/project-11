import React, { Component } from "react";

class CountryFlag extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <img src={this.props.baseFlag}></img>
        <img src={this.props.compareFlag}></img>
      </div>
    );
  }
}

export default CountryFlag;
