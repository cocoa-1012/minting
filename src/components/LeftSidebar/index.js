import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import img1 from '../../images/1.png';
import img10 from '../../images/10.png';
import img11 from '../../images/11.png';
import img12 from '../../images/12.png';
import img13 from '../../images/13.png';
import img14 from '../../images/14.png';
import img15 from '../../images/15.png';
import img16 from '../../images/16.png';
import img17 from '../../images/17.png';
import img18 from '../../images/18.png';
import img19 from '../../images/19.png';
import img2 from '../../images/2.png';
import img3 from '../../images/3.png';
import img4 from '../../images/4.png';
import img5 from '../../images/5.png';
import img6 from '../../images/6.png';
import img7 from '../../images/7.png';
import img9 from '../../images/9.png';
import Item from '../Items/Item';
const IMAGES = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
];
const LeftSidebar = () => {
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
          {IMAGES.map((img) => (
            <div>
              <Item key={Math.random()} img={img} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default LeftSidebar;
