import React from "react";

class App extends React.Component {
  render() {
    var i = 1;
    var myStyle = {
      fonssize: 100,
      color: "#FF0000"
    };

    return (
      <div>
        <div>
          <h1>{i === 1 ? "True" : "False"}</h1>
        </div>
        Hello world!!
        <h1 style={myStyle}>header</h1>
        <h2>content</h2>
        <p data-myattribute="somevalue"> this is the content !!</p>
        <h3>{1 + 1}</h3>
        {/*Multi line comment...*/}
      </div>
    );
  }
}
export default App;
