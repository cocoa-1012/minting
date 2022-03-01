import React, { useEffect, useState } from "react";
import unknowImage from "../../images/unknown.png";
import {
  addToNetwork,
  connectWallet,
  getCurrentWalletConnected,
  getSupply,
  mintNFT,
} from "../../util/interact.js";

const totalSupply = process.env.REACT_APP_TOTAL_SUPPLY;

const Content = () => {
  const [currentSupply, setCurrentSupply] = useState(0);
  const [counter, setCounter] = useState(1);
  const increment = () => {
    setCounter((prev) => prev + 1);
  };
  const decrement = () => {
    if (counter > 1) {
      setCounter((prev) => prev - 1);
    }
  };

  const onMintPressed = async () => {
    if (window.ethereum.networkVersion !== 0x89) {
      await addToNetwork();
    }

    const res = await getCurrentWalletConnected();
    if (res.address !== "") {
      console.log("connected");
    } else {
      await connectWallet();
    }

    await getSupply();
    await mintNFT(counter);
    getCurrentSupply();
  };

  const getCurrentSupply = async () => {
    if (window.ethereum.networkVersion !== 0x89) {
      await addToNetwork();
    }

    const res = await getCurrentWalletConnected();
    if (res.address !== "") {
      console.log("connected");
    } else {
      await connectWallet();
    }

    const supply = await getSupply();
    setCurrentSupply(supply);
  };

  useEffect(() => {
    getCurrentSupply();
  }, []);

  return (
    <div className="content">
      <div className="cardWrapper">
        <p className="card__tagName">MINT YOUR MAJESTIC OWL</p>
        <div className="card__content">
          <div className="card__image">
            <img src={unknowImage} alt="" />
          </div>
          <p className="card__text">220 MATIC</p>
          <div className="card__counter">
            <div className="card__counter-item" onClick={decrement}>
              -
            </div>
            <div className="card_counter-no">{counter}</div>
            <div className="card__counter-item" onClick={increment}>
              +
            </div>
          </div>

          {/* <ProgressBar current={currentSupply} total={totalSupply} /> */}
          <button
            className="card__minButton btn btn-success"
            rel="noreferrer"
            onClick={onMintPressed}
          >
            mint
          </button>
          <p className="how_to_mint">
            If you don't know how to mint with Matic check this &nbsp;
            <a href="https://youtube.com" alt="howto">
              video
            </a>
            .
          </p>
          {/* <p>&#9989; &nbsp;Verified Contract</p> */}
          <p
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontSize: 10,
                color: "#fff",
                fontWeight: "bolder",
                background: "#6c99f6",
                borderRadius: "50%",
                border: "solid 2px #cad6e4",
                padding: "0px 4px",
                marginBottom: 2,
              }}
            >
              &#128504;
            </span>
            &nbsp; &nbsp;Verified Contract
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
