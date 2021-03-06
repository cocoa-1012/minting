import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import useInnerSize from "../../hook/useInnerSize";
import Item from "../Items/Item";
const LeftSidebar = ({ items }) => {
  if (items.length < 0) return null;
  return (
    <div className="leftSidebar">
      <div className="sliderItemsWrapper d-md-flex gap-4">
        <CarouselContainer>
          {items.map((item) => (
            <div key={Math.random()}>
              <Item img={item.image} />
            </div>
          ))}
        </CarouselContainer>
      </div>
    </div>
  );
};

const settings = {
  verticalSwipe: "natural",
  interval: 1500,
  autoPlay: true,
  stopOnHover: false,
  centerMode: true,
  infiniteLoop: true,
  labels: false,
  renderIndicator: false,
  showArrows: false,
  showStatus: false,
  showThumbs: false,
};

const CarouselContainer = ({ children }) => {
  const { width } = useInnerSize();

  if (width >= 768) {
    return (
      <Carousel {...settings} axis={"vertical"} centerSlidePercentage={100 / 3}>
        {children}
      </Carousel>
    );
  }
  return (
    <Carousel {...settings} axis={"horizontal"} centerSlidePercentage={100 / 2}>
      {children}
    </Carousel>
  );
};

export default LeftSidebar;
