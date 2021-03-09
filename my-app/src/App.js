import React, { useState, useEffect } from "react";
import Web3 from "web3";
import Menu from "./components/Menu";
import data from "./mock/data.json";
import "./App.css";

function App() {
  const [walletAddress, setWalletAddress] = useState("");
  const [error, setError] = useState("");
  const web3 = new Web3("https://rpc.tomochain.com");

  useEffect(() => {
    if (walletAddress) {
      try {
        web3.eth.getBalance(walletAddress).then((res) => {
          console.log(res);
        });
      } catch (error) {
        setError(error && error.message);
      }
    }
  }, [walletAddress]);

  return (
    <div className="App">
      <Menu data={data} />
      <input
        value={walletAddress}
        onChange={(e) => {
          setWalletAddress(e.target.value);
        }}
      />
      {error && (
        <div
          style={{
            color: "red",
          }}
        >
          {error}
        </div>
      )}
    </div>
  );
}

export default App;
