import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Item from './Item';
const Items = () => {
  return (
    <div className='sliderItemsWrapper'>
      <Carousel
        axis='vertical'
        verticalSwipe='natural'
        interval={1000}
        autoPlay={true}
        stopOnHover={false}
        centerMode
        infiniteLoop
        labels={false}
        renderIndicator={false}
        showArrows={false}
        showStatus={false}
        centerSlidePercentage={100 / 3}
        thumbWidth={300}
      >
        <div>
          <Item />
        </div>
        <div>
          <Item />
        </div>
        <div>
          <Item />
        </div>
        <div>
          <Item />
        </div>
        <div>
          <Item />
        </div>
        <div>
          <Item />
        </div>
        <div>
          <Item />
        </div>
        <div>
          <Item />
        </div>
        <div>
          <Item />
        </div>
        <div>
          <Item />
        </div>
        <div>
          <Item />
        </div>
        <div>
          <Item />
        </div>
      </Carousel>
    </div>
  );
};

export default Items;
