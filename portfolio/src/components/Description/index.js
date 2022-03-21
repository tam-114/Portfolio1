import React from "react";

export default class Description extends React.Component {
  render() {
    const pStyle = {
      color: "#404040",
    };
    return (
        <p style={pStyle}>{this.props.summary}</p>
    );
  }
}
