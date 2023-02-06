import React,{useEffect,useState} from "react"
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router";
import Data from "../Data/Data";
import RestaurantCard from "../components/RestaurantCard";

const Div = styled.div`
    margin-top: 100px;
`
// const H1=styled.h1`
// font-size: 2rem;
// `


export default function Restaurant(props) {
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