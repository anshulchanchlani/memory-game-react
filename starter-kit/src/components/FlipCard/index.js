import React from "react";
import "./index.less";
import {getImage,getStandardTemplateImage} from '../../utils'
const FlipCard = ({card,id,onClick}) => {
  return (
    <section className="container">
      <div className="card" id={id} onClick={(e)=> !card.isMatched?onClick(id,card):e.preventDefault()}>
        <div className="front"><img src={getStandardTemplateImage()} alt="Image Hidden"/></div>
        <div className="back"><img src={getImage(card.tag)} alt={card.tag}/></div>
      </div>
    </section>
  );
};


export default FlipCard;
