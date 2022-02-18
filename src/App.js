import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import Minter from './Minter';

function App() {

  return (
    <Container className="text-center generalContainer">
      {/*<ParticlesContainer></ParticlesContainer> */}
        <Minter></Minter>
    </Container>
  );
}

export default App;
