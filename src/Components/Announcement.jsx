import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 40px;
    background-color: #8858ED;
    color:white;
    display: flex;
    justify-content: center;
    font-size: 30px;
    font-weight: 500px;
    padding:0;
    margin:0;
`;

const Announcement = () => {
  return (
    <Container>
        Super Deal! Preț de producător.
    </Container>
  )
}

export default Announcement;

