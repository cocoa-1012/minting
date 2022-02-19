import React, { useEffect, useState } from 'react';

const Content = ({ selected }) => {
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    setCounter(selected.counter);
  }, [selected.counter]);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };
  const decrement = () => {
    if (counter > 1) {
      setCounter((prev) => prev - 1);
    }
  };

  return (
    <div className='content'>
      <div className='cardWrapper'>
        <div className='cardData'>
          <div>
            <p className='card__tagName'>{selected.tagName}</p>
            <div className='card__content'>
              <p className='card__name'>{selected.name}</p>
              <div className='card__image'>
                <img src={selected.image} alt='' />
              </div>
              <p className='card__eggs'>{selected.egss} Eggs</p>
              <p className='card__price'>{selected.price / 10} ETH</p>
              <p className='card__text'>{selected.family}</p>
              <div className='card__counter'>
                <div className='card__counter-item' onClick={decrement}>
                  -
                </div>
                <div className='card_counter-no'>{counter}</div>
                <div className='card__counter-item' onClick={increment}>
                  +
                </div>
              </div>
              <a href='https://www.youtube.com/' target='_blank' className='card__minButton btn btn-success' rel="noreferrer">mint</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
