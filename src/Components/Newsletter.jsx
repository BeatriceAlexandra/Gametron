import React from 'react';
import styled from 'styled-components';
// import SendIcon from '@mui/icons-material/Send';


const Container = styled.div`
    height: 15vh;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const Title = styled.h1`
    font-size:50px;
    margin-bottom: 10px;
`;
const Description = styled.div`
    font-size: 20px;
    font-weight: 300;
`;
// const InputContainer = styled.div`
//     width:50%;
//     height: 40px;
//     background-color: white;
//     display: flex;
//     justify-content: space-between;
//     border: 1px solid lightgray;
// `;
// const Input = styled.input`
//     border: none;
//     flex: 8;
//     padding-left: 20px;
// `;
// const Button = styled.button`
//     flex: 1;
//     border:none;
//     background-color: #8858ed;
//     font-color: white;
// `;


const Newsletter = () => {
    return (
      <Container>
          <Title> Newsletter </Title>
          <Description>Fii printre primii care află despre noile produse! </Description>
          {/* <InputContainer>
          <Input placeholder="Enter your email"/>
          <Button>
                  <SendIcon/>
          </Button>
          </InputContainer> */}
      </Container>
    )
  }

export default Newsletter;
