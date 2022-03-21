import React from 'react'

export default class NavItem extends React.Component {
    render() {
        const navStyle = {
          position: "absolute",
          width: "100%",
          textAlign: "left",
          backgroundColor: "#f2f2f2",
          top: "0",
          color: "#4d0000",
          marginBottom: "10px",
        };
        return (
            <div style={navStyle}>
                <h1>MangaList</h1>
            </div>
        );
    }
}