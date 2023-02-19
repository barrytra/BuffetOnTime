import React from "react";
import styled from "styled-components";

const Div = styled.div`
        background-color: #303030;
    padding: 50px 0;
    margin-top: 50px;
`
const ContentBox = styled.div`
    display: flex;
    width: 90%;
    margin: 0 auto;
    max-width: 1080px;
`
const Copyright = styled.div`
    width: 50%;
    color: white;
`
const Contact =styled.div`
    color: white;
    padding-right: 30px;
`
const Connect = styled.div`
    color: white;
    text-align: right;
    width: 50%;
`
const Span = styled.div`
    
`

export default function Footer(){
    return(
        <Div>
            <ContentBox>
                <Copyright>&copy; BuffetOnTime</Copyright>
                <Contact>Contact</Contact>
                <Connect>
                    <Span>Connect with us</Span>
                </Connect>
            </ContentBox>
        </Div>
    )
}
