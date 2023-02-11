import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom"
import styled from "styled-components";


const Nav = styled.nav`
    z-index: 4;
    background-color: white;
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

export default function Navbar(props) {
    
    return (
        <Nav>

            <Heading to="/" > Buffet On Time</Heading>
            {props.currentAccount === "" ? <Wallet to="/" onClick={props.connectWallet}> Connect Wallet</Wallet> : <h3>{props.currentAccount}</h3>}
            {/* <Wallet to="/wallet" onClick={connectWallet}> Connect Wallet</Wallet> */}
            
        </Nav>
    );
}
