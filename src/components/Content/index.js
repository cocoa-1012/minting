import React from 'react';
import img2 from '../../images/2.png';
const Content = () => {
  return (
    <div>
      <div>
        <p className='tagName'>Most Popular</p>
        <div>
          <p className='name'>Basic</p>
          <div>
            <img src={img2} alt='' />
          </div>
          <p className='eggs'>3 Eggs</p>
          <p className='price'>0.07 ETH</p>
          <p className='text'>1 random family</p>
          <div>
            <div>-</div>
            <div>1</div>
            <div>+</div>
          </div>
          <button className='minButton'>min</button>
        </div>
      </div>
    </div>
  );
};

export default Content;
