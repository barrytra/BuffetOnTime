import React, {useState, useEffect} from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import { Link } from "react-router-dom"
import { Framework } from "@superfluid-finance/sdk-core";
import { ethers } from "ethers";
import Data from "../../Data/Data.js"
import abi from "../../restoABI/Buffet.json"
import './bookNow.css'
const Div = styled.div`
    width: 33%;
    position: sticky;
    top: 80px;
    height: 100%;
`

const Box = styled.div`

    max-height: 86vh;
    overflow-y: auto;
    box-shadow: 0 0 6px 0 rgb(0 0 0 / 26%);
    background-color: #fff;
    padding: 10px;
    border-radius: 10px;
    align-items: center;
    display: flex;
    justify-content: center;

`


async function createNewFlow(recipient, flowRate) {
   
    console.log(typeof flowRate)
    flowRate = flowRate.toString();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
  
    const signer = provider.getSigner();
  
    const chainId = await window.ethereum.request({ method: "eth_chainId" });
    console.log("No_ID: ",Number(chainId))
    const sf = await Framework.create({
    //   chainId: 80001,
      chainId: Number(chainId),
      provider: provider,
    });
    const MATICx = await sf.loadSuperToken("MATICx");
    try {
      const createFlowOperation = MATICx.createFlow({
        receiver: recipient,
        flowRate: flowRate,
        // flowRate: 1000000000000000,
        // userData?: string
      });
  
      console.log("Creating your stream...");
  
      const result = await createFlowOperation.exec(signer);
      console.log(result);
  
      console.log(
        `Congrats - you've just created a money stream!
      View Your Stream At: https://app.superfluid.finance/dashboard/${recipient}
      Network: Polygon
      Super Token: MATICx
      Sender: 0xDCB45e4f6762C3D7C61a00e96Fb94ADb7Cf27721
      Receiver: ${recipient},
      FlowRate: ${flowRate}
      `
      );
    } catch (error) {
      console.log(
        "Hmmm, your transaction threw an error. Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!"
      );
      console.error(error);
    }
  }
  async function deleteFlow(sender, recipient, setClaimDisabled) {
    console.log(recipient)
    const provider = new ethers.providers.Web3Provider(window.ethereum);
  
    const signer = provider.getSigner();
  
    const chainId = await window.ethereum.request({ method: "eth_chainId" });
    console.log("No_ID: ",Number(chainId))
    const sf = await Framework.create({
    //   chainId: 80001,
      chainId: Number(chainId),
      provider: provider,
    });
  
    const MATICx = await sf.loadSuperToken("MATICx");
  
    try {
      const deleteFlowOperation = MATICx.deleteFlow({
        sender: sender,
        // sender: "0x9E9725400681C01e1C1e5678020b3d54D568d842",
        receiver: recipient,
      });
  
      console.log("Deleting your stream...");
  
      const result = await deleteFlowOperation.exec(signer);
      console.log(result);
  
      console.log(
        `Congrats - you've just deleted a money stream!
      Network: Polygon
      Super Token: MATICx
      Sender: ${sender}
      Receiver: ${recipient},
      `
      );
      setClaimDisabled(false);
    } catch (error) {
      console.log(
        "Hmmm, your transaction threw an error. Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!"
      );
      console.error(error);
    }
  }

export default function BookNow() {

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
      setWallet(account);
    } else {
      console.log("No authorized account found");
    }
  };
  const onChange = (e) => {
    // console.log(e.target.value)
    setPswd(e.target.value)
    
  }
  const checkPswd = (e) => {
    // console.log(e.target.value)
    if(pswd === Restaurant.passwordStart)
    {
      setStartDisabled(false)
    }
    if(pswd === Restaurant.passwordStop)
    {
      setStopDisabled(false)
    }
  }

  const Claim = async (e) => {

    // e.preventDefault();
    const contractAddress = "0x0A1994c6c0719D95727A70Bac8F5E12186Bb5Ea0";
    const contractABI = abi
    console.log("start clicked");
    try {
      const { ethereum } = window;
      if (ethereum) {
        console.log("here")
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const BuffetContract = new ethers.Contract(contractAddress, contractABI, signer);
        
        await BuffetContract.mint(wallet);
      
      } else {
        console.log("Ethereum object doesn't exist!")
      }
    } catch (error) {
      console.log(error)
    }
}
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [Restaurant, setRestaurant] = useState({});
  const [wallet, setWallet] = useState("");
  const [pswd, setPswd] = useState("")
  const [startDisabled, setStartDisabled] = useState(true)
  const [stopDisabled, setStopDisabled] = useState(true)
  const [claimDisabled, setClaimDisabled] = useState(true)

  useEffect(() => {
    const clickedRestaurantData = Data.find(obj => obj._id === path);
    setRestaurant(clickedRestaurantData);
    checkIfWalletIsConnected();
},  [path])
  
    return (
      <Div>
          <label for="pwd">Password:</label>
          <input type="password" onChange={onChange} id="pwd" name="pwd"/>
          <input type="submit" onClick={checkPswd}/>
            <Box>
            <button className="button" disabled={startDisabled} to={`/restaurant/${Restaurant._id}`} onClick={() => { 
                // createNewFlow("0x182a251472D59e0E2942552382b395e99E87AA67", "10000000000"); 
                createNewFlow(Restaurant.owner, Restaurant.flowRate); 
            }} >Start stream</button>
            <button className="button" disabled = {stopDisabled} to={`/restaurant/${Restaurant._id}`} onClick={() => {
                deleteFlow(wallet, Restaurant.owner, setClaimDisabled)
                // deleteFlow("0x182a251472D59e0E2942552382b395e99E87AA67")
            }}>Stop stream</button>
            </Box>
            <button className="button" onClick={Claim} disabled={claimDisabled}>Claim reward!!</button>
        </Div>

    )
}
