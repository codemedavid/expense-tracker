// src/components/CardStack.jsx

import React, { useState } from 'react';

const cardData = [
  { id: 1, content: 'Weekly', bgColor: 'bg-red-500' },
  { id: 2, content: 'Monthly', bgColor: 'bg-green-500' },
  { id: 3, content: 'Yearly', bgColor: 'bg-yellow-200' },
];

function CardStack() {
  const [cards, setCards] = useState(cardData);

  const handleClick = (card) => {
    setCards(prevCards => {
      const newCards = prevCards.filter(c => c.id !== card.id);
      newCards.push(card); // Move clicked card to the back of the stack
      return newCards;
    });
  };

  // Adjust the size of the cards to make them bigger
  const cardWidth = 'w-[32rem]'; // 18rem width
  const cardHeight = 'h-[11.5rem]'; // 11rem height

  return (
    <div className="relative flex items-end justify-center h-full">
      {cards.map((card, index) => (
        <div
          key={card.id}
          onClick={() => handleClick(card)}
          className={`absolute ${cardWidth} ${cardHeight} ${card.bgColor} shadow-lg rounded-lg p-12 flex items-center justify-center text-lg font-semibold cursor-pointer transition-all duration-300 ease-out`}
          style={{
            // Stagger the cards
            transform: `translateY(${index * -20}px) translateX(${index * 26}px)`,
            zIndex: cards.length - index,
          }}
        >
          <div className="text-center text-white">{card.content}</div>
        </div>
      ))}
    </div>
  );
}

export default CardStack;
