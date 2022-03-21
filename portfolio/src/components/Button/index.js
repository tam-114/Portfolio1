import React from "react";

export default class ReadListButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  render() {
    const btnStyle = {
      borderRadius: "15px",
    };

    if (this.state.clicked) {
      return "Added to Read List!";
    }

    return (
      <div>
        <button
          style={btnStyle}
          onClick={() => this.setState({ clicked: true })}
        >
          Add to Read List
        </button>
      </div>
    );
  }
}
