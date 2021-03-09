import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import Menu from './components/Menu';
import data from './mock/data.json';
import './App.css';

function App() {
  const [walletAddress, setWalletAddress] = useState('');
  const [subscribeVal, setSubscribeVal] = useState('');
  const [loading, setLoading] = useState(false);
  const [walletBalance, setWalletBalance] = useState(0);
  const [error, setError] = useState('');
  const web3 = new Web3('https://rpc.tomochain.com');

  useEffect(() => {
    let timeout = null;
    if (subscribeVal) {
      timeout = setInterval(() => {
        try {
          web3.eth.getBalance(subscribeVal).then((data) => {
            setLoading(false);
            setError('');
            setWalletBalance(data);
          });
        } catch (error) {
          setLoading(false);
          setError(error.message);
          setWalletBalance(0);
          clearInterval(timeout);
        }
      }, 2000);
    }

    // Clean up function
    return () => {
      if (timeout) {
        clearInterval(timeout);
      }
    };
  }, [subscribeVal]);

  return (
    <div className="App">
      {/* Test 1 */}
      <Menu data={data} />
      {/* Test 2 */}
      <div
        style={{
          padding: '20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            marginBottom: '5px',
          }}
        >
          <input
            value={walletAddress}
            onChange={(e) => {
              setWalletAddress(e.target.value);
            }}
          />
          <button
            onClick={() => {
              setSubscribeVal(walletAddress);
              setLoading(true);
            }}
          >
            {loading ? 'Loading...' : 'Search'}
          </button>
        </div>

        {error && (
          <div
            style={{
              color: 'red',
            }}
          >
            {error}
          </div>
        )}
        <div>Wallet's Balance: {walletBalance !== 0 ? web3.utils.fromWei(walletBalance) : 0} TOMO</div>
      </div>
    </div>
  );
}

export default App;
