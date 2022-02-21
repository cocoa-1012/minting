import React, { useEffect, useState } from "react";
import img1 from "../../images/1.png";
import img10 from "../../images/10.png";
import img2 from "../../images/2.png";
import img3 from "../../images/3.png";
import img4 from "../../images/4.png";
import img5 from "../../images/5.png";
import img6 from "../../images/6.png";
import img7 from "../../images/7.png";
import img8 from "../../images/8.png";
import img9 from "../../images/9.png";
import Content from "../Content";
import Header from "../Header";
import LeftSidebar from "../LeftSidebar";
import "./main.css";

const ITEMS = [
  {
    id: 1,
    name: "Cookley",
    image: img1,
    price: 38,
    counter: 46,
  },
  {
    id: 2,
    name: "Ventosanzap",
    image: img2,
    price: 34,
    counter: 51,
  },
  {
    id: 12,
    name: "Zoolab",
    image: img3,
    price: 93,
    counter: 14,
  },
  {
    id: 13,
    name: "Pannier",
    image: img4,
    price: 65,
    counter: 22,
  },
  {
    id: 14,
    name: "Konklux",
    image: img5,
    price: 54,
    counter: 18,
  },
  {
    id: 15,
    name: "Andalax",
    image: img6,
    price: 9,
    counter: 47,
  },
  {
    id: 16,
    name: "Cookley",
    image: img7,
    price: 43,
    counter: 62,
  },
  {
    id: 17,
    name: "Andalax",
    image: img8,
    price: 87,
    counter: 52,
  },
  {
    id: 18,
    name: "Subin",
    image: img9,
    price: 31,
    counter: 21,
  },
  {
    id: 19,
    name: "Sub-Ex",
    image: img10,
    price: 39,
    counter: 56,
  },
];

const Main = () => {
  const [selected, setSelected] = useState(ITEMS[0]);
  // eslint-disable-next-line no-unused-vars
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(ITEMS);
  }, []);

  return (
    <div>
      <Header />
      <div className="mainContent text-center generalContainer">
        <LeftSidebar setSelected={setSelected} items={ITEMS} />
        <Content selected={selected} />
      </div>
    </div>
  );
};

export default Main;
