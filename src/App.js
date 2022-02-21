import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container } from 'react-bootstrap';
import Main from './components/Main';
import bg from './images/content-bg.png';
function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        paddingBottom: 100,
      }}
      className='app'
    >
      <Container className='text-center generalContainer'>
        <Main />
      </Container>
    </div>
  );
}

export default App;
