import React, { useEffect, useState } from 'react';
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
import Content from '../Content';
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
    image: img10,
    egss: 17,
    price: 34,
    family: `${Math.ceil(Math.random() * 10)} random Family`,
    counter: 51,
    tagName: 'Fivespan',
  },
  {
    id: 3,
    name: 'Gembucket',
    image: img11,
    egss: 19,
    price: 19,
    family: `${Math.ceil(Math.random() * 10)} random Family`,
    counter: 62,
    tagName: 'Lazzy',
  },
  {
    id: 4,
    name: 'Bitchip',
    image: img12,
    egss: 4,
    price: 58,
    family: `${Math.ceil(Math.random() * 10)} random Family`,
    counter: 28,
    tagName: 'Linkbuzz',
  },
  {
    id: 5,
    name: 'Gembucket',
    image: img13,
    egss: 8,
    price: 69,
    family: `${Math.ceil(Math.random() * 10)} random Family`,
    counter: 90,
    tagName: 'Flashspan',
  },
  {
    id: 6,
    name: 'Pannier',
    image: img14,
    egss: 8,
    price: 20,
    family: `${Math.ceil(Math.random() * 10)} random Family`,
    counter: 12,
    tagName: 'Gigabox',
  },
  {
    id: 7,
    name: 'Transcof',
    image: img15,
    egss: 3,
    price: 96,
    family: `${Math.ceil(Math.random() * 10)} random Family`,
    counter: 80,
    tagName: 'Tagpad',
  },
  {
    id: 8,
    name: 'Zoolab',
    image: img16,
    egss: 17,
    price: 16,
    family: `${Math.ceil(Math.random() * 10)} random Family`,
    counter: 21,
    tagName: 'Edgeclub',
  },
  {
    id: 9,
    name: 'Viva',
    image: img17,
    egss: 11,
    price: 85,
    family: `${Math.ceil(Math.random() * 10)} random Family`,
    counter: 10,
    tagName: 'Tagtune',
  },
  {
    id: 10,
    name: 'Fintone',
    image: img18,
    egss: 7,
    price: 24,
    family: `${Math.ceil(Math.random() * 10)} random Family`,
    counter: 97,
    tagName: 'Fatz',
  },
  {
    id: 11,
    name: 'Voyatouch',
    image: img19,
    egss: 9,
    price: 20,
    family: `${Math.ceil(Math.random() * 10)} random Family`,
    counter: 68,
    tagName: 'Centidel',
  },
  {
    id: 12,
    name: 'Zoolab',
    image: img2,
    egss: 2,
    price: 93,
    family: `${Math.ceil(Math.random() * 10)} random Family`,
    counter: 14,
    tagName: 'Cogibox',
  },
  {
    id: 13,
    name: 'Pannier',
    image: img3,
    egss: 1,
    price: 65,
    family: `${Math.ceil(Math.random() * 10)} random Family`,
    counter: 22,
    tagName: 'Pixoboo',
  },
  {
    id: 14,
    name: 'Konklux',
    image: img4,
    egss: 4,
    price: 54,
    family: `${Math.ceil(Math.random() * 10)} random Family`,
    counter: 18,
    tagName: 'Trilia',
  },
  {
    id: 15,
    name: 'Andalax',
    image: img5,
    egss: 8,
    price: 9,
    family: `${Math.ceil(Math.random() * 10)} random Family`,
    counter: 47,
    tagName: 'Realbridge',
  },
  {
    id: 16,
    name: 'Cookley',
    image: img6,
    egss: 17,
    price: 43,
    family: `${Math.ceil(Math.random() * 10)} random Family`,
    counter: 62,
    tagName: 'Tazzy',
  },
  {
    id: 17,
    name: 'Andalax',
    image: img7,
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
    image: img1,
    egss: 3,
    price: 39,
    family: `${Math.ceil(Math.random() * 10)} random Family`,
    counter: 56,
    tagName: 'Photobean',
  },
  {
    id: 20,
    name: 'Voyatouch',
    image: img3,
    egss: 6,
    price: 83,
    family: `${Math.ceil(Math.random() * 10)} random Family`,
    counter: 23,
    tagName: 'Photofeed',
  },
  {
    id: 21,
    name: 'Solarbreeze',
    image: img4,
    egss: 18,
    price: 46,
    family: `${Math.ceil(Math.random() * 10)} random Family`,
    counter: 49,
    tagName: 'Gigashots',
  },
  {
    id: 22,
    name: 'Alpha',
    image: img5,
    egss: 19,
    price: 33,
    family: `${Math.ceil(Math.random() * 10)} random Family`,
    counter: 45,
    tagName: 'Midel',
  },
  {
    id: 23,
    name: 'Regrant',
    image: img6,
    egss: 7,
    price: 40,
    family: `${Math.ceil(Math.random() * 10)} random Family`,
    counter: 38,
    tagName: 'Thoughtblab',
  },
  {
    id: 24,
    name: 'Pannier',
    image: img7,
    egss: 11,
    price: 62,
    family: `${Math.ceil(Math.random() * 10)} random Family`,
    counter: 90,
    tagName: 'Ailane',
  },
  {
    id: 25,
    name: 'Flexidy',
    image: img9,
    egss: 4,
    price: 59,
    family: `${Math.ceil(Math.random() * 10)} random Family`,
    counter: 17,
    tagName: 'Wordpedia',
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
    <div className='mainContent'>
      <LeftSidebar setSelected={setSelected} items={ITEMS} />
      <Content selected={selected} />
    </div>
  );
};

export default Main;
