import React from 'react';
import Title from '../Title';
import Description from '../Description';
import ChainsawmanImage from '../images/Chainsawman.jpg';
import ReadListButton from '../Button';

export default class Container extends React.Component {
  render() {
    const cardStyle = {
      border: "2px solid red",
      borderRadius: "15px",
      width: "40vw",
      textAlign: "center",
      margin: "12px auto auto",
      padding: "12px 0 24px 0",
      marginTop: "100px"
    }
    return (
        <>
      <div style={cardStyle}>
        <Title manga="Chainsaw Man" />
        <img src={ChainsawmanImage} alt="Chainsaw Man Manga Volume 1"/>
        <Description summary="Denji was a small-time devil hunter just trying to survive in a harsh world. After being killed on a job, he is revived by his pet devil-dog Pochita and becomes something new and dangerous—Chainsaw Man! Denji's a poor young man who'll do anything for money, even hunting down devils with his pet devil-dog Pochita." />
        <ReadListButton />
      </div>
      </>
    );
  }
}
