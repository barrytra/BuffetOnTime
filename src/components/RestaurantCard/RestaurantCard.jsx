import React from "react";
import styled from "styled-components";
import Img1 from "../../images/1.jpg"

const Div = styled.div`
width: 67%;
padding-right: 15px;
`
const Desc = styled.div`
    background-color: white;
    padding: 15px;
`
const Title = styled.div`
    justify-content: space-between;
    align-items: center;
    display: flex;
    margin-bottom: 15px;
`
const H2 = styled.h2`
    
`
const Rating = styled.div`
    
`
const Image = styled.img`
    width: 100%;
    object-fit: cover;
    display: block;
    aspect-ratio: auto 720 / 280;
    height: 280px;
    border-radius: 10px 10px 0 0;
`
const Span1 = styled.span`
    font-family: 'Open Sans',sans-serif;
`
const Span2 = styled.span`
    padding: 0 5px 0 5px;
`
const Span3 = styled.span`
    color: #4a90e2;
    cursor: pointer;
`
const Info = styled.div`
    display: block;
`
const AddressDiv = styled.div`
    display: flex;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 5px;
`
const Location = styled.div`
    margin-top: 5px;
    margin-left: 5px;
`

const Address = styled.div`
    color: #616161;
    padding-left: 5px;
`
const Food = styled.div`
    display: flex;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 5px;
`
const Icon = styled.div`
    margin-top: 5px;
    margin-left: 8px;
`
const Cuisine = styled.div`
    color: #616161;
    padding-left: 8px;
`
export default function RestaurantCard(props) {
    let Reviews = Math.floor((Math.random() * 100) + 1);
    return (
        <Div>

            <Image src={Img1} alt="restro" />
            <Desc>
                <Title>
                    <H2>
                        {props.name}
                    </H2>
                    <Rating>
                        <Span1>{props.rating}/5</Span1>
                        <Span2>|</Span2>
                        <Span3>{Reviews} Reviews</Span3>
                    </Rating>
                </Title>
                <hr/>
                <Info>
                    <AddressDiv>
                        <Location><i class="material-icons" >&#xe55f;</i></Location>
                        <Address>{props.address}</Address>
                    </AddressDiv>
                    <Food>
                        <Icon><i class='fas'>&#xf562;</i></Icon>
                        <Cuisine>{props.cuisine}</Cuisine>
                    </Food>
                </Info>
            </Desc>

        </Div>

    )
}
