import React from 'react';
const Item = ({ img }) => {
  return (
    <div className='sliderItem'>
      <img src={img} alt='' />
    </div>
  );
};

export default Item;
