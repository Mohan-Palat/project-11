import React, { Component } from "react";

class CountryFlag extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <img src={this.props.flag}></img>
      </div>
    );
  }
}

export default CountryFlag;
