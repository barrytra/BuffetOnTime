import React from "react"
import styled from "styled-components"
import Card from "../components/Card"
import Data from "../Data/Data"
import Navbar from "../components/Navbar"
import Slider from "../components/Slider"
import { Link } from "react-router-dom"

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

  return (
    <div>
      <Navbar />
      <Slider />
      <Div>
        <Heading>Highly Recomended Restaurants in Delhi</Heading>
        <CardsList>
          {Cards}
        </CardsList>

      </Div>
    </div>

  )
}