import React,{useEffect,useState} from "react"
import styled from "styled-components"
import Card from "../components/Card"
import Data from "../Data/Data"
import Navbar from "../components/Navbar"
import Slider from "../components/Slider"
import { Link } from "react-router-dom"
// import * as PushAPI from "@pushprotocol/restapi";

const CardsList = styled.section`
    width: 100%;
    height: auto;
    margin: 1rem 0;
    display: flex;
    flex-wrap: wrap;
    text-decoration: none;
    justify-content: center;
`
const Div = styled.div`
width: 70%;
margin: 50px auto;
`
const Heading = styled.h1`
font-size:30px;
font-weight: 600;
margin-bottom: 30px;
font-family: "McLaren", cursive;
`

export default function Main() {

  
  const [currentAccount, setCurrentAccount] = useState("");
  const [isOwner, setisOwner]= useState(false);

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


  const Cards = Data.map(item => {
    return (
      <Link to={`/restraunt/${item._id}`}>
        <Card
          key={item._id}
          image={item.image}
          rating={item.rating}
          name={item.name}
          address={item.address}
          food={item.type_of_food}
          link={item.URL}
        />
      </Link>
    )
  })

  function checkOwner() {
    for (var i = 0; i < Data.length; i++) {
      if(Data[i].owner === currentAccount) setisOwner(true);
      break;
    }
  }

  useEffect(() => {
    checkOwner();
    }, [currentAccount]) //To be fixed

  return (
    <div>
      {/* <Navbar currentAccount={currentAccount} connectWallet={connectWallet}/> */}
      {isOwner ? <h1>Owners page</h1> : <div><Slider /><Div><Heading>Highly Recomended Restaurants in Delhi</Heading><CardsList>{Cards}</CardsList></Div></div> }
{/* 
    
      <Slider />
      <Div>
        <Heading>Highly Recomended Restaurants in Delhi</Heading>
        <CardsList>
          {Cards}
        </CardsList>

      </Div> */}
    </div>

  )
}