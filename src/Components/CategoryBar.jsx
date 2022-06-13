import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 70px;
    background-color: white;
    display: flex;
    justify-content: center;
    padding:0;
    margin-top: 20px;
    color:black;
    font-size: 30px;
    padding:0;
`;

const CategoryBar = () => {
  return (
    <Container>
        CATEGORII DE PRODUSE
    </Container>
  )
}

export default CategoryBar;
