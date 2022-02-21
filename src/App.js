import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Main from "./components/Main";
import bg from "./images/content-bg.png";
function App() {
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
      <Main />
    </div>
  );
}

export default App;
