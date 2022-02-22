import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Main from "./components/Main";
import bg from "./images/content-bg.png";
import Minter from "./Minter";
function App() {
  const [isMinter, setIsMinter] = useState(false);
  if (isMinter) {
    return (
      <Container className="text-center generalContainer">
        <Minter />
      </Container>
    );
  }
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingBottom: 60,
      }}
      className="app"
    >
      <Main toggleMinter={() => setIsMinter(!isMinter)} />
    </div>
  );
}

export default App;
