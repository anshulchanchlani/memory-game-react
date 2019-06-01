/* This is the Game Page which hosts the logic to render different cards and the logic behind matching cards.
*/

import React, { useState, Fragment } from "react";
import FlipCard from "../../components/FlipCard";
import Timer from "../../components/Timer";
import {flipCardTags} from '../../utils'
import "./index.less";

const resetCards =(cards)=>{
   cards.forEach((card)=>{card.isMatched=false})
}
const multipleFlipCardTags = flipCardTags.concat(flipCardTags).sort(()=>Math.random()-0.5);


const toggleCardClass = (id = "") => {
  document.getElementById(id).classList.toggle("flipped");
};

const changeMatchedCardAppearance = (tags = []) => {
  tags.forEach(item =>
    document.getElementById(item.id).classList.toggle("matched")
  );
};

const renderFlipCards = (cards, handler) => {
  return cards.map((card, index) => {
    return (
      <li key={index}>
        <FlipCard
          className="flip-card"
          card={card}
          id={card.tag + index}
          onClick={handler}
        />
      </li>
    );
  });
};

let openTags = [],count=0;
const HomePage = ({resetGame}) => {
  const [openCards, setOpenCards] = useState(0);

  const flip = (id, card) => {
    //There can only be two open tags at a time. This makes sure that user cannot have 3 cards open at a time.
    if (openTags.length <= 1) {
      if (openTags.every(item => item.id !== id)) {
        openTags.push({ id, card });
        setOpenCards(openCards + 1);
        if (!card.isMatched) {
          toggleCardClass(id);
        }
      }

      if (openCards === 1) {
        setTimeout(() => {
          if (!areSameTagsOpen(openTags)) {
            openTags.forEach(cardItem => {
              toggleCardClass(cardItem.id);
            });
          } else {
            count +=2;
            //Once all cards have been matched, we need to do finishing tasks and reset the game.
            if(count===multipleFlipCardTags.length){
                setOpenCards(0)
                resetCards(multipleFlipCardTags)
                count=0
                resetGame();
            }else{
            keepCardsOpen(openTags, multipleFlipCardTags);

            //change the card appearance and disable it for further clicks once two cards have been matched.
            changeMatchedCardAppearance(openTags);
            }
          }
          openTags = [];
          setOpenCards(0);
        }, 1000);
      }
    }
  };

  return (
    <Fragment>
      <ul id="card-container" className="flexbox">
        { renderFlipCards(multipleFlipCardTags, flip)}
      </ul>
    </Fragment>
  );
};

const areSameTagsOpen = (tags = []) => {
  if (tags.length < 2) return false;
  return tags[0].card.tag === tags[1].card.tag;
};

const keepCardsOpen = (tags = [], multipleFlipCardTags = []) => {
  if (tags.length === 0 || multipleFlipCardTags.length === 0) return false;
  multipleFlipCardTags.forEach(card => {
    if (card.tag === tags[0].card.tag) {
      card.isMatched = true;
    }
  });
};

const incrementCounter = (counter=0) => counter +1;

export default HomePage;
