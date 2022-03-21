import React from 'react'
// export default function Example(props) {
//     return <p>My favorite show is {props.show}, and my favorite character from it is {props.character}.</p>;
// }

export default class Title extends React.Component {
    render() {
        const hStyle = {
          color: "#333333",
          
        };
        return (
            <h1 style={hStyle}>{this.props.manga}</h1>
         
        );
    }
}