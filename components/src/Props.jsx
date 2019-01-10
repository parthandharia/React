import React, { Component } from "react";

class PropsEx extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>{this.props.header}</h1>
        <h2>{this.props.content}</h2>
      </div>
    );
  }
}
PropsEx.defaultProps = {
  header: "Header from props...",
  content: "Content from props..."
};
export default PropsEx;
