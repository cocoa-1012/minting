import React, { useState } from 'react';
import img2 from '../../images/2.png';
const Content = () => {
  const [counter, setCounter] = useState(1);
  return (
    <div className='content'>
      <div className='cardWrapper'>
        <div className='cardData'>
          <div>
            <p className='card__tagName'>Most Popular</p>
            <div className='card__content'>
              <p className='card__name'>Basic</p>
              <div className='card__image'>
                <img src={img2} alt='' />
              </div>
              <p className='card__eggs'>3 Eggs</p>
              <p className='card__price'>0.07 ETH</p>
              <p className='card__text'>1 random family</p>
              <div className='card__counter'>
                <div
                  className='card__counter-item'
                  onClick={() => setCounter((prev) => prev - 1)}
                >
                  -
                </div>
                <div className='card_counter-no'>{counter}</div>
                <div
                  className='card__counter-item'
                  onClick={() => setCounter((prev) => prev + 1)}
                >
                  +
                </div>
              </div>
              <p className='card__minButton'>mint</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
