import styled from "styled-components"
import LeftArrow from "../images/left-arrow.png"
import RightArrow from "../images/right-arrow.png"
import sliderImage from "../images/sliderImage.avif"
import { Link } from "react-router-dom"

const Container = styled.div`
    width: 100%;
    height: 39.813rem;
    display: flex;
    position: relative;
    margin-top: 89px;
`
const ArrowLeft = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0%;
    bottom: 0%;
    margin: auto;
    cursor: pointer;
    opacity: 0.8;
    left: 10px;
    z-index: 3;
`
const ArrowRight = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0%;
    bottom: 0%;
    margin: auto;
    cursor: pointer;
    opacity: 0.8;
    right: 10px;
    z-index: 3;
`
const Img = styled.img`
    width: 30px;

`
const Wrapper =styled.div`
    width: 100%;
    position: relative;
`
const Slide = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    opacity: 0.2;
    position: absolute;
`
const Text = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    align-self: center;
    width: 80%;
    height: 100%;
`
const Info = styled.div`
    text-align: center;
    padding: 20px;
    flex: 1;
`
const Button = styled(Link)`
font-weight: bold;
text-decoration-line: none;
color: green;
font-family: "McLaren", cursive;
background-color: white;
border: 2px solid #4CAF50;
border-radius: 5px;
transition-duration: 0.4s;
padding: 15px 32px;
text-align: center;
display: inline-block;
font-size: 16px;
cursor: pointer;
:hover{
    color: white;
    background-color: green;
}
`
const Head = styled.h1`
    font-family: "McLaren", cursive;
    font-size: 100px;
    color: darkgreen;
    padding-bottom: 10px;
    
`
const Tag = styled.p`
    font-family: "McLaren", cursive;
    font-size: 20px;
    color: darkgreen;
    margin: 50px 0;
    font-weight: 500;
    letter-spacing: 3px;

`
export default function Slider(){
    return (
        <Container>
            <ArrowLeft>
                <Img src={LeftArrow} alt="left" />
            </ArrowLeft>
            <Wrapper>
                <Slide>
                    <Image src={sliderImage}/>
                    <Text>
                    <Info>
                        <Head>Welcome!!</Head>
                        <Tag>Eat without limits But quick</Tag>
                    </Info>
                    <Button to='/'>Book Now</Button>
                    </Text>
                </Slide>
            </Wrapper>
            <ArrowRight>
                <Img src={RightArrow} alt="right" />
            </ArrowRight>
        </Container>
    )
}