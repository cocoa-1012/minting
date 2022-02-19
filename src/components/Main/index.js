import React from 'react';
import Content from '../Content';
import LeftSidebar from '../LeftSidebar';
import './main.css';

const Main = () => {
  return (
    <div className='mainContent'>
      <LeftSidebar />
      <Content />
    </div>
  );
};

export default Main;
