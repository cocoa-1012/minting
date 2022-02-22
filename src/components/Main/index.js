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
  },
  {
    id: 2,
    name: "Ventosanzap",
    image: img2,
  },
  {
    id: 12,
    name: "Zoolab",
    image: img3,
  },
  {
    id: 13,
    name: "Pannier",
    image: img4,
  },
  {
    id: 14,
    name: "Konklux",
    image: img5,
  },
  {
    id: 15,
    name: "Andalax",
    image: img6,
  },
  {
    id: 16,
    name: "Cookley",
    image: img7,
  },
  {
    id: 17,
    name: "Andalax",
    image: img8,
  },
  {
    id: 18,
    name: "Subin",
    image: img9,
  },
  {
    id: 19,
    name: "Sub-Ex",
    image: img10,
  },
];

const Main = ({ toggleMinter }) => {
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
        <Content selected={selected} toggleMinter={toggleMinter} />
      </div>
    </div>
  );
};

export default Main;
