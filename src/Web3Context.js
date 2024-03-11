import { createContext, useContext, useState, useEffect } from 'react';
import { InjectedConnector } from '@web3-react/injected-connector';

const injected = new InjectedConnector();

const Web3Context = createContext();

export const useWeb3 = () => useContext(Web3Context);

export const Web3Provider = ({ children }) => {
  const [web3State, setWeb3State] = useState({});

  useEffect(() => {
    const fetchWeb3 = async () => {
      try {
        const connector = injected;
        const web3 = await connector.activate();
        setWeb3State({ web3, connected: true });
      } catch (error) {
        console.error('Error connecting to Web3: ', error);
        setWeb3State({ connected: false });
      }
    };

    fetchWeb3();
  }, []);

  return (
    <Web3Context.Provider value={web3State}>
      {children}
    </Web3Context.Provider>
  );
};
