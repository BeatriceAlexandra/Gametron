import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 70px;
    background-color: white;
    display: flex;
    justify-content: center;
    padding:0;
    margin-top: 20px;
    
`;

const Info = styled.h1`
    height: 70px;
    color:purple;
    font-size: 50px;
    padding:0;
`;


const CoomingSoon = () => {
  return (
    <Container>
        <Info>
            NEW PRODUCTS SOON
        </Info>
    </Container>
  )
}

export default CoomingSoon;
