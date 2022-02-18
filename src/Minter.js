import { useEffect, useState } from "react";
import {
  connectWallet,
  getCurrentWalletConnected,
  mintNFT,
  addToNetwork,
} from "./util/interact.js";
import {Button, Card} from 'react-bootstrap'




const Minter = (props) => {
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");

  const [amount, setAmount] = useState(1);

  /*const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setURL] = useState("");*/

  useEffect(async () => {
    const { address, status } = await getCurrentWalletConnected();
    setWallet(address);
    setStatus(status);
    addWalletListener();
  }, []);

  function addWalletListener() {
    const isPhantomInstalled = window.solana && window.solana.isPhantom
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
          <a target="_blank" href={`https://metamask.io/download.html`}>
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.
          </a>
        </p>
      );
    }
  }

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  const onMintPressed = async () => {
    const { success, status } = await mintNFT(amount);
    setStatus(status);
    /*if (success) {
      setName("");
      setDescription("");
      setURL("");
    }*/
  };

  const addToPolygonPressed = async () => {
    const walletResponse = await addToNetwork();
  };


  return (
    <div className="Minter">
      <Card className="text-center">
  <Card.Header> 
     <p id="status">
        {status}
      </p>
</Card.Header>
  <Button className="btn btn-dark"id="addPolygonButton" onClick={addToPolygonPressed}>
  🦊Switch to Polygon network!
      </Button> 
  <Button  variant="warning" id="walletButton" onClick={connectWalletPressed}>
        {walletAddress.length > 0 ? (
          "Connected: " +
          String(walletAddress).substring(0, 6) +
          "..." +
          String(walletAddress).substring(38)
        ) : (
          <span>Connect Wallet</span>
        )}
      </Button>
  <Card.Body>
    
    <Card.Title>For this test please make sure to be on Polygon's test network(Mumbai)</Card.Title>
    <Card.Img variant="top" src="https://cdn.discordapp.com/attachments/619998912165445642/931990564621127720/mistery.png" />
    <Button className="btn btn-dark"id="mintButton" onClick={onMintPressed}>
        Mint mystery owl
      </Button> 
  </Card.Body>
  <Card.Footer className="text-muted">4444[Insert counting logic here?] unique nfts available!</Card.Footer>
</Card>
    </div>
  );
};

export default Minter;
