require("dotenv").config();
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);
const contractABI = require("../contract-abi.json");
const contractAddress = "0xc260Bae1C4eC14d47B86e4D52E2Bd2F9C29213fd";
const price = 0.02;
export const addToNetwork = async () => {
  const params = [
    {
      chainId: "0x89",
      chainName: "Matic Mainnet",
      nativeCurrency: {
        name: "MATIC",
        symbol: "MATIC",
        decimals: 18,
      },
      rpcUrls: ["https://polygon-rpc.com/"],
      blockExplorerUrls: ["https://polygonscan.com/"],
    },
  ];
  try {
    // const accounts = await window.ethereum.request({
    //   method: "eth_requestAccounts",
    // });
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params,
    });
    // .then(() => console.log('Success'))
    // .catch((error) => console.log("Error", error.message));
  } catch (err) {
    return {
      address: "",
      status: "😥 " + err.message,
    };
  }
};

export const connectWallet = async () => {
  try {
    const resp = await window.solana.connect();
    resp.publicKey.toString();
    // 26qv4GCcx98RihuK3c4T6ozB3J7L6VwCuFVc7Ta2A3Uo
  } catch (err) {
    // { code: 4001, message: 'User rejected the request.' }
  }
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        status: "",
        address: addressArray[0],
      };
      return obj;
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a
              target="_blank"
              href={`https://metamask.io/download.html`}
              rel="noreferrer"
            >
              You must install Metamask, a virtual wallet, in your browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};

export const mintNFT = async (amount) => {
  //set up your Ethereum transaction
  const transactionParameters = {
    gas: parseInt((258000 * amount).toString()).toString(16),
    to: contractAddress, // Required except during contract publications.
    from: window.ethereum.selectedAddress, // must match user's active address.
    value: parseInt(
      web3.utils.toWei((price * amount).toString(), "ether")
    ).toString(16),
    data: window.contract.methods
      .mint(window.ethereum.selectedAddress, amount)
      .encodeABI(), //make call to NFT smart contract
  };

  //sign transaction via Metamask
  try {
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    });
    return {
      success: true,
      status:
        "✅ Check out your transaction on Polygon: https://rinkeby.etherscan.io/tx/" +
        txHash,
    };
  } catch (error) {
    return {
      success: false,
      status: "😥 Something went wrong: " + error.message,
    };
  }
};

export const getCurrentWalletConnected = async () => {
  //load smart contract
  window.contract = await new web3.eth.Contract(contractABI, contractAddress); //loadContract();

  //index = await window.contract.methods.totalSupply().call();

  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
          status: "",
        };
      } else {
        return {
          address: "",
          status: "🦊 Connect to Metamask using the connect button.",
        };
      }
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
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
        </span>
      ),
    };
  }
};
