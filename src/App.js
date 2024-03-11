// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import { Web3Provider, useWeb3 } from './Web3Context';

function App() {
  const { web3, connected } = useWeb3();

  return (
    <div>
      {connected ? (
        <p>Connected to {web3.chainId}</p>
      ) : (
        <p>Connect your wallet to interact with the blockchain</p>
      )}
    </div>
  );
}

export default function () {
  return (
    <Web3Provider>
      <App />
    </Web3Provider>
  );
}
