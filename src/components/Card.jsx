import React from "react"
import Styled from "styled-components"
// import {Link} from "react-router-dom"

const Div = Styled.div`
     width: auto;
    height: auto;
    position: relative;
    border-radius: 10px;
    flex: 0 0 auto;        
    display: flex;          
    flex-direction: column;
    overflow: hidden;
    text-decoration: none;

`
const Another = Styled.div`
    position: relative;
`
const Image = Styled.img`
width: 100%;
height: 200px;
border-radius: 10px 10px 0 0;
position: relative;
cursor:pointer;
`

const Rating = Styled.h1`
position: absolute;
left: 0;
top: 0;
color: #fff;
background-color: #689f38;
padding: 4px 6px;
border-radius: 10px 0 5px 0;
font-weight: 700;
font-size: 13px;
`
const Title = Styled.h1`
margin: 0.5rem;
margin-bottom: 1rem;
font-size: 1.1rem;
font-weight: 500;
color: #0c0c0c;
text-decoration: none;
    
`
const Address =Styled.p`
color: #0c0c0c;
text-decoration: none;
margin: 0.5rem;
`
const Food =Styled.p`
color: #0c0c0c;
text-decoration: none;
margin: 0.5rem;
`
const WholeDiv = Styled.div`
    width: auto;
    height: auto;
    min-width: 300px;
    min-height: 300px;
    max-width: 300px;
    max-height: 450px;
    margin: 0.5rem;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    text-decoration: none;
    :hover{
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
        
    }
`

export default function Card(props) {

    return (
        <Div> 
            <WholeDiv>
                <Another>
            <Image src={require(`../images/${props.image}`)} alt="restro" /> 
            <Rating>{props.rating}</Rating>
                </Another>
            <Title>{props.name}</Title>
            <Address>{props.address}</Address>
            <Food>Cuisine: {props.food}</Food>
            {/* <Link href={`${props.link}`}>Visit</Link> */}
         </WholeDiv>
           
        </Div>
    )
}