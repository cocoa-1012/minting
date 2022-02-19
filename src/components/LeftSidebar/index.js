import React, { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import useInnerSize from '../../hook/useInnerSize';
import Item from '../Items/Item';
const LeftSidebar = ({ setSelected, items }) => {
  const { width } = useInnerSize();
  useEffect(() => {
    console.log(width);
  }, [width]);
  if (items.length < 0) return null;
  return (
    <div className='leftSidebar'>
      <div className='sliderItemsWrapper'>
        <Carousel
          axis={width >= 768 ? 'vertical' : 'horizontal'}
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
          centerSlidePercentage={width >= 768 ? 100 / 3 : 100}
          //   thumbWidth={300}
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
