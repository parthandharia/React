import React, { Component } from "react";

class StateProps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: "Header from state",
      content: "Content from state"
    };
  }
  render() {
    return (
      <div>
        <div>
          <Header headerProp={this.state.header} />
          <Content contentProp={this.state.content} />
        </div>
      </div>
    );
  }
}
class Header extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.headerProp}</h1>
      </div>
    );
  }
}
class Content extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.contentProp}</h1>
      </div>
    );
  }
}
export default StateProps;
