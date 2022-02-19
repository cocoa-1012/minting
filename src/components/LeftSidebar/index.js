import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Item from '../Items/Item';

const LeftSidebar = ({ setSelected, items }) => {
  if (items.length < 0) return null;
  return (
    <div className='leftSidebar'>
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
          {items.map((item) => (
            <div key={Math.random()} onClick={() => setSelected(item)}>
              <Item img={item.image} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default LeftSidebar;
