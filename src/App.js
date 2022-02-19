import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container } from 'react-bootstrap';
import Main from './components/Main';
// import bg from './images/content-bg.png';
function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${'https://images.pexels.com/photos/1146134/pexels-photo-1146134.jpeg'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container className='text-center generalContainer'>
        <Main />
      </Container>
    </div>
  );
}

export default App;
