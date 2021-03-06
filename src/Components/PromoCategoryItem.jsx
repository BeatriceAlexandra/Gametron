import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    flex:1;
    margin:3px;
    height: 70vh;
    position: relative;
    border: solid;
    border-width:10px;
`;

const Image = styled.img`
    width:100%;
    height:100%;
    object-fit: cover;
`;

const Info = styled.div`
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`;

const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
    font-weight: bold;
    font-size:500%;
`;


const PromoCategoryItem = ({item}) => {
  return (
    <Container>
      <Image src = {item.image} />
      <Info>
           <Title>{item.title}</Title>          
      </Info>
      
    </Container>
  )
}

export default PromoCategoryItem;
