import React from 'react'
import styled from "styled-components"
import Card from "../components/Card"
import Data from "../Data/Data"
import Navbar from "../components/Navbar"
import Slider from "../components/Slider"
import { Link } from "react-router-dom"
import Footer from "../components/Footer"
const CardsList = styled.section`
    width: 100%;
    height: auto;
    margin: 1rem 0;
    display: flex;
    flex-wrap: wrap;
    text-decoration: none;
    justify-content: center;
`
const EmptyDiv = styled.div`
  margin: -30px auto 100px auto;
  padding: 5px;
`
const Div = styled.div`
width: 70%;
margin: 0 auto;
`
const Heading = styled.h1`
font-size:30px;
font-weight: 600;
margin-bottom: 30px;
font-family: "McLaren", cursive;
`

export default function Main() {

  
  const Cards = Data.map(item => {
    return (
      <Link to={`/restaurant/${item._id}`}>
        <Card
          key={item._id}
          image={item.image}
          rating={item.rating}
          name={item.name}
          address={item.address}
          food={item.type_of_food}
        />
      </Link>
    )
  })

  return (
    <div>
      <Navbar />
      <Slider />
      <Div>
        <EmptyDiv id="restaurants"></EmptyDiv>
        <Heading >Highly Recomended Restaurants in Delhi</Heading>
        <CardsList>
          {Cards}
        </CardsList>

      </Div>
      <Footer/>
    </div>

  )
}
