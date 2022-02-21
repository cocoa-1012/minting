import React, { useState } from "react";
import ProgressBar from "../ProgressBar";

const testData = { id: 0, current: 3690, total: 4444 };

const Content = ({ selected, total, currentVal }) => {
  const [counter, setCounter] = useState(1);
  const increment = () => {
    setCounter((prev) => prev + 1);
  };
  const decrement = () => {
    if (counter > 1) {
      setCounter((prev) => prev - 1);
    }
  };

  return (
    <div className="content">
      <div className="cardWrapper">
        <p className="card__tagName">MINT YOUR MAJESTIC OWL</p>
        <div className="card__content">
          <p className="card__name">{selected.name}</p>
          <div className="card__image">
            <img src={selected.image} alt="" />
          </div>
          <p className="card__text">220 MATIC</p>
          <div className="card__counter">
            <div className="card__counter-item" onClick={decrement}>
              -
            </div>
            <div className="card_counter-no">{counter}</div>
            <div className="card__counter-item" onClick={increment}>
              +
            </div>
          </div>
          <ProgressBar
            key={testData.id}
            current={testData.current}
            total={testData.total}
            completed={testData.completed}
          />
          <a
            href="https://www.youtube.com/"
            target="_blank"
            className="card__minButton btn btn-success"
            rel="noreferrer"
          >
            mint
          </a>
        </div>
      </div>
    </div>
  );
};

export default Content;
