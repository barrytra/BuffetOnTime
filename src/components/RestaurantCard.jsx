import React from "react";
import styled from "styled-components";

const Div = styled.div`
    background-color: red;
`

export default function RestaurantCard(props){
    return(
        // <Div>{props.name}</Div>
        <Div>{props.name}</Div>

    )
}