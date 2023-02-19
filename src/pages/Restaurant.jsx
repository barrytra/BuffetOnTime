import React, { useEffect, useState } from "react"
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router";
import Data from "../Data/Data";
import RestaurantCard from "../components/RestaurantCard/RestaurantCard";
import BookNow from "../components/RestaurantCard/BookNow"
import Footer from "../components/Footer";
const Div = styled.div`
    display: flex;
    margin-top: 15px;
`
const Wholediv = styled.div`
    width: 90%;
    margin: 150px auto;
    max-width: 1080px;
`

export default function Restaurant() {
    const location = useLocation();
    const path = location.pathname.split('/')[2];
    const [Restaurant, setRestaurant] = useState({});

    useEffect(() => {
        const clickedRestaurantData = Data.find(obj => obj._id === path);
        // console.log(clickedRestaurantData);
        setRestaurant(clickedRestaurantData);
    },  [path])

    const Restocard = () => {
        
        return (
            <Div>
                <RestaurantCard 
                name={Restaurant.name}
                rating = {Restaurant.rating}
                address = {Restaurant.address}
                cuisine = {Restaurant.type_of_food}
                />
                <BookNow />
            </Div>
        )
    }

    return (
        <div>
            <Navbar />
            <Wholediv>
                <Restocard />
            </Wholediv>
            <Footer/>

        </div>

    )
}
