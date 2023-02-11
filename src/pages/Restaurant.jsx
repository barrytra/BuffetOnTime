import React,{useEffect,useState} from "react"
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router";
import Data from "../Data/Data";
import RestaurantCard from "../components/RestaurantCard";
import * as PushAPI from "@pushprotocol/restapi";

const Div = styled.div`
    margin-top: 100px;
`
// const H1=styled.h1`
// font-size: 2rem;
// `


export default function Restaurant(props) {
    //SEND NOTIFICATION TO A SINGLE TARGET
    const sendNotif = async () => {
    const apiResponse = await PushAPI.payloads.sendNotification({
      // signer,
      type: 3, // target
      identityType: 2, // direct payload
      notification: {
        title: "what is title",
        body: "message from my dapp",
        // title: `[SDK-TEST] notification TITLE:`,
        // body: `[sdk-test] notification BODY`
      },
      // payload: {
      //   title: `[sdk-test] payload title`,
      //   body: `sample msg body`,
      //   cta: '',
      //   img: ''
      // },
      recipients: "eip155:80001:0x9E9725400681C01e1C1e5678020b3d54D568d842", // recipient address
      channel: "eip155:80001:0x182a251472D59e0E2942552382b395e99E87AA67", // your channel address
      env: "staging",
    });
    };
    const location = useLocation();
    const path = location.pathname.split('/')[2];
    const [restraunt,setRestraunt]= useState({});

    useEffect(() => {
    const clickedRestrauntData = Data.find(obj => obj._id === path);
    // console.log(clickedRestrauntData);
     setRestraunt(clickedRestrauntData);
    }, [path])

    const XYZ = () => {
        return(
            <Div>
            <RestaurantCard  name={restraunt.name}/>
            {/* <button >Place order</button> */}
            <button onClick={sendNotif}>Place order</button>
            </Div>
        )
    }

    return (
        <div>
            <Navbar />
            <XYZ/>
            
        </div>

    )
}