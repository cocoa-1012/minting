import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import useInnerSize from '../../hook/useInnerSize';
import Item from '../Items/Item';
const LeftSidebar = ({ setSelected, items, items2 }) => {
  if (items.length < 0) return null;
  return (
    <div className='leftSidebar'>
      <div className='sliderItemsWrapper d-flex gap-4'>
        <CarouselContainer>
          {items.map((item) => (
            <div key={Math.random()} onClick={() => setSelected(item)}>
              <Item img={item.image} />
            </div>
          ))}
        </CarouselContainer>
        <CarouselContainer2>
          {items2.map((item) => (
            <div key={Math.random()} onClick={() => setSelected(item)}>
              <Item img={item.image} />
            </div>
          ))}
        </CarouselContainer2>
      </div>
    </div>
  );
};

const settings = {
  verticalSwipe: 'natural',
  interval: 1000,
  autoPlay: true,
  stopOnHover: true,
  centerMode: true,
  infiniteLoop: true,
  labels: false,
  renderIndicator: false,
  showArrows: false,
  showStatus: false,
};

const CarouselContainer = ({ children }) => {
  const { width } = useInnerSize();

  if (width >= 768) {
    return (
      <Carousel {...settings} axis={'vertical'} centerSlidePercentage={100 / 3}>
        {children}
      </Carousel>
    );
  }
  return (
    <Carousel {...settings} axis={'horizontal'} centerSlidePercentage={100}>
      {children}
    </Carousel>
  );
};
const CarouselContainer2 = ({ children }) => {
  const { width } = useInnerSize();

  if (width >= 768) {
    return (
      <Carousel {...settings} axis={'vertical'} centerSlidePercentage={100 / 3}>
        {children}
      </Carousel>
    );
  }
  return (
    <Carousel {...settings} axis={'horizontal'} centerSlidePercentage={100}>
      {children}
    </Carousel>
  );
};

export default LeftSidebar;
