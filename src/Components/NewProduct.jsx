import React from 'react';
import styled from 'styled-components';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left:0;
    background-color: rgb(0, 0, 0, 0.5);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`;
const Container = styled.div`
    flex:1;
    margin: 5px;
    min-width: 280px;
    height:350px;
    display:flex;
    align-items:center;
    justify-content: center;
    background-color: rgb(236, 227, 255);
    position: relative;
    padding:0;


    &:hover ${Info}{
        opacity: 1;
    }
`;
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`
const Image = styled.img`
    width:75%;
    height:80%;
    z-index:2;
    object-fit: fill;

`;

const Icon = styled.div`
    width: 40px:
    height: 40px;
    border-radius : 50px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;

    &:hover {
        background-color: #8858ed;
        transform: scale (1.1);
    }
`
const NewProduct = ({item}) => {
  return (
    
    <Container>
        <Circle/>
        <Image src={item.img}/>
        <Info>
                <Icon>
                    <ShoppingCartOutlinedIcon/>
                </Icon>
                <Icon>
                    <SearchOutlinedIcon/>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlinedIcon/>
                </Icon>
        </Info>
    </Container> 
  )
}
export default NewProduct;
