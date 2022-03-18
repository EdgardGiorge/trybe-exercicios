import React, { Component } from "react";

class HowTo extends Component {
  render() {
    const { ship } = this.props.match.params
    return (
      <span>{this.props.name}, meu nome é {ship}</span>
    )
  }

}

export default HowTo;