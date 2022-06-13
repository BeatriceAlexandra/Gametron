import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    flex:1;
    margin:5px;
    height: 100%;
    position: relative;
    background-color:black;
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
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor:pointer;
    
`;

const Title = styled.h1`
    color: white;
    padding:5px;
    font-weight: bold;
    font-size:300%
`;

const Button = styled.button`
    border:none;
    padding:10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 900;
`;

const Description = styled.h2`
    color: white;
    margin-bottom: 20px;
    text-align: center;
    margin-bottom: 10px;
`;

const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
  };

function HomeCategory(props) {
    const {image, title, description, routeName} = props;
 
    return (
        <Container> 
            <Link to={`/category/${routeName}`} style={linkStyle}>
                    <Image src={image} alt={title}/>  
            <Info>
                    <Title> {title} </Title>
                    <Button className="btn btn-outline-dark my-4"> SHOP NOW</Button>
                    <Description> {description} </Description>
            </Info>
            </Link>
        </Container>
         
  );
}

export default HomeCategory;
