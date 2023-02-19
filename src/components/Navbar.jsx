import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom"
import styled from "styled-components";


const Nav = styled.nav`
    z-index: 4;
    background-color: #ffffff;
    padding: 16px 5%;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: space-between;
    position: fixed; 
  top: 0; 
  width: 100%;
`

const Heading = styled(Link)`
    color: green;
    font-family: "McLaren", cursive;
    font-weight: 800;
    font-size: 39px;
    text-decoration-line: none;
    margin: auto 0px;
`
const Wallet = styled(Link)`
font-weight: bold;
text-decoration-line: none;
color: green;
font-family: "McLaren", cursive;
background-color: white;
border: 2px solid #4CAF50;
border-radius: 5px;
transition-duration: 0.4s;
padding: 15px 32px;
text-align: center;
display: inline-block;
font-size: 16px;
cursor: pointer;
:hover{
    color: white;
    background-color: green;
}
`


export default function Navbar() {
    const [currentAccount, setCurrentAccount] = useState("");

    const connectWallet = async () => {
      try {
        const { ethereum } = window;
  
        if (!ethereum) {
          alert("Get MetaMask!");
          return;
        }
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log("Connected", accounts[0]);
        setCurrentAccount(accounts[0]);
    
      } catch (error) {
        console.log(error);
      }
    };
  
    const checkIfWalletIsConnected = async () => {
      const { ethereum } = window;
  
      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
      }
  
      const accounts = await ethereum.request({ method: "eth_accounts" });
      const chain = await window.ethereum.request({ method: "eth_chainId" });
      let chainId = chain;
      console.log("chain ID:", chain);
      console.log("global Chain Id:", chainId);
      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount(account);
      } else {
        console.log("No authorized account found");
      }
    };
  
    useEffect(() => {
      checkIfWalletIsConnected();
    }, []);
    
    return (
        <Nav>

            <Heading to="/" > Buffet On Time</Heading>
            {currentAccount === "" ? <Wallet to="/" onClick={connectWallet}> Connect Wallet</Wallet> : <h3>{currentAccount}</h3>}

            
        </Nav>
    );
}
