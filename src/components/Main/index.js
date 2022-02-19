import React, { useEffect, useState } from 'react';
import img1 from '../../images/1.png';
import img10 from '../../images/10.png';
import img2 from '../../images/2.png';
import img3 from '../../images/3.png';
import img4 from '../../images/4.png';
import img5 from '../../images/5.png';
import img6 from '../../images/6.png';
import img7 from '../../images/7.png';
import img8 from '../../images/8.png';
import img9 from '../../images/9.png';
import Content from '../Content';
import Header from '../Header';
import LeftSidebar from '../LeftSidebar';
import './main.css';

const ITEMS = [
  {
    id: 1,
    name: 'Cookley',
    image: img1,
    egss: 14,
    price: 38,
    family: `${Math.ceil(Math.random() * 10)} random Family`,
    counter: 46,
    tagName: 'Mybuzz',
  },
  {
    id: 2,
    name: 'Ventosanzap',
    image: img2,
    egss: 17,
    price: 34,
    family: `${Math.ceil(Math.random() * 10)} random Family`,
    counter: 51,
    tagName: 'Fivespan',
  },
  {
    id: 12,
    name: 'Zoolab',
    image: img3,
    egss: 2,
    price: 93,
    family: `${Math.ceil(Math.random() * 10)} random Family`,
    counter: 14,
    tagName: 'Cogibox',
  },
  {
    id: 13,
    name: 'Pannier',
    image: img4,
    egss: 1,
    price: 65,
    family: `${Math.ceil(Math.random() * 10)} random Family`,
    counter: 22,
    tagName: 'Pixoboo',
  },
  {
    id: 14,
    name: 'Konklux',
    image: img5,
    egss: 4,
    price: 54,
    family: `${Math.ceil(Math.random() * 10)} random Family`,
    counter: 18,
    tagName: 'Trilia',
  },
  {
    id: 15,
    name: 'Andalax',
    image: img6,
    egss: 8,
    price: 9,
    family: `${Math.ceil(Math.random() * 10)} random Family`,
    counter: 47,
    tagName: 'Realbridge',
  },
  {
    id: 16,
    name: 'Cookley',
    image: img7,
    egss: 17,
    price: 43,
    family: `${Math.ceil(Math.random() * 10)} random Family`,
    counter: 62,
    tagName: 'Tazzy',
  },
  {
    id: 17,
    name: 'Andalax',
    image: img8,
    egss: 6,
    price: 87,
    family: `${Math.ceil(Math.random() * 10)} random Family`,
    counter: 52,
    tagName: 'Dynazzy',
  },
  {
    id: 18,
    name: 'Subin',
    image: img9,
    egss: 11,
    price: 31,
    family: `${Math.ceil(Math.random() * 10)} random Family`,
    counter: 21,
    tagName: 'Skajo',
  },
  {
    id: 19,
    name: 'Sub-Ex',
    image: img10,
    egss: 3,
    price: 39,
    family: `${Math.ceil(Math.random() * 10)} random Family`,
    counter: 56,
    tagName: 'Photobean',
  },
];
const ITEMS2 = [
  {
    id: 2,
    name: 'Ventosanzap',
    image: img2,
    egss: 17,
    price: 34,
    family: `${Math.ceil(Math.random() * 10)} random Family`,
    counter: 51,
    tagName: 'Fivespan',
  },
  {
    id: 12,
    name: 'Zoolab',
    image: img3,
    egss: 2,
    price: 93,
    family: `${Math.ceil(Math.random() * 10)} random Family`,
    counter: 14,
    tagName: 'Cogibox',
  },
  {
    id: 1,
    name: 'Cookley',
    image: img1,
    egss: 14,
    price: 38,
    family: `${Math.ceil(Math.random() * 10)} random Family`,
    counter: 46,
    tagName: 'Mybuzz',
  },
  {
    id: 13,
    name: 'Pannier',
    image: img4,
    egss: 1,
    price: 65,
    family: `${Math.ceil(Math.random() * 10)} random Family`,
    counter: 22,
    tagName: 'Pixoboo',
  },

  {
    id: 15,
    name: 'Andalax',
    image: img6,
    egss: 8,
    price: 9,
    family: `${Math.ceil(Math.random() * 10)} random Family`,
    counter: 47,
    tagName: 'Realbridge',
  },
  {
    id: 16,
    name: 'Cookley',
    image: img7,
    egss: 17,
    price: 43,
    family: `${Math.ceil(Math.random() * 10)} random Family`,
    counter: 62,
    tagName: 'Tazzy',
  },
  {
    id: 14,
    name: 'Konklux',
    image: img5,
    egss: 4,
    price: 54,
    family: `${Math.ceil(Math.random() * 10)} random Family`,
    counter: 18,
    tagName: 'Trilia',
  },
  {
    id: 17,
    name: 'Andalax',
    image: img8,
    egss: 6,
    price: 87,
    family: `${Math.ceil(Math.random() * 10)} random Family`,
    counter: 52,
    tagName: 'Dynazzy',
  },

  {
    id: 19,
    name: 'Sub-Ex',
    image: img10,
    egss: 3,
    price: 39,
    family: `${Math.ceil(Math.random() * 10)} random Family`,
    counter: 56,
    tagName: 'Photobean',
  },
  {
    id: 18,
    name: 'Subin',
    image: img9,
    egss: 11,
    price: 31,
    family: `${Math.ceil(Math.random() * 10)} random Family`,
    counter: 21,
    tagName: 'Skajo',
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
      <div className='mainContent'>
        <LeftSidebar setSelected={setSelected} items={ITEMS} items2={ITEMS2} />
        <Content selected={selected} />
      </div>
    </div>
  );
};

export default Main;
