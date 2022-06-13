import React from 'react';
import styled from 'styled-components';
import ArrowLeft from '@mui/icons-material/ArrowLeft';
import ArrowRight from '@mui/icons-material/ArrowRight';
import { sliderItems } from '../dataSlider';
import { useState } from 'react';
import {Link} from 'react-router-dom';



const Container = styled.div`
    width: 100%;
    height: 60vh;
    display: flex;
    position: relative;
    overflow: hidden;
    margin-top:0;
    padding:0;
    
`;
const Wrapper = styled.div`
  height:100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props)=> props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display:flex;
  align-items: center;
  background-color:#${(props) => props.bg};
`;
const ImageContainer = styled.div`
height:100%;
flex:1;
`;
const Image = styled.img`
  height: 60%;
`;

const InfoContainer = styled.div`
  flex:1;
  padding: 50px;
  margin-bottom:300px;
`;
const Title = styled.h1`
  font-size:80px;
`;
const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding:10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Arrow = styled.div`
    width:50px;
    height: 50px;
    background-color: #b19cdf;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top:0;
    bottom: 0;
    right: ${(props) => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index:2;
`;

const Slider = () => {

      const[slideIndex, setSlideIndex] = useState(0);
      const handleClick = (direction) => {
        if (direction ==="left") {
          setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2);
        
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0);
        }
      };
      
  return (
    <Container>

        <Arrow direction="left" onClick={() => handleClick("left")}>    
            <ArrowLeft/>   
        </Arrow>    
             <Wrapper slideIndex={slideIndex}> 
               {sliderItems.map((item) => (

                <Slide bg={item.bg} key={item.id}>
                      <ImageContainer>
                          <Image src= {item.img} />
                      </ImageContainer>
                      <InfoContainer>
                            <Title>{item.title}</Title>
                            <Description>{item.desc}</Description>
                            <Link to="/category/Casti">
                                <Button>SHOW NOW</Button>
                            </Link>
                      </InfoContainer>
                </Slide>
               ))}
            </Wrapper>
        <Arrow direction ="right" onClick={() => handleClick ("right")}>
            <ArrowRight/>
        </Arrow>
    </Container>
    );
}

export default Slider;
