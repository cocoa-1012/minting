import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container } from 'react-bootstrap';
import Main from './components/Main';

function App() {
  return (
    <Container className='text-center generalContainer'>
      <Main />
    </Container>
  );
}

export default App;
