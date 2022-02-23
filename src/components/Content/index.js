import React, { useEffect, useState } from "react";
import unknowImage from "../../images/unknown.png";
import {
  addToNetwork,
  connectWallet,
  getCurrentWalletConnected,
  getSupply,
  mintNFT,
} from "../../util/interact.js";
import ProgressBar from "../ProgressBar";

const testData = { id: 0, current: 2655, total: 4444 };

const Content = () => {
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [currentSupply, setCurrentSupply] = useState(0);
  const [amount, setAmount] = useState(1);

  const [counter, setCounter] = useState(1);
  const increment = () => {
    setCounter((prev) => prev + 1);
  };
  const decrement = () => {
    if (counter > 1) {
      setCounter((prev) => prev - 1);
    }
  };

  const addToPolygonPressed = async () => {
    const walletResponse = await addToNetwork();
  };

  const addWalletListener = () => {
    const isPhantomInstalled = window.solana && window.solana.isPhantom;
    console.log(isPhantomInstalled);
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setStatus("👆🏽 Write a message in the text-field above.");
        } else {
          setWallet("");
          setStatus("🦊 Connect to Metamask using the top right button.");
        }
      });
    } else {
      setStatus(
        <p>
          {" "}
          🦊{" "}
          <a
            target="_blank"
            href={`https://metamask.io/download.html`}
            rel="noreferrer"
          >
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.
          </a>
        </p>
      );
    }
  };

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  const onMintPressed = async () => {
    // const { success, status } = await mintNFT(amount);
    // setStatus(status);

    if (window.ethereum.networkVersion != 0x89) {
      const nres = await addToNetwork();
      // setStatus(nres.status);
    }

    const res = await getCurrentWalletConnected();
    if (res.address != "") {
      console.log("connected");
      setWallet(res.address);
    } else {
      setStatus(res.status);
      const wres = await connectWallet();
      setStatus(wres.status);
      setWallet(wres.address);
    }

    const supply = await getSupply();
    console.log(supply);
    await mintNFT(counter);
    getCurrentSupply();

    /*if (success) {
      setName("");
      setDescription("");
      setURL("");
    }*/
  };

  const getCurrentSupply = async () => {
    if (window.ethereum.networkVersion != 0x89) {
      const nres = await addToNetwork();
      // setStatus(nres.status);
    }

    const res = await getCurrentWalletConnected();
    if (res.address != "") {
      console.log("connected");
      setWallet(res.address);
    } else {
      setStatus(res.status);
      const wres = await connectWallet();
      setStatus(wres.status);
      setWallet(wres.address);
    }

    const supply = await getSupply();
    setCurrentSupply(supply);
    console.log(supply);
  };

  useEffect(async () => {
    // const { address, status } = await getCurrentWalletConnected();
    // setWallet(address);
    // setStatus(status);
    // addWalletListener();
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
          <ProgressBar
            key={testData.id}
            current={currentSupply}
            // current={testData.current}
            total={testData.total}
          />
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
        </div>
      </div>
    </div>
  );
};

export default Content;
