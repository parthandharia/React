import React, { Component } from "react";
import PropTypes from "prop-types";

class ValidatingProps extends Component {
  render() {
    return (
      <div>
        <h3>Array: {this.props.propArray}</h3>
        <h3>Bool: {this.props.propBool ? "True..." : "False..."}</h3>
        <h3>Func: {this.props.propFunc(3)}</h3>
        <h3>Number: {this.props.propNumber}</h3>
        <h3>String: {this.props.propString}</h3>
        <h3>Object: {this.props.propObject.objectName1}</h3>
        <h3>Object: {this.props.propObject.objectName2}</h3>
        <h3>Object: {this.props.propObject.objectName3}</h3>
      </div>
    );
  }
}
ValidatingProps.defaultProps = {
  propArray: [1, 2, 3, 4, 5, 6],
  propBools: true,
  propFunc: function(e) {
    return e;
  },
  propNumber: 1,
  propString: "Parth",
  propObject: {
    objectName1: "objectValue1",
    objectName2: "objectValue2",
    objectName3: "objectValue3"
  }
};

ValidatingProps.propTypes = {
  propArray: PropTypes.array.isRequired,
  propBool: PropTypes.bool.isRequired,
  propFunc: PropTypes.func,
  propNumber: PropTypes.number,
  propString: PropTypes.string,
  propObject: PropTypes.object
};

export default ValidatingProps;
