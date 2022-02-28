import React, { useEffect } from "react";
import logoImage from "../../images/logo.png";

const mint = (e) => {
  e.preventDefault();
  window.location.href = "https://www.privatediamond.majesticowl.io/";
};

const Prepage = ({ setIsMint }) => {
  useEffect(() => {}, []);

  return (
    <div className="prepage__content">
      <div className="prepage">
        <div className="logo_image">
          <img src={logoImage} alt="logo" />
        </div>
        <p className="prepage_text">
          {/* <span style={{ fontSize: 30 }}>MAJESTIC OWL</span> <br /> */}
          Dear Diamond listers Owler, <br />
          <br />
          Thank you for your engagement and your involvment. <br />
          Today is the begin of great things. <br />
          <br />
          <span style={{ fontStyle: "italic" }}>
            "when the owl sings the night is silent "
          </span>
          <br />
          <br />
          Click on the button below to begin with minting your owl(s).
        </p>

        <button
          className="prepage__minButton btn btn-success"
          rel="noreferrer"
          onClick={setIsMint}
        >
          Continue&nbsp;&#8594;
        </button>
        <button
          className="prepage__mintAnchor btn btn-success"
          rel="noreferrer"
          onClick={(e) => mint(e)}
        >
          Continue&nbsp;&#8594;
        </button>
        <p className="how_to_mint"></p>
      </div>
    </div>
  );
};

export default Prepage;
