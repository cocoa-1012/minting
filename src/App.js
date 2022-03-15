import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Main from "./components/Main";
import Prepage from "./components/Prepage";
import bg from "./images/content-bg.png";
function App() {
  const [isMint, setIsMint] = useState(true);
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="app"
    >
      {isMint ? <Main /> : <Prepage setIsMint={setIsMint} />}
    </div>
  );
}

export default App;
